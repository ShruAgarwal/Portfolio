import React from 'react';
import { SiLinkedin } from "react-icons/si";
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './achievements.css';
import IMG1 from '../../assets/creator.png'
import IMG2 from '../../assets/blogs.png'
import IMG3 from '../../assets/creds.png'


const Achievements = () => {  
  const achievements = [
    {
      id: 1,
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6993162970688045056/',
      link_1: 'https://streamlit.io/creators',
      img: IMG1,
      alt: 'Streamlit Creator',
      test: 'Became a member of the awesome Streamlit Creator Community in July 2022.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6981300506874802176/',
      link_1: 'https://shru.hashnode.dev/',
      img: IMG2,
      alt: 'Articles Written',
      test: "Explore my thoughts and perspectives through several articles I have written over Hashnode. I have also contributed a post for the Streamlit Blog.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/shruti-agarwal-bb7889237',
      img: IMG3,
      alt: 'Certificates Unlocked',
      test: "Explore the landmarks of my educational journey, marked by the certificates I've earned through different learning platforms.",
    },
  ];
  return (
    <section id="achievements">
      <h5>Showcases my learning journey and accomplishments so far.</h5>
      <h2>Achievements</h2>
      <Swiper 
        className="container achievements__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {achievements.map((test) => (
          <SwiperSlide className="achievements" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <SiLinkedin />
            </a>
          </div>
          <p align='center'>
            <img className='client__image' src={test.img} alt={test.alt} /><br/>
            <h3 key={test.id}><a href={test.link_1}>{test.alt}</a></h3>
          </p>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Achievements