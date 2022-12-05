import * as Yup from "yup";
import { IFormSchema } from "../../interface/form.interface";
import { InputErrors } from "../../enums/form-error.enum";

export const registrationSchema: IFormSchema = {
  login: Yup.string().required(InputErrors.Login),

  email: Yup.string()
    .required(InputErrors.Email)
    .email(InputErrors.InvalidEmail),

  phoneNumber: Yup.string()
    .required(InputErrors.PhoneNumber)
    .matches(/^\+?[1-9][0-9]{7,14}$/, InputErrors.InvalidPhoneNumber),

  password: Yup.string()
    .required(InputErrors.Password)
    .min(6, InputErrors.Min6)
    .max(30, InputErrors.Max30),

  acceptTerms: Yup.bool().oneOf([true], InputErrors.Terms),
};
