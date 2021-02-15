import styled, { keyframes } from "styled-components";

const agentAnimate = keyframes`
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
  height: 744px;
  background: #0f1923;
`;

export const ContentModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  padding-left: 139px;

  width: 100%;
  height: 100%;

  box-sizing: border-box;

  z-index: 3;

  .title {
    position: absolute;
    top: 64px;

    color: #ff4655;
    font-family: "Tungsten";
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    text-transform: uppercase;
  }

  .button {
    position: absolute;
    top: 73px;
    right: 238px;

    width: 246px;

    &:hover .content {
      color: #ff4655;
    }
  }
`;

export const AgentData = styled.div`
  position: absolute;
  top: 138px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  animation: ${agentAnimate} 0.8s ease-out;
  color: #ece8e1;

  .name {
    font-family: "Tungsten";
    font-size: 118px;
    font-weight: 700;
    line-height: 141px;
    text-transform: uppercase;
  }

  .role {
    margin-top: 8px;

    display: flex;
    flex-direction: column;

    .role-title {
      font-family: "Tungsten";
      font-size: 18px;
      line-height: 21px;
      text-transform: uppercase;
    }

    .role-value {
      margin-top: 8px;
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
      }

      span {
        margin-left: 8px;

        font-size: 32px;
        text-transform: uppercase;
      }
    }
  }

  .bio {
    margin-top: 16px;

    display: flex;
    flex-direction: column;

    .bio-title {
      font-family: "Tungsten";
      font-size: 18px;
      line-height: 21px;
      text-transform: uppercase;
    }

    .bio-value {
      margin-top: 8px;

      width: 329px;

      font-size: 18px;
      font-weight: 300;
      line-height: 21px;
    }
  }
`;

export const AgentImage = styled.img`
  position: absolute;
  top: 64px;
  left: 536px;

  width: 368px;
  height: 564px;

  animation: ${agentAnimate} 0.8s ease-out;
`;

export const CategoriesRow = styled.div`
  position: absolute;
  bottom: 100px;

  width: 240px;
  height: 48px;

  display: flex;
  align-items: center;
`;

export const Category = styled.div`
  position: relative;

  margin-right: 16px;

  width: 48px;
  height: 48px;

  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.4s;

  &:hover,
  &.active {
    opacity: 1;
  }

  .border {
    position: absolute;
    top: 0;
    left: 0;
  }

  .content {
    position: absolute;
    top: 8px;
    left: 8px;

    width: 32px;
    height: 32px;
  }
`;

export const AgentsColumn = styled.div`
  position: absolute;
  top: 189px;
  right: 198px;
`;

export const AgentItem = styled.div`
  position: relative;

  margin-bottom: 8px;

  width: 287px;
  height: 96px;

  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.4s;

  &:hover, &.active {
    opacity: 1;
  }

  .border {
    position: absolute;
    top: 0;
    left: 0;
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

export const BarsModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 2;

  .logo {
    position: absolute;
    top: 84.7px;
    right: 27.3px;

    width: 160.42px;
    height: 23px;

    transform: rotateZ(90deg);
  }

  .text {
    position: absolute;
    top: 637.5px;
    left: 31.5px;

    color: #ff4655;
    font-family: "Tungsten";
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    text-transform: uppercase;

    transform: rotateZ(270deg);
  }
`;

export const Bar = styled.div`
  position: absolute;

  width: 1px;
  height: 100%;

  background: #ece8e1;

  &.left {
    top: 0px;
    left: 123px;
  }

  &.right {
    top: 0;
    right: 123px;
  }
`;

export const BackgroundModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  img {
    position: absolute;
    top: 95px;
  }
`;
