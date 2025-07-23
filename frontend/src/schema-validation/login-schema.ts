import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().email().min(6).required(),
    password: yup.string().min(6).required(),
  })
  .required();
