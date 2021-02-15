import styled, { keyframes } from "styled-components";

const jettAnimate = keyframes`
  from {
    left: 18px;
    opacity: 0;
  }
  to {
    left: 216px;
    opacity: 1;
  }
`;

const phoenixAnimate = keyframes`
  from {
    right: 18px;
    opacity: 0;
  }
  to {
    right: 259px;
    opacity: 1;
  }
`;

const contentAnimate = keyframes`
  from {    
    opacity: 0;
  }
  to {    
    opacity: 1;
  }
`;

export const Container = styled.section`
  position: relative;

  width: 100%;
  height: 721px;
`;

export const ContentModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${contentAnimate} 0.8s;
  z-index: 5;

  .icon-wrapper {
    width: 70px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #ff4655;
  }

  .logo {
    margin-top: 40px;
  }

  .description {
    margin-top: 64px;

    color: #ff4655;
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }

  a {
    margin-top: 32px;
    max-width: 246px;

    &:first-of-type {
      margin-top: 64px;
    }
  }
`;

export const AgentsModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 4;

  img {
    width: 368px;
    height: 564px;
    object-fit: cover;
  }

  .jett {
    position: absolute;
    top: 216px;
    left: 216px;

    animation: ${jettAnimate} 0.8s ease-out;
  }

  .phoenix {
    position: absolute;
    top: 216px;
    right: 259px;

    animation: ${phoenixAnimate} 0.8s ease-out;
    transform: rotateY(180deg);
  }
`;

export const BarsModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 3;

  .badge {
    position: absolute;
    top: 102px;
    left: 97px;
  }

  .decor {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const Bar = styled.div`
  position: absolute;

  width: 1px;
  height: 669px;
  background: #0f1923;

  &.left {
    top: 0;
    left: 123px;
  }

  &.right {
    height: 721px;
    top: 0;
    right: 123px;
  }

  &.in-decor {
    bottom: 0;
    left: 123px;

    height: 52px;

    background: #ece8e1;
    z-index: 2;
  }
`;

export const BackgroundModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 1;

  img {
    position: absolute;
    top: 201px;

    width: 100%;
  }
`;
