import React from "react";
import "./PopularCourses.css";

function PopularCourses() {
  const courses = [
    {
      title: "Cours de conception et de développement Web pour débutants",
      price: "149,00 $",
      rating: 5,
      ratingCount: 123,
      image: "/image10.png",
    },
    {
      title: "Cours de conception et de développement Web pour débutants",
      price: "149,00 $",
      rating: 5,
      ratingCount: 123,
      image: "/image9.png",
    },
    {
      title: "Cours de conception et de développement Web pour débutants",
      price: "149,00 $",
      rating: 5,
      ratingCount: 123,
      image: "/image4.png",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="popular-courses">
      <h2 className="popular-courses__title">Cours populaires</h2>
      <div className="popular-courses__grid">
        {courses.map((course, index) => (
          <article key={index} className="course-card">
            <div className="course-card__image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="course-card__details">
              <a href="/categorielivre" target="_blank" className="formation-button">
                en savoir plus
              </a>
              <div className="course-card__price">{course.price}</div>
              <div className="course-card__rating">
                {renderStars(course.rating)} ({course.ratingCount})
              </div>
              <h3 className="course-card__title">{course.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PopularCourses;