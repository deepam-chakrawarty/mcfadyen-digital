import { FunctionComponent } from "react";
import styled from "styled-components";
import Header from "./Header";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Footer from "./Footer";
import MiddleSection from "./MiddleSection";
import { useMediaQuery } from "./hooks";
import HorizontalImageScroll from "./components/ImageScroll";

const AnnotationsPDP01: FunctionComponent = () => {
  const isMobile = useMediaQuery("(max-width: 1050px)");

  return (
    <>
      <Header />

      {!isMobile && (
        <SectionsContainer>
          <LeftSection />
          <div>
            <MiddleSection />
            <Footer />
          </div>
          <RightSection />
        </SectionsContainer>
      )}

      {isMobile && (
        <SectionsContainer>
          <HorizontalImageScroll />
          <RightSection />
          <Footer />
        </SectionsContainer>
      )}
    </>
  );
};

export default AnnotationsPDP01;

const SectionsContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;

  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 90%;
  }
`;
