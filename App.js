import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styled from 'styled-components/native';

export default function App() {
  const progressRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const animation = Animated.sequence([
        progressRef.current.animate(100, 8000),
      ]);

      progressRef && animation.start();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Container>
      <Text>It is project to test "react-native-circular-progress"</Text>
      <AnimatedCircularProgress
        ref={progressRef}
        fill={0}
        size={120}
        width={20}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  margin-bottom: 30px;
  font-size: 24px;
  text-align: center;
`;
