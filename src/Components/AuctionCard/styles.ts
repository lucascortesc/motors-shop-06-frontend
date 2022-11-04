import styled from "styled-components";

interface IProps {
  image: string
}

export const StyledAuction = styled.section<IProps>`
width: 328px;
min-width:328px;
height: calc(395px + 65px);
display: flex;
flex-direction: column;
justify-content: space-between;
color: var(--whiteFixed);
background-repeat: no-repeat; 
background-image: url(${(props) => props.image});
background-position: center;
background-size: 100%;
position: relative;

:hover{
  .container-auction{
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%);
  }

  .auction-advertiser > span{
    background-color: #41268E!important;
  }
}

.timer{
  width: 123px;
  height: 36px;
  margin: 33px 0 0 22px;
  position: absolute;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--whiteFixed);
  color: #000000;
}


.container-auction{
background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 104px 22px 20px 22px;
border-radius: 4px 4px 0 0; 


  .auction-description{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--grey5);
  }
  


  .auction-advertiser{
    display: none;
  }

  .product-details{
    display: flex;
    flex-direction: column;
    gap: 24px;


  .year-km{
    display: flex;
    gap: 12px;
    color: var(--brand1);

    span{
      background-color: var(--brand4);
      padding: 4px 8px;
      border-radius: 4px;
    }
  }
  }
}



@media screen and (min-width: 768px) {
min-width: 735px;
height: calc(326px + 62px);
background-position: center -50px;
background-size: 90%;


.timer{
  margin: 25px 0 0 30px;
}

.container-auction{
  padding: 129px 30px 30px 30px;

  .auction-description{
    -webkit-line-clamp:1;
  }

  .auction-advertiser{
    display: flex;
    align-items: center;
    gap: 16px;
      
    span{
      width: 32px;
      height: 32px;
      background-color: var(--brand1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      
    }
  }
    
  .product-details{
    flex-direction: row;
    align-items: center;      
    
    p{
      margin-left: auto;
    }
  }
}
}
`

export const AdvertiserButtons = styled.div`
min-height: 62px;
display: flex;
justify-content: center;
gap:14px;
padding: 11px 25px;
background-color: var(--brand1);
border-radius: 0 0 4px 4px;

button{
  height:38px;
}

@media screen and (min-width: 768px) {
justify-content: flex-start;

  button:nth-child(1){
    width: 80px;
  }
  
  button:nth-child(2){
    width:115px;
  }
}
`

export const ButtonPageUser = styled.button`
  width: 100%;
  height: 62px;
  background-color:#4529E6; 
  border: none;
  color: white;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0px 4px 4px;
  cursor: pointer;
`