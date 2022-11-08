import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 24px;

  .createAnnouncement__buttons-type {
    width: 450%;
  }

  .button__wrap {
    display: flex;
    gap: 10px;
  }

  .button__types {
    margin-bottom: -6px;
  }

  .createAnnouncement__inputs-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .createAnnouncement__inputs-mobile {
    width: 315px;
    max-width: initial;
  }

  .createAnnouncement__image-add {
    width: 100%;
    max-width: 314px;
    border-radius: 4px;
    height: 38px;

    font-size: 14px;
    font-weight: 600;
    border: 1.5px solid var(--brand4);

    color: var(--brand1);
    background-color: var(--brand4);

    text-align: center;

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  .createAnnouncement__submit-buttons {
    display: flex;
    width: 100%;
    justify-content: end;
    gap: 10px;
  }

  @media screen and (min-width: 514px) {
    .createAnnouncement__inputs-mobile {
      width: 140px;
    }
  }
`;
