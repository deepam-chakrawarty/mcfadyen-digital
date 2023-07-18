import React from "react";
import { styled } from "styled-components";

import M1 from "./images/model/m1.png";
import M2 from "./images/model/m2.png";
import M3 from "./images/model/m3.png";
import Right from "./images/Right.svg";

function RightSection() {
  return (
    <ShoppingDetails>
      <HeaderDiv>
        <Title>JONATHAN SIMKHAI</Title>
        <Body>Lurex Linen Viscose Jacket in Conchiglia</Body>

        <Price>$225</Price>
      </HeaderDiv>

      <ColorConchiglia>
        <b>{`Color `}</b>
        <span>Conchiglia</span>
      </ColorConchiglia>
      <ImagesContainer>
        <img src={M1} alt="" />
        <img src={M2} alt="" />
        <img src={M3} alt="" />
      </ImagesContainer>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Size>
          Size <span>L</span>
        </Size>

        <SizeGuide>SIZE GUIDE</SizeGuide>
      </div>

      <Items>
        <Item>XS</Item>
        <Item>S</Item>
        <Item>M</Item>
        <Item>L</Item>
        <Item>XL</Item>
      </Items>

      <AddToBag>
        ADD TO BAG
        <img alt="" src={Right} />
      </AddToBag>

      <br />

      <div>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</div>
      <div>Speak to a Personal Stylist CHAT NOW</div>
    </ShoppingDetails>
  );
}

export default RightSection;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
`;

const Item = styled.div`
  align-self: center;
  padding: 4px 6px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  width: 60px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  justify-content: center;
`;
const Body = styled.div`
  font-size: 14px;
`;

const Price = styled.div`
  font-size: 14px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  gap: 6px;
  img {
    width: 53px;
    border: 1px solid #cdcdcd;

    &:first-child {
      border: 2px solid #000;
    }
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;
const ColorConchiglia = styled.div`
  text-transform: uppercase;
`;
const Size = styled.b`
  text-transform: uppercase;
`;
const SizeGuide = styled.div`
  text-decoration: underline;
`;
const AddToBag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #000;
  color: white;
  border-radius: 36px;
  padding: 12px 24px;
  align-self: center;
  width: 85%;
`;
const ShoppingDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  width: 320px;
  margin-top: 40px;
  padding: 20px;
  height: 100%;

  position: sticky;
  position: -webkit-sticky;
  top: 100px; //margintop + header

  @media (max-width: 1050px) {
    position: relative;
    position: relative;
    top: unset;
    max-width: 600px;
    width: 100%;
  }
`;
