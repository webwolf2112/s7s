import React, {useState} from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';


const Header = ({fullLogo}) => {
const [anchorEl, setAnchorEl] = useState(null);
const [option, setOption] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOption(event.currentTarget.innerText.toLowerCase());
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const hamburgerMenu = () => {
    return (        <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{color: 'white'}}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
           <MenuItem key="about" selected={option === 'about'} onClick={handleClose}>
              <Link href="#about">About</Link>
           </MenuItem>
           <MenuItem key="music" selected={option === 'music'} onClick={handleClose}>
              <Link href="#music">Music</Link>
           </MenuItem>
           <MenuItem key="store" selected={option === 'store'} onClick={handleClose}>
              <Link href="#store">Store</Link>
           </MenuItem>                
        </Menu>
      </div>)
  }


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
        <div>
            <Box
                sx={(theme) => ({
                    display: 'inline-block',
                    verticalAlign: 'top',
                [theme.breakpoints.up('md')]: {
                    display: 'none',

                }})}

        >{hamburgerMenu()}</Box>
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
            </div>
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
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                    paddingTop: '15px',
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
            <Box
            sx={(theme) => ({
                [theme.breakpoints.down('md')]: {
                    display: 'none',

                },
            })}
            >
                <Link href="#about">About</Link>
                <Link href="#music">Music</Link>
                <Link href="#store">Store</Link>
            </Box>

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