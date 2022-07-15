import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const formSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});
const formErrors = { resolver: yupResolver(formSchema) };

export default formErrors;
