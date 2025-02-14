import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import { primaryColors } from "../../assets/Colors";
import Button from "../../components/Button";
import { Sparkles } from "../../components/ui/sparkles";
import { Link } from "react-scroll";

const Container = styled.section`
  padding-top: ${(props) => props.paddingtop || "3rem"};
  padding-bottom: ${(props) => props.paddingBottom || "6rem"};
  text-align: center;
  color: #0f0f0f;
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 800px) {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    /* padding-top: ${(props) => props.mobilepaddingtop || "3rem"}; */
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 1;
  margin: 0;
`;

const Header = styled.div`
  font-size: ${(props) => props.fontSize || "5rem"};
  font-weight: ${(props) => props.fontWeight || "600"};
  line-height: ${(props) => props.lineHeight || "6rem"};
  margin-bottom: ${(props) => props.marginBottom || ""};
  padding: 3rem 0 1rem 0;
  margin: 0 auto;

  @media only screen and (min-width: 320px) and (max-width: 580px) {
    font-size: 1.5rem;
    line-height: 2rem;
    max-width: 90%;
    padding: 0rem 0 0.5rem 0;
  }

  @media only screen and (min-width: 581px) and (max-width: 1024px) {
    font-size: ${(props) => props.fontSize || "3.5rem"};
    line-height: ${(props) => props.lineHeight || "4rem"};
    max-width: 90%;
  }
`;

const BrHead = styled.br`
  // Desktops, large screens
  @media only screen and (max-width: 1025px) {
    display: none;
  }
`;

const SubHead = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: ${(props) => props.lineHeightSub || "1rem"};
  max-width: 60rem;
  margin: 0 auto;

  @media only screen and (min-width: 320px) and (max-width: 580px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
    max-width: 80%;
  }

  @media only screen and (min-width: 581px) and (max-width: 760px) {
    font-size: 1rem;
    line-height: ${(props) => props.lineHeightSub || "1.5rem"};
    max-width: 80%;
  }

  @media only screen and (min-width: 761px) and (max-width: 1024px) {
    font-size: 1rem;
    line-height: ${(props) => props.lineHeightSub || "1rem"};
    max-width: 80%;
  }
`;

const BrSubHead = styled.br`
  /* display: none; */

  // Desktops, large screens
  @media only screen and (max-width: 760px) {
    display: none;
  }
`;
const Tagline = styled.span`
  color: ${primaryColors.Purple};
`;

const CTA = styled.div`
  text-align: center;
  display: flex;
  gap: 1rem;
`;

const Hero = ({
  Header1 = "Get a full-time maid ",
  Header2 = "or a",
  Header3 = "",
  tagline = "maid visa ",
  topText = "Online in 5 minutes",
  midText = "",
  bottomText = "Cancel anytime",
  fontSize,
  marginBottom,
  lineHeight,
  fontWeight,
  paddingtop,
  paddingBottom,
  mobilepaddingtop,
  isHero,
  hasCTA,
  lineHeightSub,
  children,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-offset="400"
      paddingtop={paddingtop}
      paddingBottom={paddingBottom}
      mobilepaddingtop={mobilepaddingtop}
      className={
        isHero && " relative dark:bg-grid-white/[0.2] bg-grid-black/[0.025]"
      }
    >
      {isHero && (
        <>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <Sparkles className="absolute" />
        </>
      )}
      <HeaderContainer>
        <Header
          fontSize={fontSize}
          marginBottom={marginBottom}
          lineHeight={lineHeight}
          fontWeight={fontWeight}
          className=" relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
        >
          {Header1}
          <BrHead /> {Header2}
          <Tagline> {tagline}</Tagline>
          {Header3}
        </Header>
        <SubHead lineHeightSub={lineHeightSub}>
          {topText}
          <BrSubHead />
          {midText}

          <BrSubHead />
          {bottomText}
        </SubHead>
      </HeaderContainer>

      {hasCTA && (
        <CTA>
          <Button
            height="2.5rem"
            fontSize="1rem"
            text="Talk to us"
            display="other"
            bordercolor="transparent"
            small
          />

          <Link
            to="Sign Up"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={2000}
            onClick={() => {}}
          >
            <Button
              height="2.5rem"
              fontSize="1rem"
              display="grey"
              text="Start for free"
              bordercolor="#EBEBEB"
              textcolor="#0F0F0F"
              hoverbg="#dbdbdb"
              small
            />
          </Link>
        </CTA>
      )}
      {children}
    </Container>
  );
};

export default Hero;
