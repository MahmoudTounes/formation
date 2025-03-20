import React, { useState } from 'react';
import './courseCrid.css';

function CourseGrid() {
  const courses = [
    {
      cover: "/o1.png",
      hoverCover: "/o1.1.png",
      courseName: "web",
      course: "25 Courses",
    },
    {
      cover: "/o2.png",
      hoverCover: "/o2.1.png",
      courseName: "Design",
      course: "25 Courses",
    },
    {
      cover: "/o3.png",
      hoverCover: "/o3.1.png",
      courseName: "Computer Science",
      course: "10 Courses",
    },
    {
      cover: "/o4.png",
      hoverCover: "/o4.1.png",
      courseName: "History & Archeologic",
      course: "15 Courses",
    },
    {
      cover: "/o5.png",
      hoverCover: "/o5.1.png",
      courseName: "Software Engineering",
      course: "30 Courses",
    },
    {
      cover: "/o6.png",
      hoverCover: "/o6.1.png",
      courseName: "Information Software",
      course: "60 Courses",
    },
    {
      cover: "/o7.png",
      hoverCover: "/o7.1.png",
      courseName: "base de données",
      course: "10 Courses",
    },
    {
      cover: "/o8.png",
      hoverCover: "/o8.1.png",
      courseName: "Programtion",
      course: "30 Courses",
    },
    {
      cover: "/o9.png",
      hoverCover: "/o9.1.png",
      courseName: "Graphic Design",
      course: "80 Courses",
    },
    {
      cover: "/o10.png",
      hoverCover: "/o10.1.png",
      courseName: "Conception",
      course: "120 Courses",
    },
    {
      cover: "/o11.png",
      hoverCover: "/o11.1.png",
      courseName: "Business Administration",
      course: "17 Courses",
    },
    {
      cover: "/o12.png",
      hoverCover: "/o12.1.png",
      courseName: "Web Management",
      course: "17 Courses",
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
          <div
            className="course-cards"
            key={index}
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
        ))}
      </div>
    </div>
  );
}

export default CourseGrid;