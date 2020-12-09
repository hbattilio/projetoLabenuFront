import React, { useState, useEffect } from 'react';
import axios from 'axios'



import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

import { useHistory } from 'react-router'

import { baseUrl } from '../../constants/urls'




const SignUpPage = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    useEffect(() => {
    if(localStorage.getItem("token") !== null){
        history.push("/feedimgpage")
    }
}, [])

    const handleUsernameChange = (event) => {
        const newUsername = event.target.value;
        setUsername(newUsername)
    }
    
    const handleEmailChange = (event) =>  {
        const newEmail = event.target.value;
        setEmail(newEmail)
    }

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword)
    }

    const handleSignup = async (event) => {
        event.preventDefalt();

        const body = {
            email: email,
            password: password,
            username: username,
        }

        try{
            const reponse = await axios.post(`${baseUrl}/signup`, body);

            localStorage.setItem("token", reponse.data.token);

            history.push("/feedimgpage")

            }catch(error){
                alert("Cadastro falhou, tente novamente");
                console.error(error);
            }
}

    const goToLoginPage = () => {
        history.push('/login')
    }

    return(
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Cadastrar !
                </Typography>
                <form onSubmit={handleSignup}>
                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Nome de Usuário"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={handleUsernameChange}
                    value={username}
                   />
                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleEmailChange}
                    value={email}
                   />
                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handlePasswordChange}
                    value={password}
                   />
                   <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                   >
                    Entrar
                   </Button>
                   <Grid container>
                        <Grid item>
                            <Link href="#" onClick={goToLoginPage} variant="body1" >
                                {"Já tem conta? Faca aqui seu Logon"}
                            </Link>  
                        </Grid>
                   </Grid>
                </form>
            </div>
        </Container>
    )
}
export default SignUpPage