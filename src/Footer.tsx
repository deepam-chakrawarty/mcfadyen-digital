import React from "react";
import { styled } from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <Items>
        <Item>Jonathan Simkhai</Item>
        <Item>Blazers</Item>
        <Item>Viscose</Item>
      </Items>

      <br />
      <br />
      <br />
      <br />
      <Content>
        <Title>a note from the editor</Title>
        <Body>{`The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. `}</Body>

        <ContentDetails>
          {`-By `}
          <span>MINNA SHIM</span>, Fashion Editor
        </ContentDetails>
      </Content>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default Footer;

const Items = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const Item = styled.div`
  align-self: center;
  text-decoration: underline;
  text-transform: uppercase;
`;

const Title = styled.b`
  text-transform: uppercase;
  text-align: center;
`;
const Body = styled.div`
  font-size: 22px;
  max-width: 800px;
`;

const ContentDetails = styled.div`
  span {
    text-decoration: underline;
    margin: 0px 4px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;
`;
