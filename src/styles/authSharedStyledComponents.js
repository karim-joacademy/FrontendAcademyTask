import styled from "styled-components";

export const Form = styled.form`
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    max-width: 500px;
    padding: 20px;
`

export const FormWrapper = styled.div`
    align-items: center;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    min-height: 100vh;
`

export const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
        height: 36,
        minHeight: 36,
        minWidth: 400,
        padding: "0 14px", // Adjust padding
        "& input": {
            padding: "8px 0", // Adjust vertical padding to center text
            fontSize: 14, // Adjust font size if needed
        },
    },
    "& .MuiInputLabel-root": {
        fontSize: 14, // Adjust label font size
        top: "-4px", // Move label up
    },
    "& .MuiInputLabel-shrink": {
        top: 0, // Prevents jumping when focused
    },
}