import React from 'react';
import { Box, Typography } from '@mui/material';
import FullPage from './components/FullPage';
import DJImage from './img/dj-about2.jpg';
import HappyVness from './img/happyVness.jpg';



export const About = () => {
    return(
        <FullPage
            id="about"
        >
            <Box>
                <Typography
                variant="h5"
                sx={(theme) => ({
                    width: '100%',
                    textAlign: 'center',
                    marginBottom: '3rem',
                    color: theme.palette.primary.main
                })}>
                About Serene Seven Studios
                </Typography>
    
                <Typography
                    sx={(theme) => ({
                        width: '100%',
                        textAlign: 'center',
                        margin: '0 3rem 3rem',
                        color: theme.palette.primary.highlight,
                        maxWidth: theme.sizes.maxTextWidth
                    })}
                >
                S7S is a dynamic company that specializes in producing captivating music videos. Our unique approach involves blending elements such as still photos, drone footage, and live performances by our talented DJ Samaray.
                </Typography>
            </Box>

            <Typography
                variant="h5"
                sx={(theme) => ({
                    width: '100%',
                    textAlign: 'center',
                    marginBottom: '3rem',
                    color: theme.palette.primary.main
                })}
                >
                    Meet the Visionaries Behind S7S
            </Typography>
            
            {/* DJ Samurey Section*/}
            <Box>
                <Box
                    sx={(theme) => ({
                        maxWidth: '300px',
                        textAlign: 'center',
                        color: theme.palette.primary.main,
                        margin: 'auto',
                        'img' : {
                            width: '100%',
                            maxWidth: '100%'
                        }
                    })}
                >
                    <img src={DJImage} alt="DJ Samurey"/>
                    <Typography>DJ - Video Creator</Typography>
                </Box>
                <Box
                    sx={(theme) => ({
                        padding: '2.5rem 2rem',
                        color: theme.palette.primary.highlight,
                        maxWidth: theme.sizes.maxTextWidth
                    })}
                >
                    Meet Samurey, the companies Co-Founder and Creator. A distinctive left-handed DJ who hails from the breathtaking landscapes of Colorado.His life has always pulsed to the rhythm of electronic music, a passion that has coursed through his veins since he can remember. When the world slowed down during the pandemic, it was the rythmic beats and stirring melodies of electronic music that brought him clarity and peace amidst the chaos. In the stillness of those challenging times, Samurey found solace in the depths of deep house music. Inspired by the maestros of the genre, he honed his craft, developing a profound love for mixing and blending the intricate layers of melodic deep house. With each set, Samurey takes his listeners on a journey, offering a sonic escape that resonates with the soul's desire for tranquility and the heart's yearning for freedom. Join him as he weaves his story through the music, one beat at a time.
                </Box>
            </Box>
            
            {/* Happyness Section*/}
            <Box>
                <Box
                    sx={(theme) => ({
                        maxWidth: '300px',
                        textAlign: 'center',
                        margin: 'auto',
                        color: theme.palette.primary.main,
                        'img' : {
                            width: '100%',
                            maxWidth: '100%'
                        }
                    })}
                >
                <img src={HappyVness} alt="Vanessa"/>
                <Typography>Technical Creator - Artist - Drone Pilot </Typography>
                </Box>

                <Box
                    sx={(theme) => ({
                        padding: '2.5rem 2rem',
                        color: theme.palette.primary.highlight,
                        maxWidth: theme.sizes.maxTextWidth,
                    })}
                >
                    Meet Vanessa, the company's multi-talented Co-Founder. Whether it's through her vivid acrylic art, drone footage, or the technical oversight of company operations, she consistently brings creativity and innovation to every facet of their business. Her journey has been marked by her embrace of life's challenges and opportunities, self-teaching, and a constant pursuit of the positive aspects of existence. Her work is a testament to her passion for art and technology.
                </Box>
            </Box>
    </FullPage>
    )
}

export default About;