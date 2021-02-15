import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  width: 100%;
  height: 656px;

  background: #ff4655;
`;

export const BackgroundModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 1;

  .logo {
    position: absolute;
    top: 247px;
    left: 0;

    width: 100%;
  }
`;

export const BarsModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 2;

  .left {
    position: absolute;
    left: 123px;
  }

  .right {
    position: absolute;
    right: 123px;
  }
`;

export const AgentsModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 3;

  img {
    width: 426px;
    height: 653px;
  }

  .reyna {
    position: absolute;
    left: 245px;
    bottom: -130px;
  }

  .raze {
    position: absolute;
    right: 245px;
    bottom: -145px;
  }
`;

export const ContentModule = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 4;

  .content-module {
    margin: 32px auto;

    width: 524px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      color: #fff;
      font-family: "Tungsten";
      font-size: 105px;
      font-weight: 700;
      line-height: 126px;
      text-transform: uppercase;
    }

    .button-row {
      margin-top: 16px;
      margin-bottom: 32px;

      width: 100%;

      display: flex;
      justify-content: space-between;

      a {
        max-width: 246px;
      }

      .sign-in {
        transition: color 0.4s;

        .background-hover g path {
          fill: #fff;
        }

        &:hover {
          color: #ff4655;
        }
      }

      .sign-up {        
        color: #ff4655;
        transition: color 0.4s;

        &:hover {
          color: #fff;
        }
      }
    }

    .info-text {
      margin-top: 16px;

      color: #fff;
      font-family: "Tungsten";
      font-size: 64px;
      font-weight: 700;
      line-height: 76px;
      text-transform: uppercase;
    }
  }
`;

export const DownloadButton = styled.a`
  position: relative;

  width: 128px;
  height: 128px;

  border: 4px solid #fff;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    .hover {
      top: 0;
    }

    .content path {
      stroke: #ff4655;
    }
  }

  .base {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: transparent;

    z-index: 1;
  }

  .hover {
    position: absolute;
    top: -100%;
    left: 0;

    width: 100%;
    height: 100%;

    background: #fff;
    transition: top 0.4s;
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
`;
