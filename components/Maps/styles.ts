import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  width: 100%;
  height: 773px;
`;

export const BackgroundModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 1;

  .maps {
    position: absolute;
    top: 11px;
    left: 148px;
  }

  .logo {
    position: absolute;
    top: 312px;
    left: 26.8px;

    width: 160.42px;
    height: 24px;

    transform: rotateZ(270deg);
  }
`;

export const Bar = styled.div`
  position: absolute;

  width: 1px;
  height: 100%;

  background: #0f1923;

  &.left {
    top: 0;
    left: 123px;
  }

  &.right {
    top: 52px;
    right: 123px;

    height: 669px;
  }

  &.in-decor {
    top: 0;
    right: 123px;

    height: 52px;

    background: #ece8e1;
  }
`;

export const ContentModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 3;
`;

export const ContentBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;
  z-index: 2;

  .map {
    position: absolute;
    top: 0;
    left: 0;

    object-fit: cover;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  padding-left: 139px;

  width: 100%;
  height: 100%;

  box-sizing: border-box;
  z-index: 5;
`;

export const ContentTitle = styled.span`
  position: absolute;
  top: 64px;
  right: 171px;

  color: #0f1923;
  font-family: "Tungsten";
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  text-transform: uppercase;
`;

export const MapTitle = styled.span`
  position: absolute;
  top: 130px;
  right: 171px;

  color: #ff4655;
  font-family: "Tungsten";
  font-size: 118px;
  font-weight: 700;
  line-height: 141px;
  text-transform: uppercase;
`;

export const MapDescription = styled.div`
  position: absolute;
  top: 288px;
  right: 171px;

  width: 240px;

  .background {
    position: absolute;
    top: 0;
    left: 0;
  }

  .description {
    position: absolute;
    top: 16px;
    left: 16px;

    width: 208px;

    color: #ece8e1;
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
  }

  .button {
    position: relative;
    top: 218px;

    padding: 0;

    width: 100%;
    height: 54px;

    display: block;

    background: transparent;
    border: 0;
    color: #ece8e1;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    overflow: hidden;
    text-decoration: none;
    text-transform: uppercase;

    &:hover .hover {
      left: 0;
    }

    .base {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 54px;

      background: #0f1923;

      z-index: 1;
    }

    .hover {
      position: absolute;
      top: 0;
      left: -100%;

      width: 100%;
      height: 54px;

      background: #ff4655;
      transition: left 0.4s ease-in-out;
      z-index: 2;
    }

    .content {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      z-index: 3;
    }
  }
`;

export const Coordinates = styled.span`
  position: absolute;
  top: 40px;

  color: #ff4655;
  font-family: "Tungsten";
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  text-transform: uppercase;
`;

export const MapsColumn = styled.div`
  position: absolute;
  top: 146px;
`;

export const MapItem = styled.div`
  position: relative;

  margin-bottom: 8px;

  width: 287px;
  height: 96px;

  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.2s;

  .border {
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    opacity: 1;

    .border g {
      fill: #ff4655;

      path {
        fill: #ff4655;
      }
    }
  }

  &.active {
    opacity: 1;

    .border g {
      fill: #ff4655;

      path {
        fill: #ff4655;
      }
    }
  }

  .text {
    position: absolute;
    top: 0;
    left: 16px;

    color: #fff;
    font-family: "Tungsten";
    font-size: 80px;
    font-weight: 700;
    line-height: 96px;
    text-transform: uppercase;
  }
`;

export const BarModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 4;

  .decor-top {
    position: absolute;
    top: 0;
    right: 0;
  }

  .decor-bot {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
