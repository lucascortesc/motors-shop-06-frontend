import styled from "styled-components";

export const MainHeader = styled.div`
  width: 100%;
  min-height: 583px;

  display: flex;
  justify-content: center;

  background-color: var(--brand2);

  padding: 0 10px;

  .mainHeader__container {
    max-width: 748px;

    text-align: center;
    margin-top: 53px;
  }

  .mainHeader__title {
    color: var(--grey10);
  }

  .mainHeader__body {
    color: var(--grey9);
    margin-top: 20px;
  }

  .mainHeader__button {
    width: 90%;
  }

  .mainHeader__buttons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 21px;
    margin-top: 48px;
  }

  @media screen and (min-width: 768px) {
    .mainHeader__container {
      margin-top: 80px;
    }
    .mainHeader__button {
      max-width: 177px;
    }
  }
`;

export const Announcements = styled.div`
  margin-left: 60px;

  overflow-x: auto;

  .announcements__title {
    margin-top: 100px;
    margin-bottom: 63px;
  }

  .announcements__container {
    display: flex;
    gap: 48px;
  }
`;
