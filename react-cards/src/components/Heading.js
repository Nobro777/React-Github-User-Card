import React from 'react';
import githublogo from '../assets/githublogo.png';
import lambdalogo from '../assets/lambdalogo.png';
import heart from '../assets/heart_emoji.png';
import Styled from 'styled-components';

const StyledDiv = Styled.div`
display: flex;
justify-content: space-evenly;
margin: 1% 0 2% 25%;
width: 50%;
`
const StyledImg = Styled.img`
width: 15%;
margin: 3% 0 0% 0;
`
const StyledImg2 = Styled.img`
width: 10%;
margin: 5% 0 0% 0;
`
const StyledCenterFlex = Styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Heading = () => {
    console.log("heading = working")

    return (
        <StyledDiv>
            <StyledImg src={lambdalogo}></StyledImg>
            <StyledCenterFlex>
            <StyledImg2 src={heart}></StyledImg2><span>'S</span>
            </StyledCenterFlex>
            <StyledImg src={githublogo}></StyledImg>
        </StyledDiv>
    )
}

export default Heading;