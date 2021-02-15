import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  width: 100%;
  height: 912px;
`;

export const BackgroundModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 1;

  .social {
    position: absolute;
    bottom: 180px;
    left: 213px;
  }

  .decor-top-left {
    position: absolute;
    top: 0;
    left: 0;
  }

  .decor-left {
    position: absolute;
    top: 108px;
    left: 0;
  }

  .decor-top-right {
    position: absolute;
    top: 0;
    right: 0;
  }

  .decor-right {
    position: absolute;
    top: 108px;
    right: 0;
  }
`;

export const ContentModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 2;

  .content-module {
    margin: 0 auto;
    margin-top: 145px;

    width: 912px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      color: #ff4655;
      font-family: "Tungsten";
      font-size: 97px;
      font-weight: 700;
      line-height: 116px;
      text-transform: uppercase;
      text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    }
  }

  .riot-logo {
    position: absolute;
    bottom: 64px;
    left: 600.55px;
    
    width: 238.91px;
    height: 76px;
  }
`;

export const SocialsColumn = styled.div`
  margin-top: 52px;

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-bottom: 28px;
    max-width: 246px;

    .background path {
      fill: none;
      stroke: #ff4655;
      stroke-width: 2px;
    }

    .content {
      color: #ff4655;
    }
  }
`;
