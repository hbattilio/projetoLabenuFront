import React, { useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import { baseUrl } from '../../constants/urls'
import FeedImgCard from '../FeedImgPage/FeedImgCard'





const FeedImgDetail = () => {
    const [imgDetails, setImgDetails] = useState(null)
    const params = useParams()
    const history = useHistory()

    console.log(params)

    // useEffect(() => {
    //     if (localStorage.getItem('token') === null){
    //         history.push('/users/login')
    //     }   else if (!params.id) {
    //         history.push("/feedimgpage")
    //     }
    //     }, [])
    
    useEffect(() => {
      fetchImageDetails();

    }, [])
    
    const fetchImageDetails = () => {
        const axiosConfig = {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        }

        axios.get(`${baseUrl}/image/:id${params}`, axiosConfig).then((response) => {
            setImgDetails(response.data.image)
        })
    }
    console.log(imgDetails)
    
       return(

        <div>
            {imgDetails !== null && <FeedImgCard
            title={imgDetails.title}
            />}
        
        </div>


       )
}
export default FeedImgDetail