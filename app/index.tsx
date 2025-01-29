import {Text, View } from "react-native";
import styled from "styled-components/native";
import ThemeProvider from "styled-components";
import ParcelCard from "@/components/cards/ParcelCard";

const ScreenContainer = styled.SafeAreaView`
  background-color: lightgoldenrodyellow;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export default function Index() {
  return (
    <ScreenContainer>

    <ParcelCard />

    </ScreenContainer>
  );
}
