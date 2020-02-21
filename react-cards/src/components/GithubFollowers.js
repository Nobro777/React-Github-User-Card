import React from 'react';
import {
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
} from 'reactstrap';

const GithubFollowers = props => {

    console.log("my github follower page props : ", props)

    return (
        <Card style={{width: '50%', display: 'flex', margin: '1% 0 1% 25%', boxShadow: '3px 3px 5px #888888' }}>
            <CardBody>
                <CardTitle>GitHub Username: {props.mylogin}</CardTitle>
                <CardSubtitle>GitHub ID: {props.myid}</CardSubtitle>
                <CardText>Node ID: {props.mynode}</CardText>
                <a href={`www.github.com/${props.mylogin}`} target="_blank">{props.myurl}</a>
                {/* <CardText>Located: {props.mylocation}</CardText> */}
                {/* <CardText>Following: {props.myfollowers}</CardText>
                <CardText>Followers: {props.myfollowing}</CardText> */}
            </CardBody>
        </Card>
    )
}


export default GithubFollowers; 