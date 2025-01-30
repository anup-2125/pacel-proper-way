import { Drawer } from 'expo-router/drawer';
import { useNavigation } from 'expo-router';
import { Pressable, View, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import StyledText, { StyledTextProp } from '@/components/atoms/typography/StyledText';
import colors from '@/constants/colours';

type RootParamList = {

}

const CustomHeaderLeft = () => (
  <View style={{ flexDirection: 'row', marginLeft: 15 }}>
    <Pressable onPress={() => console.log('Icon 1 pressed')}>
      <MaterialIcons name='close' size={24} style={{ marginRight: 15 }} />
    </Pressable>
    <Text style={{ fontSize: 18, textTransform: 'capitalize' }}>
      deliver parcel
    </Text>
  </View>
);

const CustomHeaderRight = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootParamList>>();
  return (
    <View style={{ flexDirection: 'row', marginLeft: 15 }}>
      <Pressable onPress={() => console.log('Icon 1 pressed')}>
        <MaterialIcons name='chat' size={24} style={{ marginRight: 15 }} />
      </Pressable>
      <Pressable
        onPress={() => navigation.toggleDrawer()}
        style={{ marginRight: 15 }} >
        <MaterialIcons name='menu' size={24} />
      </Pressable>
    </View>

  );
};

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerPosition: 'right',
        headerLeft: () => <CustomHeaderLeft />,
        headerRight: () => <CustomHeaderRight />,
        headerTitle: '', // Remove default title
        headerStyle: { backgroundColor: colors.primary },
      }}
    >
      <Drawer.Screen
        name="index"
      // options={{ title: 'Home' }}
      />
      {/* Add more screens here */}
    </Drawer>
  );
}


