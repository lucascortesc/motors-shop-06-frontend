import styled from "styled-components";

export const Advertiser = styled.div`
width: 100%;

.background{
  max-width: 100%;
  padding-top: 0.1px;
  padding-bottom: 0.1px;
  background: rgb(69,41,230);
  background: linear-gradient(180deg, rgba(69,41,230,1) 50%, rgba(241,243,245,1) 50%);  
}



.infoModal{
  background-color: var(--grey10);
  margin: 65px 16px 31px 16px;
  padding: 44px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 4px;


  .initials-name{
    width: 100px;
    height: 100px;
    font-size: 36px;
    font-weight: 500;
    color: var(--whiteFixed);  
    background-color: var(--brand1);
    padding: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span{
    color: var(--brand1);
    background-color: var(--brand4);
    padding: 4px 8px;
    border-radius: 5px;
  }
}

.advertiser-description{
  color: var(--grey2);
}


@media screen and (min-width: 768px) {
  .infoModal{
    margin: 65px 10vw;
  }
}

`