import React from 'react';
import './connecter.css';

function Connecter() {
  const handleStudentClick = () => {
    window.open('/login', '_blank'); // Opens in a new tab
  };

  const handleTeacherClick = () => {
    window.open('/login', '_blank'); // Opens in a new tab
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-content">
          <div className="login-form">
            <h2>تسجيل الدخول</h2>
            <p>لديك الخيار بين حساب الولي أو التلميذ.</p>

            <div className="user-types">
              <div className="user-type" onClick={handleTeacherClick}>
                <img src="eleve.png" alt="Student Icon" />
                <p>تلميذ</p>
              </div>
              <div className="user-type" onClick={handleStudentClick}>
                <img src="proffeseur.png" alt="professeur Icon" />
                <p>ولي</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connecter;