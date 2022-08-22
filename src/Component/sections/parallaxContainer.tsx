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
import Branding_Q from "./branding_q";
import ReactDOM from "react-dom";
import Section_2 from "./unlimited";
import Section_3 from "./aesthetic";
import Branding_A from "./branding_a";

const ParallaxContainer = (): ReactElement => {
  const parallaxRef = useRef<IParallax | null>(null);
  const iHeight = window.innerHeight;
  const [focusedSection, setFocusedSection] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    if (parallaxRef && parallaxRef.current) {
      const container = parallaxRef.current
        .container as React.MutableRefObject<HTMLDivElement>;

      console.log(parallaxRef.current?.space, parallaxRef.current?.current);

      container.current.addEventListener("scroll", (e) => {
        if (parallaxRef && parallaxRef.current) {
          const section = Math.floor(
            parallaxRef.current?.current / parallaxRef.current?.space
          );
          setScrollPosition(parallaxRef.current?.current);
          setFocusedSection((pre): number => {
            if (pre !== section) return section;
            return pre;
          });
        }
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
    <Parallax pages={4} style={{ height: "100%" }} ref={parallaxRef}>
      <ParallaxLayer offset={0} speed={1} style={{ zIndex: 20 }}>
        <Section1 scrollPosition={scrollPosition} />
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 1, end: 1.3 }}
        speed={1}
        style={{
          zIndex: -10,
          height: iHeight * 0.6,
          backgroundColor: "#E0AFA0",
        }}
      >
        <Section_2 />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.55}
        speed={0.5}
        style={{ height: iHeight * 0.8 }}
      >
        <Branding_A
          scrollPosition={scrollPosition}
          currentSection={focusedSection}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5} style={{ height: iHeight * 0.8 }}>
        <div></div>
      </ParallaxLayer>
    </Parallax>
  );
};

const Container = styled(animated.div)``;

export default ParallaxContainer;
