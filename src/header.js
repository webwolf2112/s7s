import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, Box, Typography } from '@mui/material';


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
                backgroundColor: fullLogo ? null : 'rgba(0, 0, 0, 0.5)',
                'a': {
                    textDecoration: 'none',
                    padding: '0 10px',
                    color: theme.palette.primary.highlight,
                    '&:hover': {
                        color: theme.palette.primary.main,
                    }
                }
            })}
        >
            <Link href="/"
                sx={(theme) => ({
                    color: fullLogo ? theme.palette.primary.highlight :theme.palette.primary.main,
                    '&&:hover': {
                        color: fullLogo ? theme.palette.primary.main : theme.palette.primary.highlight
                    }
                })}
            >
               
                <Typography
                variant="h4"
                     sx={(theme) => ({
                        [theme.breakpoints.up('sm')]: {
                            display: 'none',
                            fontSize: '2rem',
                        },
                    })}
                >
                  
                   S7S
                </Typography>
                <Typography
                variant="h4"
                     sx={(theme) => ({
                        [theme.breakpoints.down('sm')]: {
                            display: 'none',
                            fontSize: '2rem',
                        },
                    })}
                >
                    {fullLogo ? 'Serene Seven Studios' : 'S7S'}
                </Typography>
            </Link>
            <Box
                sx={(theme) => ({
                    'svg': {
                        marginRight: '1rem'
                    },
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                })}
            >
                <Box
                sx={(theme) => ({
                    marginRight: '1rem',
                    [theme.breakpoints.down('sm')]: {
                        display: 'none',
                    },
                })}
                >
                    <Link href="#about">About</Link>
                </Box>

                <Link href="https://www.youtube.com/channel/UCkNH_90CdYztpcG2IF9K_Vw" target="_blank" >
                    <YouTubeIcon />
                </Link> 
                        
                <Link href="https://www.instagram.com/sereneseven_/" target="_blank" >
                    <InstagramIcon/>
                </Link> 
            </Box>
        </Box>
        </header>
    )

};

export default Header;