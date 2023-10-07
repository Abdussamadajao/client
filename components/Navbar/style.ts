import styled from "styled-components";
import { deviceSizes } from "styles/themes";

export const NavContainer = styled.nav`
  background-color: #f8f8f8;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0px 0px 28px rgba(170, 170, 170, 0.12);
  z-index: 10;

  @media ${deviceSizes.tablet} {
    padding: 10px 40px;
  }
  @media ${deviceSizes.laptop} {
    padding: 10px 80px;
  }
`;

export const DesktopNav = styled.div`
  display: none;
  @media ${deviceSizes.laptop} {
    display: flex;
    margin-left: 1rem;
    justify-content: space-between;
  }

  span {
    padding: 0;

    a {
      display: inline-block;
      position: relative;
      padding: 1rem 2rem;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.gray6};
      font-weight: 500;
      line-height: 120%;
      text-transform: uppercase;

      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.gray6};
      }
    }
  }
`;
export const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    100.21deg,
    #0faff0 -9.13%,
    rgba(15, 240, 192, 0.89) 106.47%
  );
  transition: all 0.5s;
  z-index: 9999;

  &.active {
    right: 0;
  }

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1rem;
      padding: 0;
      margin: 0;

      a {
        display: inline-block;
        padding: 0.95rem 0;
        color: ${({ theme }) => theme.colors.White};
        font-size: 1.7rem;
        text-align: center;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
  @media ${deviceSizes.laptop} {
    display: none;
  }
`;

export const Bars = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  top: 24px;
  right: 3%;
  z-index: 99990;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  background: rgba(255, 255, 255, 0.2);

  .icon-1,
  .icon-2,
  .icon-3 {
    position: absolute;
    left: 25%;
    top: 50%;
    width: 32px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.Black2};
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .icon-1 {
    transform: translateY(-8px);
    animation-delay: 100ms;
  }

  .icon-3 {
    transform: translateY(8px);
    animation-delay: 250ms;
  }

  .icon-1.a {
    transform: rotate(135deg);
  }
  .icon-3.b {
    transform: rotate(-135deg);
  }
  .icon-2.c {
    opacity: 0;
  }
  .clear {
    clear: both;
  }

  @media ${deviceSizes.laptop} {
    display: none;
  }

  @keyframes slideIn {
    0% {
      width: 0%;
      opacity: 0;
    }

    100% {
      width: 50%;
      opacity: 1;
    }
  }
`;
