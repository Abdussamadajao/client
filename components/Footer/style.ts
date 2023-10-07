import styled from "styled-components";
import { deviceSizes } from "../../styles/themes";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.Black};
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media ${deviceSizes.tablet} {
    padding: 40px 80px 20px;
  }

  @media ${deviceSizes.desktop} {
    padding: 90px 80px 40px;
  }

  a {
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    width: fit-content;
    transition: all 0.3s ease;

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.Blue};
    }
  }
`;

export const ContactLink = styled.div`
  display: flex;
  flex-direction: column;

  @media ${deviceSizes.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }

  .contact {
    .logo {
      margin-bottom: 30px;
      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 38px;
        color: #fff;
      }
    }

    .address {
      color: #fff !important;
      div {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #fff !important;
      }

      p {
        font-size: 20px;
        line-height: 182.1%;
        margin: 4px 0;
      }
    }
  }

  .links {
    margin-top: 31px;

    @media ${deviceSizes.laptop} {
      display: flex;
      justify-content: space-between;
      gap: 72px;
      margin-top: 30px;
      margin-right: 80px;
    }

    .link-row {
      display: flex;
      flex-direction: column;
      gap: 11px;

      h3 {
        margin-bottom: 0;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.White};

        @media ${deviceSizes.laptop} {
          font-weight: 700;
          font-size: 18px;
        }
      }

      &:not(:first-of-type) {
        margin-top: 24px;

        @media ${deviceSizes.laptop} {
          margin-top: 0;
        }
      }
    }
  }
`;

export const CopyrightWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.White};
  margin-top: 25px;
  padding: 2px 0 0px;

  @media ${deviceSizes.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .copyright {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${deviceSizes.tablet} {
      align-items: center;
      flex-direction: row;
    }
    @media ${deviceSizes.desktop} {
      flex-direction: row;
    }
  }

  .social-links {
    margin-top: 30px;
    display: flex;
    gap: 20px;
    color: #fff;

    a {
      font-size: 25px;
    }

    a:hover,
    a:focus {
      transform: scale(1.2);
    }

    svg {
      cursor: pointer;

      &:hover,
      &:active {
      }
    }
  }
`;
