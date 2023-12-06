import './App.css';
import { Box } from '@mui/material';
import { useState, useRef } from 'react';
import Header from './header';

import About from './About';
import Music from './Music';
import Store from './Store';
import Photos from './Photos';
import Logo from './img/logo-blue.png'


function App() {
  const logoRef = useRef();
  const [fullLogo, setFullLogo] = useState(true);
  const height = window.innerHeight;

 const handleOnScroll = (e) => {
    if(e.target.scrollTop > height && fullLogo) {
      setFullLogo(false)
    } else if (e.target.scrollTop < height && !fullLogo) {
      setFullLogo(true)
    }
  }

  return (
    <>
    <Box 
      id="app"
    ><Box
    onScroll={handleOnScroll}
      sx={{
        maxHeight: '100vh',
        overflow: 'scroll',
      }}
    
    >
      <Box 
        component='header'
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          'img': {
            width: '100%',
            maxWidth: '100%',
        }
      }}
      id="sticky-header">
        <Header fullLogo={fullLogo}/>
      </Box>
      <Box component='main'>
        <Box
            sx={{
              width: '100%',
              maxWidth: '1500px',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow:'scroll',
              'img': {
                width: '100%',
                maxWidth: '300px',
              }
            }}
          >
          <img src={Logo} alt="s7s Logo" ref={logoRef}/>
        </Box>
        <About />
        <Music />
        <Store />
        <Photos />
       </Box>
    </Box>
    </Box>
    </>
  );
}

export default App;
