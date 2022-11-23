import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './achievements.css';
import IMG1 from 'src/assets/sw_1.png'
import IMG2 from 'src/assets/sw_2.png'
import IMG3 from 'src/assets/sw_3.png'


const Achievements = () => {  
  const achievements = [
    {
      id: 1,
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6979714428443197440/',
      link_1: 'https://twitter.com/Shru_explores/status/1510229794105204738?t=SYaxsP9ypI9aeTAaZztb2g&s=09',
      img: IMG1,
      alt: '30-Days-of-Streamlit',
      test: 'In April 2022, I took part in the #30DaysOfStreamlit Challenge, learned about Streamlit, and shared my daily progress on Twitter. Received these cool swags at the end.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6993162970688045056/',
      link_1: 'https://streamlit.io/creators',
      img: IMG2,
      alt: 'Streamlit Creator',
      test: 'Became a member of the awesome Streamlit Creator community in July 2022.',
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6981300506874802176/',
      link_1: 'https://blog.streamlit.io/how-to-build-streamlit-apps-on-replit/',
      img: IMG3,
      alt: 'Streamlit Blog',
      test: "Wrote my first community post for Streamlit Blog about, 'How to build Streamlit apps on Replit'.",
    },
  ];
  return (
    <section id="achievements">
      <h5>Rewards and community support I've received so far!</h5>
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
              <BsLinkedin />
            </a>
          </div>
          <p align='center'>
            <img className='client__image' src={test.img} alt={test.alt} /><br/>
            <a href={test.link_1}>{test.alt}</a>
          </p>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Achievements
