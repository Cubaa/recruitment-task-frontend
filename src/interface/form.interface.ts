import { BooleanSchema } from "yup";
import { ObjectShape } from "yup/lib/object";
import { RequiredStringSchema } from "yup/lib/string";
import { AnyObject } from "yup/lib/types";

export interface IFormSchema extends ObjectShape {
  login: RequiredStringSchema<string | undefined, AnyObject>;
  phoneNumber: RequiredStringSchema<string | undefined, AnyObject>;
  password: RequiredStringSchema<string | undefined, AnyObject>;
  email: RequiredStringSchema<string | undefined, AnyObject>;
  acceptTerms: BooleanSchema<boolean | undefined, AnyObject, boolean | undefined>;
}