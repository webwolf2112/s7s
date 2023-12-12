import './App.css';
import { Box } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import Header from './header';

import About from './About';
import Music from './Music';
import Store from './Store';
import Logo from './img/logo-blue.png'


function App() {
  const logoRef = useRef();

  // Internal State Varialbes
  const [fullLogo, setFullLogo] = useState(true);
  const [data, setData] = useState({});

  // Fetch Data Here
  const getaboutData=()=>{
      fetch('website_content.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          // format the response
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson)
        });
    }

    useEffect(()=>{
      getaboutData()
    },[])

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
        <About data={data.about}/>
        <Music data={data.music}/>
        <Store />
       </Box>
    </Box>
    </Box>
    </>
  );
}

export default App;
