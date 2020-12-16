import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router'
import axios from 'axios'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { baseUrl } from '../../constants/urls';


const ImgPushPage = () => {
    const history = useHistory()

    const [subtitle, setSubtitle] = useState("")
    const [author, setAuthor] = useState("")
    const [date, setDate] = useState("")
    const [file, setFile] = useState("")
    const [tags, setTags] = useState("")
    const [collection, setCollection] = useState("")
    
    const goToFeedImgPage = () => {
        history.push("/feedimgpage")
    }

    const handleUpdateSubtitle = (event) => {
        const newSubtitle = event.target.value;
        setSubtitle(newSubtitle);
    }

    const handleUpdateAuthor = (event) => {
        const newAuthor = event.target.value;
        setAuthor(newAuthor);
    }

    const handleUpdateDate = (event) => {
        const newDate = event.target.value;
        setDate(newDate);
    }

    const handleUpdateFile = (event) => {
        const newFile = event.target.value;
        setFile(newFile)
    }

    const handleUpdateTags = (event) => {
        const newTags = event.target.value;
        setTags(newTags)
    }
    const handleUpdateCollection = (event) => {
        const newCollection = event.target.value;
        setCollection(newCollection)
    }

    
       
    const pushImage = async (event) => {
        event.preventDefault()

        
        const body = {
            subtitle: subtitle,
            file: file,
            tags: tags,
            collection: collection,
            date: date,
            author: author
        }
        console.log(body)

        axios.post(`${baseUrl}/image/create`, body, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            
    } ).then((response)=> {
        alert("Image incluida com sucesso")
        console.log(response)
        //    history.push("/feedimgpage")

    }
    ).catch((e) => {
        alert("inclusao errada, tente novamente")
        console.error(e)
        console.log(body)
    })

    }



    return (
        <div>
            <button onClick={goToFeedImgPage}>Voltar ao Feed</button>
            <h1>Add imagem</h1>

            <form onSubmit={pushImage}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="subtitle"
                    label="Subtitulo"
                    name="subtitle"
                    autoComplete="subtitle"
                    autoFocus
                    onChange={handleUpdateSubtitle}
                    value={subtitle}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="author"
                    label="Autor"
                    id="author"
                    autoComplete="author"
                    onChange={handleUpdateAuthor}
                    value={author}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="date"
                    label="Data"
                    type="text"
                    id="date"
                    onChange={handleUpdateDate}
                    value={date}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="file"
                    label="Arquivo"
                    id="file"
                    autoComplete="file"
                    onChange={handleUpdateFile}
                    value={file}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="tags"
                    label="Tags"
                    id="tags"
                    autoComplete="tags"
                    onChange={handleUpdateTags}
                    value={tags}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="collection"
                    label="Colecao"
                    type="text"
                    id="collection"
                    autoComplete="collection"
                    onChange={handleUpdateCollection}
                    value={collection}
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    >
                        Cadastrar
                    </Button>


            </form>




            
            
        </div>
    )
}

export default ImgPushPage