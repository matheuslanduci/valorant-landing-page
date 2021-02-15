import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  width: 100%;
  height: 745px;

  background: #0f1923;
`;

export const BackgroundModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 1;

  .weapons {
    position: absolute;
    bottom: 49px;
    left: -57px;
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
    left: 34.5px;
    bottom: 79.5px;

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
  height: 744px;

  background: #ece8e1;

  &.left {
    top: 0;
    left: 123px;
  }

  &.right {
    top: 0;
    right: 171px;
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

export const WeaponShowcase = styled.div`
  position: absolute;
  top: 64px;
  right: 235px;

  width: 460px;
  height: 397px;

  .border {
    position: absolute;
    top: 0;
    left: 0;
  }

  .weapon-img {
    position: absolute;
    top: 0;
    left: 0;

    width: 460px;
    height: 168px;

    object-fit: cover;
  }

  .weapon-description {
    position: absolute;
    top: 183px;
    left: 32px;

    width: 396px;
    height: 198px;

    .weapon-name {
      position: absolute;
      top: 0;
      left: 0;

      color: #ece8e1;
      font-family: "Tungsten";
      font-size: 48px;
      font-weight: 700;
      line-height: 48px;
      text-transform: uppercase;
    }

    .weapon-category {
      position: absolute;
      top: 19px;
      right: 0;

      color: #ff4655;
      font-family: "Tungsten";
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      text-transform: uppercase;
    }

    .weapon-tip {
      position: absolute;
      top: 64px;

      color: #ece8e1;
      font-size: 18px;
      line-height: 21px;
    }

    .weapon-price {
      position: absolute;
      bottom: 0;

      color: #ff4655;
      font-family: "Tungsten";
      font-size: 32px;
      font-weight: 700;
      line-height: 39px;
      text-transform: uppercase;
    }
  }
`;

export const WeaponsGrid = styled.div`
  position: absolute;
  top: 138px;

  display: grid;
  grid-template-columns: 259px 259px;
  grid-auto-rows: 94px;
  gap: 16px 24px;
`;

export const WeaponItem = styled.div`
  position: relative;

  width: 259px;
  height: 94px;

  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.2s;

  &.active {
    opacity: 1;

    .border g {
      fill: #ff4655;

      path {
        fill: #ff4655;
      }
    }
  }

  &:hover {
    opacity: 1;

    .border g {
      fill: #ff4655;
    }
  }

  .border {
    position: absolute;
    top: 0;
    left: 0;

    z-index: 1;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;

    width: 259px;
    height: 94px;

    z-index: 2;
  }
`;

export const Select = styled.div`
  position: absolute;
  bottom: 218px;
  right: 235px;

  width: 460px;
  height: 56px;

  cursor: pointer;

  z-index: 99;

  .border {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const SelectCurrent = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  padding: 0 20px;

  width: 100%;
  height: 100%;

  box-sizing: border-box;
  font-size: 24px;
  font-weight: 700;
  line-height: 54px;
  text-transform: uppercase;

  .value {
    width: 100%;

    color: #ece8e1;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SelectList = styled.div`
  position: absolute;
  top: 54px;
  left: 0;

  width: 100%;
`;

export const SelectOption = styled.div`
  position: relative;

  padding: 0 20px;

  width: 100%;
  height: 36px;

  background: #ece8e1;
  box-sizing: border-box;
  color: #0f1923;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  overflow: hidden;
  text-transform: uppercase;

  &:hover {
    color: #ece8e1;

    .hover {
      left: 0;
    }
  }

  .base {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: #ece8e1;

    z-index: 1;
  }

  .hover {
    position: absolute;
    top: 0;
    left: -100%;

    width: 100%;
    height: 100%;

    background: #ff4655; 
    transition: left 0.4s;
    z-index: 2;
  }

  .content {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    z-index: 3;
  }
`;
