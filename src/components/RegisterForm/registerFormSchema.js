import * as Yup from "yup";

export const registerFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Username must be more than 3 characters.")
        .required("Username is required."),

    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),

    password: Yup.string()
        .min(3, "Password must be more than 3 characters.")
        .required("Password is required."),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match.")
        .required("Confirm password is required."),
});