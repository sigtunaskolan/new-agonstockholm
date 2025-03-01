import React, { useEffect, useRef, CSSProperties } from "react";
import lottie, { AnimationConfigWithData } from "lottie-web";

interface LottieAnimationProps {
  animationData: AnimationConfigWithData["animationData"];
  loop?: boolean;
  autoplay?: boolean;
  style?: CSSProperties;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = false,
  autoplay = true,
  style = {},
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container && container.current) {
      const animation = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: loop,
        autoplay: autoplay,
        animationData: animationData,
      });

      return () => {
        animation.destroy();
      };
    }
  }, [animationData, loop, autoplay]);

  return <div ref={container} style={style} />;
};

export default LottieAnimation;
