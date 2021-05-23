import React, { useRef } from 'react';

import './styles.css';

const R3 = () => {

  const modalRef = useRef();
  const playerRef = useRef();

  const openModal = () => {
    modalRef.current.style.display = "block";
    const player = playerRef.current;
    
  
  }

  const closeModal = () => {
    modalRef.current.style.display = "none";
  }  

  return (
    <div className="video-wrapper">
      <div className="video" onClick={ openModal }>
        <div className="icon">
          <div className="arrow"></div>
        </div>
        <img           
          src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" 
          alt="Kitty video"
        />
      </div>
      <div className="text">
        <h3>Watch this video!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Curabitur mattis lacus vitae nisi luctus sodales. 
          Etiam euismod tristique nisl vel consequat. 
          Donec ut risus non urna vestibulum bibendum. 
          Pellentesque scelerisque, mauris a eleifend vehicula, 
          magna ipsum egestas nunc, sit amet ultricies eros ante vel erat.
          Aliquam ante elit, convallis vel risus eget, vehicula porta dui. 
          Suspendisse hendrerit diam quis sem lobortis venenatis. 
          In nec ultrices enim. 
        </p> 
      </div>
      <div className="modal" onClick={ closeModal } ref={ modalRef } >
        <div className="modal-content">
          <iframe 
            id="player"
            ref={ playerRef }
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen            
          >
          </iframe>
        </div>
      </div> 
    </div>
  )
}

export default R3;
