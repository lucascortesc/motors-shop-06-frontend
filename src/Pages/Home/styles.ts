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
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
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
    margin-bottom: 105px;
  }

  @media screen and (min-width: 768px) {
    .mainHeader__container {
      margin-top: 80px;
    }

    .mainHeader__button {
      max-width: 177px;
    }

    .mainHeader__title {
      font-weight: 700;
      font-size: 44px;
      line-height: 56px;
    }
  }
`;

export const Announcements = styled.div`
  margin-left: 13px;

  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 15px;

  .announcements__container {
    display: flex;
    gap: 48px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 60px;
  }
`;

export const AnnouncementTitle = styled.h2`
  margin-top: 38px;
  margin-bottom: 37px;
  margin-left: 13px;

  @media screen and (min-width: 768px) {
    margin-left: 60px;
    margin-top: 100px;
    margin-bottom: 63px;
  }
`;
