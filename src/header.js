import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, Box } from '@mui/material';

const Header = ({fullLogo}) => {
    return(
        <header className="App-header">
        <Box
            sx={(theme) => ({
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                margin: '0 auto',
                maxWidth: '1500px',
                width: '95%',
                backgroundColor: fullLogo ? null : 'rgba(0, 0, 0, 0.2)',
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',

                },
                'a': {
                    textDecoration: 'none',
                    padding: '0 10px',
                    '&:hover': {
                        color: '#1EDCDB',
                    }
                }
            })}
        >
            <Link href="/"
                sx={{
                    color: fullLogo ? 'white' :'#1EDCDB',
                    fontSize: '2rem',
                    paddingLeft: '1.5rem',
                    '&&:hover': {
                        color: fullLogo ? '#1EDCDB' : 'white'
                    }
                }}
            >
                {fullLogo ? 'Serene Seven Studios' : 'S7S'}
            
            </Link>
            <Box
                sx={(theme) => ({
                    color:"white",
                    'a': {
                        color:'white'
                    },
                    'svg': {
                        marginRight: '10px'
                    },
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingTop: '15px'
                })}
            >
            <Box component='nav'
                sx={(theme) => ({
                    marginRight: '1.5rem',
                    'a': {
                        marginRight: '1rem',
                        color: 'white',
                        textDecoration: 'none',
                        padding: '0 10px',
                        '&:hover': {
                            color: '#1EDCDB'
                        }
                    },
                })}
            >
                <Link href="#about">About</Link>
                <Link href="#music">Music</Link>
                <Link href="#store">Store</Link>
            </Box>
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
        </Box>
        </header>
    )

};

export default Header;