import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  top: 0;
  right: 0;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModal = styled.div`
  width: 95%;
  max-width: 520px;
  min-height: 249px;

  padding: 0 1.5rem 0 1.5rem;

  background-color: var(--whiteFixed);

  border-radius: 8px;

  .modal__header {
    width: 100%;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: var(--grey1);
    }

    p {
      color: var(--grey4);

      &:hover {
        cursor: pointer;
      }
    }
  }

  .modal__body {
    padding: 1rem 0;
    min-height: 193px;
  }
`;
