import React from 'react';
import ReactPlayer from 'react-player'; // Import the react-player component
//import './VideoCourses.css'; // Assuming you have a CSS file

function CoursesWebSpecifique () {
  const videosCourses = [ // Changed variable name here
    {
      id: 1,
      title: 'Vue JS 3 par la pratique : Le cours 2025 ultime TOUT en 1 !',
      instructor: null,
      rating: 4.6,
      reviews: 243,
      price: 9.99,
      originalPrice: 59.99,
      badge: 'Meilleure vente',
      duration: '19,5 heures au total',
      updated: 'Mise à jour 02/2025',
      videoUrl: 'https://youtu.be/f7CamwgRAGI?si=Kcwd2ZrTieQ4_kbo', // Example YouTube video URL
      imageUrl: 'vuejs.png', // Replace with actual image path
    },
    {
      id: 2,
      title: 'Apprendre Symfony 7 par la création de site E-commerce',
      instructor: null,
      rating: 4.3,
      reviews: 313,
      price: 9.99,
      originalPrice: 19.99,
      duration: '33 heures au total',
      updated: 'Mise à jour 05/2024',
      videoUrl: 'https://youtu.be/KCFpxH8wjeU?si=1oPwJfhV3MhJ6DP9', // Example YouTube video URL
      imageUrl: 'symfony7.png', // Replace with actual image path
    },
    {
      id: 3,
      title: 'Formation Développeur Symfony 6 (par la pratique)',
      instructor: null,
      rating: 4.0,
      reviews: 1653,
      price: 10.99,
      originalPrice: 59.99,
      duration: '43 heures au total',
      updated: 'Mise à jour 12/2023',
      videoUrl: 'https://www.youtube.com/watch?v=sB9mFv_UuQc', // Example YouTube video URL
      imageUrl: 'symfony6.png', // Replace with actual image path
    },
    {
      id: 4,
      title: 'Symfony 7 & PHP MVC (Plusieurs projets) : Guide ultime !',
      instructor: null,
      rating: 4.4,
      reviews: 610,
      price: 9.99,
      originalPrice: 19.99,
      badge: 'Meilleure vente',
      duration: '21,5 heures au total',
      updated: 'Mise à jour 01/2025',
      videoUrl: 'https://www.youtube.com/watch?v=F-J3s9xK51U', // Example YouTube video URL
      imageUrl: 'symfony-php.png', // Replace with actual image path
    },
    {
      id: 5,
      title: 'Symfony pour les enfants ! (de débutant à Expert)',
      instructor: null,
      rating: 4.7,
      reviews: 88,
      price: 9.99,
      originalPrice: 29.99,
      duration: '19,5 heures au total',
      updated: 'Mise à jour 09/2023',
      videoUrl: 'https://www.youtube.com/watch?v=WQhlNF49fEM', // Example YouTube video URL
      imageUrl: 'symfony-kids.png', // Replace with actual image path
    },
    {
      id: 6,
      title: 'Guide pratique pour apprendre Symfony 6.4 (7.0) (e-commerce)',
      instructor: null,
      rating: 4.9,
      reviews: 57,
      price: 9.99,
      originalPrice: 19.99,
      duration: null,
      updated: null,
      videoUrl: 'https://www.youtube.com/watch?v=vJ3M-wnen8o', // Example YouTube video URL
      imageUrl: 'symfony-ecommerce.png', // Replace with actual image path
    },
  ];

  return (
    <div className="video-course-list-containerappt">
      <h2 className="section-title">Les participants ont également acheté</h2>
      {videosCourses.map((course) => ( // Changed variable name here
        <div key={course.id} className="video-course-cardtre">
          <div className="video-course-previewesd">
            {course.videoUrl ? (
              <div className="video-player-wrapper">
                <ReactPlayer
                  url={course.videoUrl}
                  width="100%"
                  height="auto"
                  controls={false} // Hide default controls
                  light={course.imageUrl ? `/images/${course.imageUrl}` : true} // Display image preview until hover
                  playIcon={<div className="play-icon">▶</div>} // Custom play icon
                  style={{ borderRadius: '4px', overflow: 'hidden' }}
                />
              </div>
            ) : (
              <img src={`/images/${course.imageUrl}`} alt={course.title} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            )}
            {course.badge && <span className="badgeerd">{course.badge}</span>}
          </div>
          <div className="video-course-infoerdsz">
            <h3 className="video-course-title">{course.title}</h3>
            {course.instructor && <p className="video-course-instructorertfc">{course.instructor}</p>}
            <div className="video-course-ratingeszr">
              <span className="ratingdfe">{course.rating}</span>
              <span className="starsddx">⭐⭐⭐⭐⭐</span>
              <span className="reviewsdezr">({course.reviews})</span>
            </div>
            {course.duration && course.updated && <p className="video-course-durationred">{course.duration} • {course.updated}</p>}
            {course.duration && !course.updated && <p className="video-course-durationred">{course.duration}</p>}
          </div>
          <div className="video-course-actionsdesz">
            <span className="video-course-pricezeser">{course.price} $US</span>
            {course.originalPrice && <span className="original-price">{course.originalPrice} $US</span>}
            <button className="wishlist-buttonredsxz">
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.53L12 21.35z"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
      <button className="show-more-buttonerdsz">Afficher plus</button>
    </div>
  );
}

export default CoursesWebSpecifique;