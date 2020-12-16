import React, {useEffect, useState} from 'react';
import axios from 'axios'
import FeedImgCard from '../FeedImgPage/FeedImgCard'
import { useHistory } from 'react-router'
import { baseUrl } from '../../constants/urls'

import LinearProgress from '@material-ui/core/LinearProgress'

import styled from 'styled-components';

const FeedWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 300px;
  margin: 0 auto;
  `



const FeedImgPage = (props) => {
    const history =  useHistory()
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const goToImgPushPage = () => {
        history.push("/imgpushpage")
    }


    useEffect(() => {
        if(!window.localStorage.getItem("token")){
            alert("usuario nao logado, redirecionando")
            history.push("/login")
        }
    }, [])

    useEffect(() => {
        fetchImage();
    }, [])

    const fetchImage = () => {
        const axiosConfig = {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        }

        setIsLoading(true)
        axios.get(`${baseUrl}/all`, axiosConfig)
            .then((response) => {
                setImages(response.data.image);
                setIsLoading(false)
                console.log(images)
            }
            
            )
                    
    }
    

   return(
        <FeedWrapper>
            <button onClick={goToImgPushPage}>Add Imagem</button>
            <hr/>
            {isLoading && <LinearProgress/>}
            {images.map(pic => {
                return (<FeedImgCard
                        key={pic.id}
                        title={pic.tags}
                        subtitle={pic.subtitle}
                        image={pic.file}
                />)
            })}             

            </FeedWrapper>
    )
}
export default FeedImgPage