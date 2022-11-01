import * as yup from "yup";

export const createAnnouncementSchema = yup.object().shape({
  title: yup.string().required(),
  year: yup.number().required(),
  km: yup.number().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  imgFront: yup.string().required(),
  img1: yup.string().required(),
  img2: yup.string().when("imgQuantity", (imgQuantity) => {
    console.log(imgQuantity);
    return yup.string().required();
  }),
});
