import { useState } from "react";
import { Box , TextField, Button, styled, Typography} from "@mui/material";
import { signupUser } from "../../../../Backend/src/auth/auth.controller";

const Component = styled(Box)`
    width: 480px;
    margin: auto;
    margin-top: 150px;
    box-shadow: 3px 4px 5px 4px rgb(0 0 0/ 0.6);
    border-radius: 8px;
`
const Image = styled('img')({
    width: 350,
    margin: 'auto',
    display: 'flex',
    padding: '8px 0 0'
});

const Wrapper = styled(Box)`
    padding: 2px 55px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p{
        margin-top: 20px;
    }
`

const LoginButton = styled(Button)`
    text-transform: none;
    background: #082c8d;
    color: #fff;
    height: 40px;
    border-radius: 20px;
    
`
const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 40px;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const signupInitialValues = {
    name: '',
    username: '',
    passowrd: ''
}

const Login = () => {

    const imageUrl = 'https://api.logo.com/api/v2/images?logo=logo_e0458819-6517-4138-9bc8-908fc223955e&u=1715452095990&format=svg&margins=166&width=1000&height=750&fit=contain';
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange = (e) => {
        setSignup( ...signup, [e.target.name], e.target.value)
    }

    const signupUser = () => {
        
    }

    return(
        <Component>
            <Box>
                <Image src={imageUrl} alt="login" />
                {
                    account === 'login' ? 
                        //Login
                        <Wrapper>
                            <TextField variant="standard" label='Enter your username'/>
                            <TextField variant="standard" label='Enter your password'/>
                            <LoginButton variant="contained">Login</LoginButton>
                            <Typography style={{textAlign:'center'}}>OR</Typography>
                            <SignupButton onClick={() => toggleSignup()}>Create An Account</SignupButton>
                        </Wrapper>
                :    
                        //Registrar
                        <Wrapper> 
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name= 'name' label='Enter your name'/>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name= 'username' label='Enter your username'/>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name= 'password' label='Enter your password'/>
                    
                            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
                            <Typography style={{textAlign:'center'}}>OR</Typography>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login;