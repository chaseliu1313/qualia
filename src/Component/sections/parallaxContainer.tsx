import React, {
  ReactElement,
  ReactInstance,
  useEffect,
  useRef,
  useState,
} from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import styled from "styled-components";
import { animated } from "react-spring";
import Section1 from "./quiteessential";
import Section_2 from "./unlimited";
import Section_3 from "./luxury";
import Branding_A from "./branding_a";
import SvgCrossSection from "./svgCross";
import Aspiring from "./aspiring";
import { useParallax, useWindowResize } from "../../Hooks";
import EntryAni from "../entryAni";
import { useScrollStatus } from "../../Hooks/useScrollStatus";
const section2 = require("../../Asset/Img/section_2.png");
const section4 = require("../../Asset/Img/section_4.jpg");

const ParallaxContainer = (): ReactElement => {
  const parallaxRef = useRef<IParallax | null>(null);
  const { size } = useWindowResize();
  const iHeight = size.height;
  const { scrollStatus } = useScrollStatus();
  const { setParallax } = useParallax();

  const [focusedSection, setFocusedSection] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    if (parallaxRef && parallaxRef.current) {
      setParallax(parallaxRef.current);
      const container = parallaxRef.current
        .container as React.MutableRefObject<HTMLDivElement>;

      container.current.addEventListener("scroll", (e) => {
        if (parallaxRef && parallaxRef.current) {
          const section = Math.floor(
            parallaxRef.current?.current / parallaxRef.current?.space
          );
          setOffset(
            parallaxRef.current?.current / container.current.scrollHeight
          );
          setScrollPosition(parallaxRef.current?.current);
          setFocusedSection((pre): number => {
            if (pre !== section) return section;
            return pre;
          });
        }
        parallaxRef.current?.update();
      });
    }

    return () => {
      if (parallaxRef && parallaxRef.current) {
        const container = parallaxRef.current
          .container as React.MutableRefObject<HTMLDivElement>;
        container.current.removeEventListener("scroll", (e) => {});
      }
    };
  }, []);

  return (
    <Parallax
      pages={7.5}
      style={{ height: "100%" }}
      ref={parallaxRef}
      enabled={scrollStatus}
    >
      <ParallaxLayer offset={0} speed={1}>
        <EntryAni scrollPosition={scrollPosition} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.95}
        speed={0.7}
        style={{ zIndex: 20 }}
        factor={2}
      >
        <Section1 scrollPosition={scrollPosition} offset={offset} />
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 1.75, end: 2.3 }}
        speed={1}
        factor={0.7}
        style={{
          zIndex: -10,
          height: iHeight * 0.7,
        }}
      >
        <Section_2 asset={section2} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.4}
        speed={0.02}
        style={{ height: iHeight * 0.8 }}
      >
        <Branding_A
          currentSection={focusedSection}
          scrollPosition={scrollPosition}
          offset={offset}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.7} style={{ height: iHeight }}>
        <Section_3 currentSection={focusedSection} />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 4.7, end: 5.3 }}
        speed={1}
        style={{
          zIndex: -1,
          height: iHeight * 0.6,
        }}
      >
        <Section_2 asset={section4} />
      </ParallaxLayer>
      <ParallaxLayer offset={5.2} speed={0.5} style={{ height: iHeight * 1.6 }}>
        <SvgCrossSection currentSection={focusedSection} />
      </ParallaxLayer>
      <ParallaxLayer offset={6.2} speed={1} style={{ height: iHeight * 2 }}>
        <Aspiring currentSection={focusedSection} />
      </ParallaxLayer>
    </Parallax>
  );
};

const Container = styled(animated.div)``;

export default ParallaxContainer;
