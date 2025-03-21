import React from 'react';
import './PopularCourses.css';

function PopularCourses() {
  const courses = [
    {
      imageSrc: '/image11.png',
      title: 'Commencer par les Fondamentaux ',
      rating: 5.0,
      instructor: 'John Smith',
      lectures: '50 lectures (190 hrs)',
      price: '$100 All Course / $15 per month',
      link: '/courseWeb',
    },
    {
      title: 'Apprendre la Logique de Programmation',
      rating: 5.0,
      instructor: 'Ram Gurung',
      lectures: '30 lectures (125 hrs)',
      price: '$200 All Course / $25 per month',
      imageSrc: '/image9.png',
      link: '/CourseProgra',
    },
    {
      title: 'Conception et Design Fondamentaux ',
      rating: 5.0,
      instructor: 'Saroj Nepal',
      lectures: '50 lectures (50 hrs)',
      price: '$50 All Course / $5 per month',
      imageSrc: '/image10.png',
      link: '/Webdevelopment',
    },
    {
      title: 'HTML, CSS, and Javascript for Web Developers',
      rating: 5.0,
      instructor: 'Saroj Nepal',
      lectures: '50 lectures (50 hrs)',
      price: '$50 All Course / $5 per month',
      imageSrc: '/images3.jpg',
      link :'/Developments'
    
      
    },
  ];

  return (
    <div className="courses-container">
      <h1>OUR COURSES</h1>
      <h2>Explore Our Popular Online Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <a href={course.link}>
              <img src={course.imageSrc} alt={course.title} />
            </a>
            <div className="rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < course.rating ? 'filled' : ''}>
                  ★
                </span>
              ))}
              <span>({course.rating})</span>
            </div>
            <p className="instructor">by {course.instructor}</p>
            <p className="lectures">{course.lectures}</p>
            <p className="price">{course.price}</p>
            <a href={course.link} className="enroll-button">
              ENROLL NOW!
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCourses;