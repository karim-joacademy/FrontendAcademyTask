import {Button, TextField, Typography} from "@mui/material";
import {Fragment, useState} from "react";
import {registerFormFields} from "./registerFormFields.js";
import validateForm from "src/utils/validateForm.js";
import {registerFormSchema} from "./registerFormSchema.js";
import {Link} from "react-router-dom";
import {register} from "src/service/auth.js";
import {Form, FormWrapper, textFieldStyles} from "src/styles/authSharedStyledComponents.js";
import useAuth from "src/hooks/useAuth.js";

function RegisterForm() {
    const {handleUserStatusChange} = useAuth();

    const [registerData, setRegisterData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const [errorMessages, setErrorMessages] = useState({});

    const handleRegisterDataChange = (event) => {
        setRegisterData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = async (event) => {
        setErrorMessages({});
        event.preventDefault();

        const validationResult = await validateForm(registerData, registerFormSchema);

        if (validationResult.isValid) {
            const result = await register(registerData);

            if(result.isError) {
                setErrorMessages((prevState) => ({
                    ...prevState,
                    backendErrorMessage: result.message,
                }));
            } else {
                handleUserStatusChange();
            }
        } else {
            setErrorMessages(validationResult.errMessages);
        }

    }

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit}>
                {registerFormFields.map((field) => (
                    <Fragment key={field.name}>
                        <TextField
                           sx={textFieldStyles}
                           name={field.name}
                           label={field.label}
                           type={field.type}
                           value={registerData[field.name]}
                           error={!!errorMessages[field.name]}
                           helperText={errorMessages[[field.name]]}
                           onChange={handleRegisterDataChange}
                        />
                    </Fragment>
                ))}
                {errorMessages.backendErrorMessage && (
                    <Typography variant="body2" color="error">
                        {errorMessages.backendErrorMessage}
                    </Typography>
                )}
                <Link to={'/'}>Already got an email?</Link>
                <Button type="submit" variant="contained" color="primary" sx={{ width:'100%', textTransform: 'none' }}> Register </Button>
            </Form>
        </FormWrapper>
    )
}

export default RegisterForm