import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, Box } from '@mui/material';



const Header = () => {

    return(

        <header className="App-header">
        <Box
            sx={{
                color:"white",
                'a': {
                    color:'white'
                },
                'svg': {
                    marginRight: '10px'
                },
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
                paddingTop: '15px'
            }}
        >
        <Link href="https://www.youtube.com/channel/UCkNH_90CdYztpcG2IF9K_Vw" target="_blank" >
            <YouTubeIcon/>
        </Link> 
                
        <Link href="https://www.instagram.com/sereneseven_/" target="_blank" >
            <InstagramIcon/>
        </Link> 

        <Link href="https://www.facebook.com/profile.php?id=61552259499521" target="_blank" >
            <FacebookIcon/>
        </Link> 
        </Box>
        </header>
    )

};

export default Header;