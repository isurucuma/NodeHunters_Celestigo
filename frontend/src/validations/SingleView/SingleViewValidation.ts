import { SingleDetailViewVerifyDataTypes } from "@/types/SingleDetailViewVerifyData";
import * as yup from "yup";

export const schema = yup.object().shape({
  persons: yup.array().of(
    yup.object().shape({
      fullname: yup.string().required("Full Name is required"),
      cosmicid: yup.string().required("Cosmic ID is required"),
    })
  ),
});
