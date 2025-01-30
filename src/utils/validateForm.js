import * as Yup from "yup";

const validateForm = async (values, schema) => {
    try {
        await schema.validate(values, { abortEarly: false });
        return { isValid: true };
    } catch (err) {
        let errMessages = {};
        if (err instanceof Yup.ValidationError) {
            err.inner?.forEach((error) => {
                const path = error?.path;
                if (path.includes(".")) {
                    const splitValue = path.split(".");
                    const secondPart = splitValue[1];
                    errMessages[secondPart] = error?.message;
                } else {
                    errMessages[error?.path] = error?.message;
                }
            });
        }
        return { errMessages, isValid: false };
    }
};

export default validateForm;