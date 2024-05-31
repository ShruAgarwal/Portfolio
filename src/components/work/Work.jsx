import React from 'react';
import { SiGithub } from "react-icons/si";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './work.css';
import IMG from '../../assets/work_project.png'

const Work = () => {
    const work = [
        {
          id: 1,
          link: 'https://github.com/OmdenaAI/laguna-philippines-rice-disease',
          link_1: 'https://www.linkedin.com/feed/update/urn:li:activity:7091759159427121153/',
          img: IMG,
          company: 'Omdena',
          role: 'Junior Machine Learning Engineer | Task Lead',
          work_type: 'Internship',
          duration: 'April 2023 - July 2023',
          desc: "Led the 'Model Building and Deployment' task for the Philippines Chapter project addressing real challenges faced by farmers using Machine Learning.",
          desc_1: "Developed a robust deep learning classifier with around 91% accuracy to identify prevalent rice diseases in the Philippines. Contributed to the Streamlit app that embeds all models & deployed it using HuggingFace Spaces.",
        },
    ];

    return (
        <section id="work">
            <h5>A quick recap of where I've worked</h5>
            <h2>Work Experience</h2>
            <Swiper 
            className="container work__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
            {work.map((desc_1) => (
            <SwiperSlide className="work" key={desc_1.id}>
                <div className="client__avatar">
                    <a href={desc_1.link}><SiGithub /></a>
                </div>
                <p align='center'>
                    <img className='client__image' src={desc_1.img} alt={desc_1.company} /><br/>
                    <h3>{desc_1.company}</h3>
                    <h4>{desc_1.role}</h4>
                    <h4 key={desc_1.id}><a href={desc_1.link_1}>{desc_1.work_type}</a></h4>
                    <h5>{desc_1.duration}</h5>
                </p>
                <small className="client__review">{desc_1.desc}</small>
                <small className="client__review">{desc_1.desc_1}</small>
                </SwiperSlide>
            ))}
            </Swiper>
        </section>
    )
}

export default Work