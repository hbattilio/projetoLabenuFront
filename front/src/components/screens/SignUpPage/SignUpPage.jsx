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

    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    useEffect(() => {
        if (window.localStorage.getItem("token")) {
            alert("Usuario logado, Redirecionado")
            history.push("/feedimgpage")
        }
    }, [])

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName)
    }
    const handleNicknameChange = (event) => {
        const newNickname = event.target.value;
        setNickname(newNickname)
    }

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail)
    }

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword)
    }

    const signUp = async (event) => {

        event.preventDefault()

        const body = {
            name: name,
            email: email,
            nickname: nickname,
            password: password,
            
        }
        console.log(body)

        try {
            const response = await axios.post(`${baseUrl}/user/signup`, body);

            window.localStorage.setItem("token", response.data.token);
            alert("Cadastro efetuado com sucesso")
            console.log("Cadastro efetuado com sucesso")
            history.push("/feedimgpage")
            

        } catch (error) {
            alert("Cadastro falhou, tente novamente");
            console.error(error);
            console.log(body)
        }
    }

    const goToLoginPage = () => {
        history.push('/login')
    }

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5" align="center">
                    Cadastrar !
                </Typography>
                <form onSubmit={signUp}>
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
                        onChange={handleNameChange}
                        value={name}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="nickname"
                        label="Apelido"
                        name="nickname"
                        autoComplete="nickname"
                        autoFocus
                        onChange={handleNicknameChange}
                        value={nickname}
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
                        Efetuar Cadastro
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