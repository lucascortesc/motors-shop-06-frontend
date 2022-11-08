export const desingButton = (desing: string, disabled?: boolean) => {
  switch (desing) {
    case "grey1":
      return {
        backgroundColor: "--grey0",
        borderColor: "--grey0",
        textColor: "--whiteFixed",
        hoverBackgroundColor: "--grey1",
      };
    case "negative":
      return {
        backgroundColor: "--grey6",
        borderColor: "--grey6",
        textColor: "--grey2",
        hoverBackgroundColor: "--grey5",
      };
    case "disable":
      return {
        backgroundColor: "--grey5",
        borderColor: "--grey5",
        textColor: "--whiteFixed",
      };
    case "brand1":
      return {
        backgroundColor: disabled ? "--brand3" : "--brand1",
        borderColor: disabled ? "--brand3" : "--brand1",
        textColor: "--whiteFixed",
        hoverBackgroundColor: "--brand2",
      };
    case "brandOpacity":
      return {
        backgroundColor: "--brand4",
        borderColor: "--brand4",
        textColor: "--brand1",
      };
    case "light":
      return {
        backgroundColor: "--grey10",
        borderColor: "--grey10",
        textColor: "--grey1",
      };
    case "outineLight":
      return {
        backgroundColor: "",
        borderColor: "--grey10",
        textColor: "--whiteFixed",
        hoverBackgroundColor: "--whiteFixed",
        hoverColor: "--grey1",
      };
    case "outline1":
      return {
        backgroundColor: "--whiteFixed",
        borderColor: "--grey0",
        textColor: "--grey0",
      };
    case "big45":
      return {
        backgroundColor: "--grey1",
        borderColor: "--grey1",
        textColor: "--whiteFixed",
      };
    case "outline2":
      return {
        backgroundColor: "--whiteFixed",
        borderColor: "--grey4",
        textColor: "--grey0",
        hoverBackgroundColor: "--grey1",
        hoverColor: "--whiteFixed",
      };
    case "outlineBrand1":
      return {
        backgroundColor: "--whiteFixed",
        borderColor: "--brand1",
        textColor: "--brand1",
        hoverBackgroundColor: "--brand4",
      };
    case "link":
      return {
        backgroundColor: "--whiteFixed",
        borderColor: "--whiteFixed",
        textColor: "--grey0",
        hoverBackgroundColor: "--grey8",
      };
    case "alert":
      return {
        backgroundColor: "--alert3",
        borderColor: "--alert3",
        textColor: "--alert1",
        hoverBackgroundColor: "--alert2",
      };
    case "sucess":
      return {
        backgroundColor: "--sucess3",
        borderColor: "--sucess3",
        textColor: "--sucess1",
        hoverBackgroundColor: "--sucess2",
      };
    default:
      return {
        backgroundColor: "--grey0",
        borderColor: "--grey0",
        textColor: "--whiteFixed",
      };
  }
};
