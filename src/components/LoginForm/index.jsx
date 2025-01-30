import {Button, TextField, Typography} from "@mui/material";
import {Fragment, useState} from "react";
import {loginFormFields} from "./loginFormFields.js";
import {loginFormSchema} from "./loginFormSchema.js";
import {Link} from "react-router-dom";
import {Form, FormWrapper, textFieldStyles} from "src/styles/authSharedStyledComponents.js";
import validateForm from "src/utils/validateForm.js";
import {login} from "src/service/auth.js";
import useAuth from "src/hooks/useAuth.js";

function LoginForm() {
    const {handleUserChange} = useAuth();

    const [loginData, setLoginData] = useState({
        email:"",
        password:"",
    });

    const [errorMessages, setErrorMessages] = useState({});

    const handleLoginDataChange = (event) => {
        setLoginData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = async (event) => {
        setErrorMessages({});
        event.preventDefault();

        const validationResult = await validateForm(loginData, loginFormSchema);

        if (validationResult.isValid) {
            const result = await login(loginData);

            if(result.isError) {
                setErrorMessages((prevState) => ({
                    ...prevState,
                    backendErrorMessage: result.message,
                }));
            } else {
                handleUserChange(result.name, result.email);
            }
        } else {
            setErrorMessages(validationResult.errMessages);
        }
    }

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit}>
                {loginFormFields.map((field) => (
                    <Fragment key={field.name}>
                        <TextField
                           sx={textFieldStyles}
                           name={field.name}
                           label={field.label}
                           type={field.type}
                           value={loginData[field.name]}
                           error={!!errorMessages[field.name]}
                           helperText={errorMessages[[field.name]]}
                           onChange={handleLoginDataChange}
                        />
                    </Fragment>
                ))}
                {errorMessages.backendErrorMessage && (
                    <Typography variant="body2" color="error">
                        {errorMessages.backendErrorMessage}
                    </Typography>
                )}
                <Link to={'/register'}>Don&#39;t have an email?</Link>
                <Button type="submit" variant="contained" color="primary" sx={{ width:'100%', textTransform: 'none' }}> Login </Button>
            </Form>
        </FormWrapper>
    )
}

export default LoginForm