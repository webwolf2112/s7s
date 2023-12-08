import React from 'react';
import FullPage from './components/FullPage';
import { Box } from '@mui/material';

export const Music = ({data = {}}) => {


    const videos = data?.youTube?.videos || [];

    return(
        <FullPage
            id="music"
        >   <Box 
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '& iframe': {
                        margin: '1rem',
                        minWidth: '300px',
                    }
                }}
            >
            { videos.map((item, index) => (
                    <iframe src={item.src} title={item.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
            ))}
            </Box>
        </FullPage>

    )
}

export default Music;