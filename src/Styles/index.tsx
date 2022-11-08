import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

* {
    scrollbar-width: none;
    scrollbar-color: #696783 var(--grey8);
}

*::-webkit-scrollbar {
    width: 15px;
}

*::-webkit-scrollbar-track {
    background: var(--grey8);
}

*::-webkit-scrollbar-thumb {
    background-color: var(--grey3);
    border-radius: 10px;
    border: 2px solid var(--grey8);
}

body{
    background-color: var(--grey8);
}



:root{
    //Brand
    --brand1: #4529E6;
    --brand2: #5126EA;
    --brand3:#B0A6F0;
    --brand4:#EDEAFD;

    //Grey
    --grey0: #0B0D0D;
    --grey1: #212529;
    --grey2: #495057;
    --grey3: #868E96;
    --grey4: #ADB5BD;
    --grey5: #CED4DA;
    --grey6: #DEE2E6;
    --grey7: #E9ECEF;
    --grey8: #F1F3F5;
    --grey9: #F8F9FA;
    --grey10:#FDFDFD;

    --whiteFixed: #FFFFFF;

    //Feedback
    --alert1: #CD2B31;
    --alert2: #FDD8D8;
    --alert3: #FFE5E5;
    --sucess1:#18794E;
    --sucess2:#CCEBD7;
    --sucess3:#DDF3E4;

    //Colors Random Profile
    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    --random5: #6200E3;
    --random6: #36007D;
    --random7: #349974;
    --random8: #2A7D5F;
    --random9: #153D2E;
    --random10: #6100FF;
    --random11: #5700E3;
    --random12: #30007D;

    --font-heading-1: 700;
    --font-heading-2: 600;
    --font-heading-3: 500;
    --font-heading-4: 600;

}

//Headings
h1,h2,h3,h4,h5,h6 {
    font-family: "lexend", sans-serif;
}
.heading-1-700{
    font-weight: 700;
    font-size: 44px;
    line-height: 56px;
}
.heading-2-600{
    font-weight: 600;
    font-size:36px;
    line-height: 45px; 
}
.heading-3-600{
    font-weight:600;
    font-size: 32px;
    line-height: 40px;
}
.heading-3-500{
    font-weight:500;
    font-size: 32px;
    line-height: 40px;
}
.heading-4-600{
    font-weight:600;
    font-size: 28px;
    line-height: 35px;
}
.heading-4-500{
    font-weight:500;
    font-size: 32px;
    line-height: 40px;
}
.heading-5-600{
    font-weight:600;
    font-size: 24px;
    line-height: 30px;
}
.heading-5-500{
    font-weight:500;
    font-size:24px;
    line-height: 30px;
}
.heading-6-600{
    font-weight:600;
    font-size: 20px;
    line-height: 25px;
}
.heading-6-500{
    font-weight:500;
    font-size: 20px;
    line-height: 25px;
}
.heading-7-600{
    font-weight:600;
    font-size: 16px;
    line-height: 20px;
}
.heading-7-500{
    font-weight:600;
    font-size: 16px;
    line-height: 20px;
}

//Body
body{
    font-family: "inter", sans-serif;
}
.body-1-400{
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
}
.body-1-600{
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
}
.body-2-400{
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
}
.body-2-500{
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
}

.button_big-text{
    font-weight: 600;
}
.button_medium-text{
    font-weight: 600;

}
.input-placeholder{
    font-weight: 400;
    font-size: 16px;
}
.input-label{
    font-weight: 500;
    font-size: 14px;
    line-height: 16.94px;
}

`;
