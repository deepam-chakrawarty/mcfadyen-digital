import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "./hooks";

import Account from "./images/Account.svg";
import Bag from "./images/Bag.svg";
import Search from "./images/Search.svg";
import Ham from "./images/Ham.svg";
import { RootState } from "./redux/store";
import { setShowDrawer } from "./redux/slices/uiSlice";
import Drawer from "./Drawer";

function Header() {
  const isMobile = useMediaQuery("(max-width: 1050px)");

  const dispatch = useDispatch();
  const { showDrawer } = useSelector((state: RootState) => state.uiReducer);

  const handleOpenDrawer = () => {
    dispatch(setShowDrawer(!showDrawer));
  };

  return (
    <>
      <Nav>
        <Title>MY COMPANY.COM</Title>

        {!isMobile && (
          <Items>
            <Item>The Edit</Item>
            <Item>New Arrivals</Item>
            <Item>Designers</Item>
            <Item>Clothing</Item>
            <Item>Shoes</Item>
            <Item>Bags</Item>
            <Item>Accessories</Item>
            <Item>Jewelry</Item>
            <Item>Beauty</Item>
            <Item>home</Item>
          </Items>
        )}

        <Icons>
          <img src={Search} alt="" />
          <img src={Bag} alt="" />

          {!isMobile ? (
            <img src={Account} alt="" />
          ) : (
            <img src={Ham} alt="" onClick={() => handleOpenDrawer()} />
          )}
        </Icons>
      </Nav>

      {isMobile && showDrawer && <Drawer />}
    </>
  );
}

export default Header;

const Items = styled.div`
  display: flex;
  gap: 16px;
`;

const Item = styled.div`
  align-self: center;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 15;
  height: 60px;
`;
const Title = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  justify-content: center;
  align-self: center;
`;

const Icons = styled.div`
  display: flex;
  gap: 6px;
  align-self: center;
  img {
    width: 25px;
    height: 25px;
  }
`;
