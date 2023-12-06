import React from 'react';
import { Box } from '@mui/material';
import FullPage from './components/FullPage';

export const About = () => {
    return(
        <FullPage
            id="about"
        >
        <Box
            sx={{
                maxWidth: '300px',
                'img' : {
                    width: '100%',
                    maxWidth: '100%'
                }
            }}
        >
        <img src="img/dj-about2.jpg" alt="DJ Samaray"/>
        </Box>
       <Box
        sx={{
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
        }}
       >
        <p>Meet Samurey, a distinctive left-handed DJ who hails from the breathtaking landscapes of Colorado. His life has always pulsed to the rhythm of electronic music, a passion that has coursed through his veins since he can remember. When the world slowed down during the pandemic, it was the rythmic beats and stirring melodies of electronic music that brought him clarity and peace amidst the chaos.

In the stillness of those challenging times, Samurey found solace in the depths of deep house music. Inspired by the maestros of the genre, he honed his craft, developing a profound love for mixing and blending the intricate layers of melodic deep house. With each set, Samurey takes his listeners on a journey, offering a sonic escape that resonates with the soul's desire for tranquility and the heart's yearning for freedom. Join him as he weaves his story through the music, one beat at a time.</p>
        </Box>
        </FullPage>

    )
}

export default About;