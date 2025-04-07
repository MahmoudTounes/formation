import React from 'react';
import './Awrapper.css';

function Awrapper() {
  return (
    <div className="learning-options-containerff">
      <div className="image-wrapperff">
        <img src="./imagee.png" alt="Description de l'image" />
      </div>
      <div className="learning-options-contentff">
        <h1>LEARN ANYTHING</h1>
        <h2>Benefits About Online Learning Expertise</h2>
        <a href="/cours" className="course-block">
          <div className="course-item">
            <img src="/livre.png" alt="Online Courses" className="course-imagess" />
            <div className="course-text">
              <a href="/cours" className="course-link">Online Courses</a>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </a>
        <a href="/formations" className="course-block">
          <div className="course-item">
            <img src="/liv.jpg" alt="Earn A Certificates" className="course-imagess" />
            <div className="course-text">
              <a href="/formations" className="course-link">Earn A Certificates</a>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </a>
        <a href="/formations" className="course-block">
          <div className="course-item">
            <img src="/li.png" alt="Learn with Expert" className="course-imagess" />
            <div className="course-text">
              <a href="/formations" className="course-link">Learn with Expert</a>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Awrapper;