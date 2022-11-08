import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(69, 41, 230);
  background: linear-gradient(
    180deg,
    rgba(69, 41, 230, 1) 15%,
    var(--grey8) 15%
  );
  min-height: 100vh;
  @media screen and (min-width: 1024px) {
    background: linear-gradient(
      180deg,
      rgba(69, 41, 230, 1) 30%,
      var(--grey8) 30%
    );
  }
`;

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    width: 95%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    gap: 5rem;
  }
`;

export const DivContent = styled.div`
  width: 95%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionImg = styled.section`
  background-color: var(--whiteFixed);
  width: 100%;
  height: 300px;
  margin-top: 2rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    height: 350px;
    > div {
      width: 400px;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;


export const SectionDetails = styled.section`
  background-color: var(--whiteFixed);
  width: 100%;
  height: 300px;
  margin-top: 0.8rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (min-width: 1024px) {
    height: 200px;
  }
`;

export const DivFooter = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70px;
    > div {
      display: flex;
      gap: 1rem;
      span {
        background-color: var(--brand4);
        color: var(--brand1);
        padding: 8px;
        font-size: 0.8rem;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        border-radius: 5px;
      }
    }
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  span {
    font-family: "Lexend", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--grey1);
  }
`;

export const H2 = styled.h2`
  font-size: 1.2rem;
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  color: var(--grey1);
  padding: 10px;
`;

export const SectionDescription = styled.section`
  background-color: var(--whiteFixed);
  margin-top: 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  > p {
    margin-top: 1rem;
    padding: 10px;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: var(--grey2);
    line-height: 2rem;
  }
  @media screen and (min-width: 1024px) {
    height: 230px;
  }
`;

export const Aside = styled.aside`
  background-color: transparent;
  width: 95%;
  max-width: 700px;
  margin-top: 2rem;
  > div {
    background-color: var(--whiteFixed);
    border-radius: 8px;
  }
  .mySwiper {
    height: 300px;
    border-radius: 5px;
    .mySlide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-right: 0;
      img {
        object-fit: cover;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    width: 400px;

  #imgcar {
    width: 330px;
  }
  }
`;

export const DivUser = styled.div`
  margin-top: 1rem;
  border-radius: 5px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  > div {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--whiteFixed);
    font-family: "Inter", sans-serif;
    font-weight: 600;
  }
  > span {
    font-size: 1.2rem;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    color: var(--grey1);
  }
  > p {
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: var(--grey2);
    line-height: 2rem;
    padding: 10px;
  }
`;

export const SectionComments = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 2rem auto;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
  }
`;

export const SectionCommentUser = styled.section`
  background-color: transparent;
  width: 95%;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1rem;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
  }
`;

export const DivName = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  > div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: var(--whiteFixed);
    font-family: "Inter", sans-serif;
    font-weight: 600;
  }
  > span {
    font-size: 0.8rem;
    color: var(--grey1);
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }
`;

export const DivComment = styled.div`
  position: relative;
  > textarea {
    resize: none;
    width: 98%;
    height: 120px;
    border: 1px solid var(--grey4);
    border-radius: 5px;
    font-family: "Inter", sans-serif;
    transition: 0.5s;
    :hover {
      background-color: var(--grey8);
    }
    :focus {
      outline: none;
      border: 1px solid var(--brand2);
    }
    ::placeholder {
      font-family: "Inter", sans-serif;
      font-size: 0.9rem;
    }
  }
  > button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 1024px) {
      position: absolute;
      top: 40%;
      right: 3%;
    }
  }
`;

export const DivSuggestions = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  > span {
    background-color: var(--grey7);
    font-family: "Inter", sans-serif;
    font-size: 0.6rem;
    color: var(--grey3);
    border-radius: 30px;
    padding: 10px;
  }
`;

export const Ul = styled.ul`
  max-height: 500px;
  overflow-y: auto;
  li,
  li + li {
    margin-top: 1rem;
  }
`;

export const Overlay = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    min-width: 400px;
  }
`;

export const DivComments = styled.div`
  background-color: var(--whiteFixed);
  width: 100%;
  max-width: 700px;
  border-radius: 5px;
`;

export const DivSection = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 700px;
  background-color: var(--whiteFixed);
  border-radius: 5px;
  padding: 8px;
`;
