"use client";
import {
  Button,
  Card,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { blue300, fontWeighth4Bold } from "../styles/theme";
import React from "react";
import Carousel from "./Carousel";

const postDetail = () => {
  return (
    <MainContainer>
      <ItemContainer>
        <H1Typography variant="h1">물품 교환소</H1Typography>
        <ServeContainer>
          <ItemCard>
            <Carousel />
          </ItemCard>
          <ItemCard>
            <ItemName>상품명</ItemName>
            <ItemDescription>
              사고 나서 한번도 안썼어요.
              <br /> 완전 새 상품입니다~
              <br />
              떨이로 가져가실 분
              <br />
              채팅으로 연락 주세요!!
              <br />
              누구든 환영입니당~
            </ItemDescription>
            <ChatBtn variant="contained"> 채팅하기</ChatBtn>
          </ItemCard>
        </ServeContainer>
      </ItemContainer>
      <ItemContainer>
        <H1Typography variant="h1">해당 상품의 관심도</H1Typography>
        <ServeContainer>
          <ChartCard>차트</ChartCard>
          <CountCard>
            <Count>
              <CountNumber>COUNT : 52</CountNumber>
              <p>인기 상품이네요!!</p>
            </Count>
          </CountCard>
        </ServeContainer>
      </ItemContainer>
    </MainContainer>
  );
};

export default postDetail;

const MainContainer = styled(Container)({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
});
const ItemContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
  marginBottom: "25px",
});

const ServeContainer = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
});

const H1Typography = styled(Typography)({
  fontSize: "32px",
  marginTop: "30px",
  marginBottom: "20px",
  color: `${blue300}`,
  fontWeight: `${fontWeighth4Bold}`,
});

const ItemCard = styled(Card)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: "4px",
  width: "400px",
  height: "400px",
});

const ItemName = styled("p")({
  display: "flex",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: `${fontWeighth4Bold}`,
  marginBottom: "20px",
});

const ItemDescription = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
});

const ChatBtn = styled(Button)({
  position: "absolute",
  bottom: "30px",
  right: "20px",
  width: "120px",
  height: "40px",
  backgroundColor: `${blue300}`,
});

const ChartCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  height: "400px",
  width: "400px",
  margin: "4px",
});
const CountCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "400px",
  boxShadow: "none",
});
const Count = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  width: "300px",
  height: " 200px",
  backgroundColor: `${blue300}`,
  color: "white",
});
const CountNumber = styled("p")({
  fontWeight: "bold",
  fontSize: "32px",
  marginBottom: "20px",
});
