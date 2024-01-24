import React from 'react';
import '../styles/Perfil.css';
function Perfil(){
    return(
        <div className='profile'>
            <figure className='profile-img'>
             <img src={require('../images/perfil_picture.jpeg') } alt="facebook"/>
            </figure>
            <div className='profile-info'>
                <h1>Victor Alvarado</h1>
                <p>Software Engineer</p>
                <div className='profile social'>
                    <a href='https://github.com' target='_blank' rel="noopener noreferrer">
                        <img src={require('../icons/github.svg') } alt='github' className='profile-social-img' />
                    </a>  
                    <a href="https://twitter.com" target= "_blank" rel="noopener noreferrer">
                        <img src={require('../icons/twitter.svg')} alt='twitter' className='profile-social-img' />
                    </a>
                    <a href='https://linkedin.com' target='_blank' rel="noopener noreferrer">
                        <img src={require('../icons/linkedin.svg') } alt='linkedin' className='profile-social-img' />
                    </a>  
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src={require('../icons/youtube.svg')} alt='youtube' className='profile-social-img' />
                    </a>                    
                </div>

            </div>
            
        </div>

    );
}
export default Perfil;