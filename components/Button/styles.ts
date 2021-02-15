import styled from "styled-components";

export const Container = styled.a`
  position: relative;

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

  &:hover {
    .background-hover {
      left: 0;
    }
  }

  &:focus,
  &:active {
    outline: 0;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;

    z-index: 1;
  }

  .background-hover {
    position: absolute;
    top: 0;
    left: -100%;

    transition: left 0.3s ease-in-out;
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
