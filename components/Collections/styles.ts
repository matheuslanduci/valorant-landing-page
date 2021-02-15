import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  width: 100%;
  height: 795px;
`;

export const BackgroundModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  overflow: hidden;

  z-index: 1;

  .collections {
    position: absolute;
    top: 0;
    left: -241.5px;
  }
`;

export const BarsModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 2;

  .text {
    position: absolute;
    top: 237px;
    right: 5.5px;

    color: #ff4655;
    font-family: "Tungsten";
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    text-transform: uppercase;
    transform: rotateZ(90deg);
  }

  .decor {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const Bar = styled.div`
  position: absolute;

  width: 1px;

  background: #ff4655;

  &.left {
    top: 0;
    left: 123px;

    height: 795px;
  }

  &.right {
    top: 52px;
    right: 123px;

    height: 744px;
  }
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
`;

export const ContentTitle = styled.span`
  position: absolute;
  top: 64px;

  color: #ff4655;
  font-family: "Tungsten";
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  text-transform: uppercase;
`;

export const Collection = styled.div`
  position: absolute;
  top: 135px;

  width: 1140px;
  height: 579px;
`;

export const CollectionDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 90px;

  background: #ff4655;

  .text {
    margin-left: 16px;

    color: #ece8e1;
    font-family: "Tungsten";
    font-size: 48px;
    font-weight: 700;
    line-height: 90px;
    text-transform: uppercase;
  }

  .button {
    position: absolute;
    top: 0;
    right: 0;

    padding: 0;

    width: 240px;
    height: 90px;

    display: block;

    background: transparent;
    border: 0;
    color: #ece8e1;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
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
      height: 90px;

      background: #0f1923;

      z-index: 1;
    }

    .hover {
      position: absolute;
      top: 0;
      left: -100%;

      width: 100%;
      height: 90px;

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

export const OptionsRow = styled.div`
  position: absolute;
  bottom: 32px;
  left: 538px;

  width: 364px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Option = styled.div`
  cursor: pointer;
  
  &.active g {
    fill: #ff4655;
  }
`;
