import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function IndexPage() {
    return (
      <>
        <div className="text-content">
            <h1>aj sabandal</h1>
            <h2>full stack web developer using javascript and ruby</h2>
            < FontAwesomeIcon icon={faLinkedin} style={{color:'#08d9d6'}} />
            <h3><a href="https://www.linkedin.com/in/anna-marie-joy-sabandal-899209196/">linkedin </a></h3>
            < FontAwesomeIcon icon={faGithub} style={{color:'#08d9d6'}} />
            <h3><a href="https://github.com/ajsabandal">github</a></h3>
          </div>
        <div className="arrow">

      </div>
    </>
  );

  }