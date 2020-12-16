import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import { baseUrl } from '../../constants/urls'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    useEffect(() => {
        if (window.localStorage.getItem("token")) {
            alert("Usuario logado, Redirecionado")
            history.push("/feedimgpage")
        }
        
    }, [])

    const handleGoToSignup = () => {
        history.push("/signup")
    }

    const handleUpdateEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }

    const handleUpdatePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        
        const body = {
            email: email,
            password: password
        }
        console.log(body)
        try {
            const response = await axios.post(`${baseUrl}/user/login`,body);

            window.localStorage.setItem("token", response.data.token);
            history.push("/feedimgpage")
            

        } catch (error) {
            alert("Senha e Usuario incorreto, tente novamente");
            console.error(error)
            console.log(body)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" maxWidth="xs">
                    Faca seu Login !
                </Typography>
                <form>
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
                        onChange={handleUpdateEmail}
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
                        onChange={handleUpdatePassword}
                        value={password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                    >
                        Entrar
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" onClick={handleGoToSignup} variant="body1" >
                                {"Nao tem cadastro? Faca sua Conta !"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}
export default LoginPage