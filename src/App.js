import './App.css';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useRef } from 'react';
import Header from './header';

import About from './About';
import Logo from './img/logo-blue.png'


function App() {
  const logoRef = useRef();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1EDCDB',
        highlight: '#f5defa',
      },
    },
    sizes: {
      maxTextWidth: '800px'
    }
   });

  // Internal State Varialbes
  const [fullLogo, setFullLogo] = useState(true);
  // const [data, setData] = useState({});

  // Fetching JSON if we want to use the JSON file again
  // const getaboutData=()=>{
  //     fetch('website_content.json'
  //     ,{
  //       headers : { 
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //        }
  //     }
  //     )
  //       .then(function(response){
  //         // format the response
  //         return response.json();
  //       })
  //       .then(function(myJson) {
  //         setData(myJson)
  //       });
  //   }

    // useEffect(()=>{
    //   getaboutData()
    // },[])

  const height = window.innerHeight;

 const handleOnScroll = (e) => {
    if(e.target.scrollTop > height && fullLogo) {
      setFullLogo(false)
    } else if (e.target.scrollTop < height && !fullLogo) {
      setFullLogo(true)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box 
        id="app"
        sx={()=>({
          color: theme.palette.primary.highlight
        })}
      >
      <Box
    onScroll={handleOnScroll}    
    sx={{
      height: '100vh',
      overflow: 'auto',
      width: '100%',
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
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              'img': {
                width: '100%',
                maxWidth: '300px',
              }
            }}
          >
          <img src={Logo} alt="s7s Logo" ref={logoRef}/>
        </Box>
        <About />
       </Box>
    </Box>
    </Box>
    </ThemeProvider>
  );
}

export default App;
