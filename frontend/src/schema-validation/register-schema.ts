import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().min(3).required(),
  email: yup.string().email().min(6).required(),
  phone: yup.string().min(4).required(),
  program: yup.string().required(),
  documents: yup.mixed().test("required", "Minimal 1 file", (value) => {
    return value instanceof FileList && value.length > 0;
  }),
});
