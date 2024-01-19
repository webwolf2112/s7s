import React from 'react';
import { Box } from '@mui/material';

export const FullPage = ({id, children}) => {
    return(
        <Box
            id={id}
            sx={(theme) => ({
                margin: '4rem auto',
                color: 'white',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                maxWidth: '1500px',
                fontSize: '1.2rem',
                minHeight: '100vh',
                padding: '2rem',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                [theme.breakpoints.down('md')]: {
                    maxWidth: '90%',
                  },
              })}
        >
            {children}
        </Box>

    )
}

export default FullPage;