import React from 'react';
import { Box } from '@mui/material';
import FullPage from './components/FullPage';
import DJImage from './img/dj-about2.jpg';



export const About = ({data = {}}) => {
    return(
        <FullPage
            id="about"
        >
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: '300px',
                'img' : {
                    width: '100%',
                    maxWidth: '100%'
                }
            }}
        >
        <img src={DJImage} alt="DJ Samaray"/>
        </Box>
       <Box
        sx={{
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
        }}
       >
        {
            data.bio &&

            <p>{data.bio}</p>
        }
        </Box>
        </FullPage>

    )
}

export default About;