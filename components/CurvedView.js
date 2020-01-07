import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Svg, {
  Circle,
  Defs,
  ClipPath,
  Image,
  LinearGradient,
  Stop
} from "react-native-svg";

const window = Dimensions.get("window");

const CURVE_RAY = 800;

const GradientClip = ({ height }) => (
  <>
    <Defs>
      <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0.2" stopColor="rgb(255,255,0)" />
        <Stop offset="0.8" stopColor="red" />
      </LinearGradient>
    </Defs>
    <Circle
      cx={window.width / 2}
      cy={`-${CURVE_RAY - height}`}
      r={CURVE_RAY}
      fill="url(#grad)"
    />
  </>
);

const ImageClip = ({ height, imageUri }) => (
  <>
    <Defs>
      <ClipPath id="clip">
        <Circle
          cx={window.width / 2}
          cy={`-${CURVE_RAY - height}`}
          r={CURVE_RAY}
        />
      </ClipPath>
    </Defs>
    <Image
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      href={imageUri}
      clipPath="url(#clip)"
    />
  </>
);

const CurvedView = ({ children, size = "large", imageUri }) => {
  const height = size === "large" ? 300 : 100;
  return (
    <View style={styles.container}>
      <View style={styles.clip}>
        <Svg height={height} width="100%">
          {imageUri ? (
            <ImageClip height={height} imageUri={imageUri} />
          ) : (
            <GradientClip height={height} />
          )}
        </Svg>
      </View>
      <View style={{ ...styles.content, height }}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative"
  },
  clip: {
    width: window.width,
    position: "absolute"
  },
  content: {
    width: window.width,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20
  }
});

export default CurvedView;
