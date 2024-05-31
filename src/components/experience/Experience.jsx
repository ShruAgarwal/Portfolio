import React from 'react';
import { BsCode, BsDatabaseFill } from 'react-icons/bs';
import { CgWebsite } from "react-icons/cg";
import { LuBrainCircuit } from "react-icons/lu";
import { TiCloudStorage } from "react-icons/ti";
import { GrProjects } from "react-icons/gr";
import { SiStreamlit, SiGithubactions } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Technical Abilities</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3><BsCode className="experience__container-icon" size={24}/>  Programming Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img className="img" src="https://img.icons8.com/color/344/python--v2.png" alt="python"/>
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"/>
              <h4>Javascript</h4>
            </article>
          </div>
          <br /><br />
          <h3><CgWebsite className="experience__container-icon" size={21}/>  Web Development Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img className="img" src="https://cdn.iconscout.com/icon/free/png-512/free-html-5-1-1175208.png" alt="html5"/>
              <h4>HTML5</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.iconscout.com/icon/free/png-512/free-css3-11-1175239.png" alt="css3"/>
              <h4>CSS3</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://img.icons8.com/color-glass/48/bootstrap.png" alt="bootstrap"/>
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://img.icons8.com/officel/40/react.png" alt="reactjs"/>
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.worldvectorlogo.com/logos/fastapi.svg" alt="fastapi"/>
              <h4>FastAPI</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://img.icons8.com/fluency/48/node-js.png" alt="nodejs"/>
              <h4>Node.js</h4>
            </article>
          </div>
          <br /><br />
          <h3><BsDatabaseFill className="experience__container-icon" size={20}/>  Databases</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img className="img" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/mysql-9-498901.png" alt="mysql"/>
              <h4>MySQL</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb"/>
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite"/>
              <h4>SQLite</h4>
            </article>
          </div>
          <br /><br />
          <h3><TiCloudStorage className="experience__container-icon" size={23}/>  Cloud Platforms</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img className="img" src="https://react-simple-portfolio-codewithvk.netlify.app/images/icons/amazon_aws-icon.svg" alt="aws"/>
              <h4>AWS</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.iconscout.com/icon/free/png-512/free-google-cloud-2038785-1721675.png" alt="gcp"/>
              <h4>Google Cloud  (basics)</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3><LuBrainCircuit className="experience__container-icon" size={21}/>  Machine Learning Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img className="img" src="https://pandas.pydata.org/static/img/pandas_mark_white.svg" alt="pandas"/>
              <h4>Pandas</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://img.icons8.com/color/344/numpy.png" alt="numpy"/>
              <h4>Numpy</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://img.icons8.com/fluency/344/opencv.png" alt="opencv"/>
              <h4>OpenCV</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://raw.githubusercontent.com/python-pillow/pillow-logo/main/pillow-logo-248x250.png" alt="pillow"/>
              <h4>Pillow</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" alt="tensorflow"/>
              <h4>TensorFlow</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/768px-Keras_logo.svg.png" alt="keras"/>
              <h4>Keras</h4>
            </article>
            <article className="experience__details">
              <img className="sk_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/390px-Scikit_learn_logo_small.svg.png" alt="scikit-learn"/>
              <h4>Scikit-learn</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://matplotlib.org/stable/_images/sphx_glr_logos2_001.png" alt="matplotlib"/>
              <h4>Matplotlib</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="seaborn"/>
              <h4>Seaborn</h4>
            </article>
            <article className="experience__details">
              <img className="px_img" src="https://global.discourse-cdn.com/business7/uploads/plot/original/3X/b/2/b20398c2f56ade4bbfdbfdb8f2dc09188eac4d86.jpeg" alt="plotly"/>
              <h4>Plotly</h4>
            </article>
          </div>
          <br /><br />
          <h3><GrProjects className="experience__container-icon" size={20}/>  Other Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiStreamlit className="experience__details-icon" size={23}/>
              <h4>Streamlit</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/brand/favicon.png" alt="langchain"/>
              <h4>LangChain</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://react-simple-portfolio-codewithvk.netlify.app/images/icons/linux-icon.svg" alt="linux" />
              <h4>Linux</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git"/>
              <h4>Git</h4>
            </article>
            <article className="experience__details">
              {/* <img className="img" src="https://avatars.githubusercontent.com/u/44036562?s=200&v=4" alt="cicd"/> */}
              <SiGithubactions className="experience__details-icon" size={25}/>
              <h4>GitHub Actions</h4>
            </article>
            <article className="experience__details">
              <AiFillApi className="experience__details-icon" size={23}/>
              <h4>REST APIs</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.iconscout.com/icon/free/png-512/free-postman-3521648-2945092.png" alt="postman"/>
              <h4>Postman</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://qualified-production.s3.us-east-1.amazonaws.com/uploads/bd0ddbec21accfade4075e9e1af55575df7a7d526f52d129042a7dbf551597ea.png" alt="netlify" />
              <h4>Netlify</h4>
              {/* https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg */}
            </article>
            
            {/* <article className="experience__details">
              <img className="img" src="https://cdn.iconscout.com/icon/free/png-256/docker-3628734-3029959.png" alt="docker"/>
              <h4>Docker</h4>
            </article> */}
          </div>
          {/* <div className="lottie">
          <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_9rfdfjek.json" background="transparent" speed="1" loop controls autoplay></lottie-player>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Experience