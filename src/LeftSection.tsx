import React from "react";
import { styled } from "styled-components";

function LeftSection() {
  return (
    <TabGroup>
      <Items>
        <Item>details</Item>
        <Item>delivery</Item>
        <Item>fit</Item>
        <Item>share</Item>
      </Items>

      <Content>
        <span>{`The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel. `}</span>

        <ContentDetails>
          See the
          <span>EDITOR’S</span>NOTE
        </ContentDetails>

        <ContentDetails>
          Learn about the
          <span>DESIGNER</span>
        </ContentDetails>
      </Content>
    </TabGroup>
  );
}

export default LeftSection;

const Items = styled.div`
  display: flex;
  gap: 16px;
`;

const Item = styled.div`
  align-self: center;
  text-transform: uppercase;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
const TabGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  text-shadow: 2px 4px 8px grey;
  margin-top: 20px;
  margin-left: 20px;
  height: 100%;

  position: sticky;
  position: -webkit-sticky;
  top: 80px;
`;

const ContentDetails = styled.div`
  margin-top: 10px;
  gap: 10px;
  span {
    text-decoration: underline;
    margin: 0px 4px;
  }
`;
