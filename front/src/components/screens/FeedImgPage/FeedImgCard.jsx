import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { ImageCardContainer, ImageCardContent } from './styled'
import { useHistory } from 'react-router'



const FeedImgCard = (props) => {
    const history = useHistory();

    const handleGoToImgDetail = (props) => {
        history.push(`/img/${props.image.id}`);
    }




    return (
        <ImageCardContainer onClick={props.onclick}>
            <CardActionArea>
                
                <CardMedia
                    onClick={handleGoToImgDetail}
                    component="img"
                    alt={props.subtitle}
                    height="150px"
                    image={props.image}
                    title={props.title}
                />
                <ImageCardContent>
                    <Typography align="center" >
                        {props.title}
                    </Typography>
                    <Typography align="center" >
                        {props.subtitle}
                    </Typography>
                </ImageCardContent>
            </CardActionArea>
        </ImageCardContainer>


    )

}

export default FeedImgCard