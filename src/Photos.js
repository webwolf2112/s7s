import React from 'react';
import FullPage from './components/FullPage';
import { InstagramEmbed } from 'react-social-media-embed';

export const Photos = () => {
    return(
        <FullPage
            id="photos"
        >
            Photos Coming Soon!
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/p/CzhngMGL84y/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" width={328} />
            </div>
            
        </FullPage>

    )
}

export default Photos;