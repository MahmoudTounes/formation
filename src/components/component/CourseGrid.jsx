import React, { useState } from 'react';
import './courseCrid.css';

function CourseGrid() {
  const courses = [
    {
      cover: "/o1.png",
      hoverCover: "/o1.1.png",
      courseName: "web",
      course: "25 Courses",
      link: "/web-courses", // Lien vers la page des cours de web
    },
    {
      cover: "/o2.png",
      hoverCover: "/o2.1.png",
      courseName: "Design",
      course: "25 Courses",
      link: "/design-courses", // Lien vers la page des cours de design
    },
    {
      cover: "/o3.png",
      hoverCover: "/o3.1.png",
      courseName: "Computer Science",
      course: "10 Courses",
      link: "/computer-science-courses", // Lien vers la page des cours d'informatique
    },
    {
      cover: "/o4.png",
      hoverCover: "/o4.1.png",
      courseName: "History & Archeologic",
      course: "15 Courses",
      link: "/history-archeology-courses", // Lien vers la page des cours d'histoire et d'archéologie
    },
    {
      cover: "/o5.png",
      hoverCover: "/o5.1.png",
      courseName: "Software Engineering",
      course: "30 Courses",
      link: "/software-engineering-courses", // Lien vers la page des cours de génie logiciel
    },
    {
      cover: "/o6.png",
      hoverCover: "/o6.1.png",
      courseName: "Information Software",
      course: "60 Courses",
      link: "/information-software-courses", // Lien vers la page des cours de logiciels d'information
    },
    {
      cover: "/o7.png",
      hoverCover: "/o7.1.png",
      courseName: "base de données",
      course: "10 Courses",
      link: "/database-courses", // Lien vers la page des cours de base de données
    },
    {
      cover: "/o8.png",
      hoverCover: "/o8.1.png",
      courseName: "Programtion",
      course: "30 Courses",
      link: "/programming-courses", // Lien vers la page des cours de programmation
    },
    {
      cover: "/o9.png",
      hoverCover: "/o9.1.png",
      courseName: "Graphic Design",
      course: "80 Courses",
      link: "/graphic-design-courses", // Lien vers la page des cours de design graphique
    },
    {
      cover: "/o10.png",
      hoverCover: "/o10.1.png",
      courseName: "Conception",
      course: "120 Courses",
      link: "/conception-courses", // Lien vers la page des cours de conception
    },
    {
      cover: "/o11.png",
      hoverCover: "/o11.1.png",
      courseName: "Business Administration",
      course: "17 Courses",
      link: "/business-administration-courses", // Lien vers la page des cours d'administration des affaires
    },
    {
      cover: "/o12.png",
      hoverCover: "/o12.1.png",
      courseName: "Web Management",
      course: "17 Courses",
      link: "/web-management-courses", // Lien vers la page des cours de gestion web
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="courses-grid-containerse">
      <div className="courses-grid-headers">
        <h1>COURSES</h1>
        <h2>Browse Our Online Courses</h2>
      </div>
      <div className="courses-grids">
        {courses.map((course, index) => (
          <a href={course.link} key={index} className="course-link"> {/* Ajout du lien */}
            <div
              className="course-cards"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={hoveredIndex === index ? course.hoverCover : course.cover}
                alt={course.courseName}
              />
              <h3>{course.courseName}</h3>
              <p>{course.course}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CourseGrid;