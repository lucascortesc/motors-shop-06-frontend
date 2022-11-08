import styled from "styled-components";

export const StyledCarouselAuction = styled.div`
margin-left: 16px;
  
h3{
  display: none;
}

.carousel{
  display: flex;
  gap: 12px;
  overflow-x: scroll;
  margin-right: 16px;
}


@media screen and (min-width: 768px) {
margin: 45px 60px 40px 60px;

  h3{
    display: block;
    margin-bottom: 40px;
  }
}

`