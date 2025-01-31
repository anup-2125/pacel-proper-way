import { Text, View, StatusBar, ScrollView } from "react-native";
import styled from "styled-components/native";
import ParcelCard from "@/components/orgamisms/cards/ParcelCard";
import colors from "@/constants/colours";
import React, { useRef } from "react";

const ScreenContainer = styled.SafeAreaView`
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: darkgray;
  padding: 16px;
`

const StyledScrollView = styled.ScrollView`
  flex: 1;
  padding-top: 16px;
`;


export default function Index() {

  const modalizeRef = useRef(null);

  // const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["25%", "50%", "90%"];

  return (
    <ScreenContainer>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
      />

      <StyledScrollView showsVerticalScrollIndicator={false}>

        <ParcelCard />
        <ParcelCard />
        <ParcelCard />
        <ParcelCard />
        <ParcelCard />

      </StyledScrollView>


    </ScreenContainer>
  );
}
