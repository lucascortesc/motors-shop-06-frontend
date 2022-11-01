import * as yup from "yup";

export const createAnnouncementSchema = yup.object().shape({
  title: yup.string().required(),
  year: yup.number().required(),
  km: yup.number().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  imgFront: yup.string().required(),
  img1: yup.string().required(),
  img2: yup.string().when("$imgQuantity", (imgQuantity) => {
    if (imgQuantity.length > 1) {
      return yup.string().required();
    }
    return yup.string();
  }),
  img3: yup.string().when("$imgQuantity", (imgQuantity) => {
    if (imgQuantity.length > 2) {
      return yup.string().required();
    }
    return yup.string();
  }),
  img4: yup.string().when("$imgQuantity", (imgQuantity) => {
    if (imgQuantity.length > 3) {
      return yup.string().required();
    }
    return yup.string();
  }),
  img5: yup.string().when("$imgQuantity", (imgQuantity) => {
    if (imgQuantity.length > 4) {
      return yup.string().required();
    }
    return yup.string();
  }),
  img6: yup.string().when("$imgQuantity", (imgQuantity) => {
    if (imgQuantity.length > 5) {
      return yup.string().required();
    }
    return yup.string();
  }),
});
