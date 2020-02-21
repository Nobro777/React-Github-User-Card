import React from 'react';
import {
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
} from 'reactstrap';

const GithubCards = props => {
    console.log("my personal page props", props)

    return (
        <Card style={{width: '50%', display: 'flex', margin: '0 0 0 25%', boxShadow: '3px 3px 5px #888888'}}>
            <CardBody>
                <CardTitle>GitHub Username: {props.mylogin}</CardTitle>
                <CardSubtitle>GitHub ID: {props.myid}</CardSubtitle>
                <CardText>{props.mybio}</CardText>
                <CardText>Located: {props.mylocation}</CardText>
                <CardText>Followers: {props.myfollowerslist}</CardText>
                <CardText>Following: {props.myfollowing}</CardText>
                <a href="">{props.myurl}</a>
            </CardBody>
        </Card>
    )
}

export default GithubCards;