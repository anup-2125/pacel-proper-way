import {Text, View } from "react-native";
import styled from "styled-components/native";
import ThemeProvider from "styled-components";
import Btn from "@/components/buttons/Btn";
import PrimaryBtn from "@/components/buttons/PrimaryBtn";
import Tag from "@/components/buttons/tags/Tag";
import ParcelCard from "@/components/buttons/cards/ParcelCard";

const ScreenContainer = styled.SafeAreaView`
  background-color: lightgoldenrodyellow;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Card = () => {
  return (
    <View></View>
  )
}


export default function Index() {
  return (
    <ScreenContainer>

    <ParcelCard />

    </ScreenContainer>
  );
}
