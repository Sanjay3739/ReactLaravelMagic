import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  mobile_no: Yup.string()
    .required("Mobile No is required")
    .min(10, "Mobile No must be 10 digits")
    .max(10, "Mobile No must be 10 digits"),
  role_id: Yup.string().required("Role is required"),
});
