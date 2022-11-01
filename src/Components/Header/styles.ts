import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--grey10);
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1600px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  height: 100%;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 1.9rem;
    cursor: pointer;
  }
  .active {
    display: flex;
    width: 100%;
    position: absolute;
    border-top: 1px solid var(--grey6);
    margin: 440px 0 0 -1rem;
    -webkit-box-shadow: 0px 13px 31px -7px rgba(0, 0, 0, 0.19);
    box-shadow: 0px 13px 31px -7px rgba(0, 0, 0, 0.19);
    ul {
      width: 100%;
    }
    li {
      padding: 1.5rem 1rem;
    }
    li a {
      font-size: 1rem;
      text-decoration: none;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      color: var(--grey2);
    }
    li:nth-child(3) {
      padding: 1.5rem 1rem 2rem 1rem;
    }
    li:nth-child(4) {
      padding: 2rem 1rem 1rem 1rem;
      border-top: 1px solid var(--grey6);
    }
    li button {
      width: 100%;
      padding: 0.75rem 1.75rem;
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      font-weight: 600;
      background: var(--whiteFixed);
      border: 1px solid var(--grey4);
      border-radius: 4px;
      cursor: pointer;
      transition: 0.2s;
      :hover {
        background-color: var(--grey8);
      }
    }
  }
  .inactive {
    display: none;
  }
  @media (min-width: 768px) {
    flex: 1; 
    padding: 0 1rem 0 3rem;
    svg {
      display: none;
    }
    .active {
      display: none;
    }
  }
  .links {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      a {
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-weight: 600;
        margin: 0 1.375rem;
        text-decoration: none;
        color: var(--grey2);
      }
    }
  }
`;

export const ContainerRight = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    height: 100%;
    padding: 0 3rem 0 1.375rem;
    align-items: center;
    border-left: 2px solid var(--grey6);
  }
  a {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin: 0 1.375rem 0 1rem;
    text-decoration: none;
    color: var(--grey2);
  }
  button {
    padding: 0.75rem 1.75rem;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    background: var(--whiteFixed);
    border: 1px solid var(--grey4);
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      background-color: var(--grey8);
    }
  }
`;