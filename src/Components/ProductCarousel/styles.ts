import styled from "styled-components";

export const StyledCarousel = styled.section`
margin: 52px 0 116px 30px;

h3{
  margin: 50px 0 63px 0;
}

ul{
  max-width: 100%;
  display: flex;
  overflow-x:scroll;
  gap: 12px;
  padding-right: 12px;
  list-style: none;
}


@media screen and (min-width: 768px) {
  margin: 200px 0 40px 60px;

  h3{
    margin: 50px 0 63px 0;
  }

  ul{
    min-width:100%;
    gap:48px;
  }
}
`

export const ButtonsProductCard = styled.div`
width: 100%;
display: flex;
gap: 15px;
margin-top:20px;
padding-bottom:8px;

button{
  height: 38px;
}

button:nth-child(1){
  width:80px;
}
button:nth-child(2){
  width:105px;
}
`