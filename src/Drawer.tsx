import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { useClickOutside } from "./hooks";
import { setShowDrawer } from "./redux/slices/uiSlice";
import { RootState } from "./redux/store";

function Drawer() {
  const drawerRef = useRef(null);

  const dispatch = useDispatch();
  const { showDrawer } = useSelector((state: RootState) => state.uiReducer);

  const handleClose = () => {
    dispatch(setShowDrawer(false));
  };

  useClickOutside(drawerRef, () => handleClose(), showDrawer);

  useEffect(() => {
    if (showDrawer) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showDrawer]);

  return (
    <DrawerContainer open>
      <Menu ref={drawerRef}>
        <br />

        <Items>
          <Item onClick={() => handleClose()}>The Edit</Item>
          <Item onClick={() => handleClose()}>New Arrivals</Item>
          <Item onClick={() => handleClose()}>Designers</Item>
          <Item onClick={() => handleClose()}>Clothing</Item>
          <Item onClick={() => handleClose()}>Shoes</Item>
          <Item onClick={() => handleClose()}>Bags</Item>
          <Item onClick={() => handleClose()}>Accessories</Item>
          <Item onClick={() => handleClose()}>Jewelry</Item>
          <Item onClick={() => handleClose()}>Beauty</Item>
          <Item onClick={() => handleClose()}>home</Item>
        </Items>
      </Menu>
    </DrawerContainer>
  );
}

export default Drawer;

const DrawerContainer = styled.dialog`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  margin: auto;
  border: none;
  z-index: 50;
  padding: 0;
  display: flex;
  justify-content: flex-end;
`;

const Menu = styled.div`
  width: 250px;
  height: 100%;
  background: #fff;
`;

const MenuTitle = styled.h3`
  margin-left: 12px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.div`
  align-self: center;
  cursor: pointer;
`;
export { Drawer, Menu, MenuTitle };
