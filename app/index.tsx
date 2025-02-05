import { Text, View, StatusBar, ScrollView } from "react-native";
import styled from "styled-components/native";
import ParcelCard from "@/components/orgamisms/cards/ParcelCard";
import colors from "@/constants/colours";
import React, { useRef } from "react";
import BottomDrawer from "@/components/orgamisms/cards/BottomDrawer";
import BtmDrwr from "@/components/orgamisms/cards/BtmDrwr";
import MapView from 'react-native-maps';


const ScreenContainer = styled.SafeAreaView`
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: darkgray;
`

const StyledScrollView = styled.ScrollView`
  flex: 1;
  padding-top: 16px;
  z-index: 10;
`;

const PaddedView = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  padding: 0 16px;
`

export default function Index() {

  return (
    <ScreenContainer>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
      />

      <MapView style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: 15.6142,
          longitude: 73.7847,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} showsUserLocation={true} />

      <PaddedView>

        <StyledScrollView showsVerticalScrollIndicator={false}>

          <ParcelCard />
          <ParcelCard />
          <ParcelCard />
          <ParcelCard />
          <ParcelCard />

        </StyledScrollView>

      </PaddedView>



      {/* <BottomDrawer /> */}



    </ScreenContainer>
  );
}
