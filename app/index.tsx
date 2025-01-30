import { Text, View, StatusBar } from "react-native";
import styled from "styled-components/native";
import ThemeProvider from "styled-components";
import ParcelCard from "@/components/orgamisms/cards/ParcelCard";
import PrimaryButton from "@/components/molecules/buttons/PrimaryButton";
import colors from "@/constants/colours";
const ScreenContainer = styled.SafeAreaView`
  height: 100%;
  align-items: center;
  justify-content: center;
`
export default function Index() {
  return (
    <ScreenContainer>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
      />

      <ParcelCard />
      
    </ScreenContainer>
  );
}
