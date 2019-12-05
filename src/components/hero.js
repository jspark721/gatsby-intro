import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled('div')`
    background-image: url('/images/ben-dutton-seattle.jpg');
    background-position: bottom 20% center;
    background-size: cover;
    height: 50vh;
`;

const TextBox = styled('div')`
    background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding: 0 calc((100vw - 550px) / 2);
    width: 100%;

    h1 {
        text-shadow: 1px 1px 3px #eeddff66;
        font-size: 2.25rem;
    }

    p {
        color: #222;
        margin-top: 0;
        margin-bottom: 2rem;
    }
    a {
        color: #222;
        margin-top: 0.5rem;
    }
`;

const Hero = () => {
    return (
        <ImageBackground>
            <TextBox>
                <h1>Frontend Masters + Gatsby &hearts;</h1>
                <p>Hello guys <Link to="/about">Learn about me &rarr;</Link></p>
            </TextBox>
        </ImageBackground>
    );
};

export default Hero;