import React from 'react';
import './VideoCourses.css'; // Assuming you have a CSS file

function VideoCourseList() {
  const videoCourses = [
    {
      id: 1,
      title: 'Booste ta Productivité avec DeepSeek, ChatGPT, Owen, Claude',
      instructor: 'Owen, Claude',
      rating: 4.4,
      reviews: 1047,
      price: 34.99,
      badge: 'Nouveau et populaire',
      duration: '6 heures au total',
      updated: 'Mise à jour 03/2025',
      imageUrl: 'pd.png', // Replace with actual image path
    },
    {
      id: 2,
      title: 'Excel pour la Gestion de Projet : Outil Suivi & Dashboard',
      badge: 'Les mieux notés',
      rating: 4.5,
      reviews: 3889,
      price: 34.99,
      duration: '2 heures au total',
      updated: 'Mise à jour 03/2025',
      imageUrl: '/pm.png', // Replace with actual image path
    },
    {
      id: 3,
      title: 'Crée une application web en un temps record – No-Code',
      badge: 'Nouveau et populaire',
      rating: 4.5,
      reviews: 1007,
      price: 44.99,
      duration: '1 heure au total',
      updated: 'Mise à jour 03/2025',
      imageUrl: 'pq.png', // Replace with actual image path
    },
    {
      id: 4,
      title: 'Python pour la Data Science et le Machine Learning: A à Z',
      rating: 4.0,
      reviews: 29928,
      price: 34.99,
      duration: '4,5 heures au total',
      updated: 'Mise à jour 01/2024',
      imageUrl: 'pf.png', // Replace with actual image path
    },
    {
      id: 5,
      title: 'Machine Learning avec Python - de Zéro à Réseaux de Neurones',
      rating: 4.3,
      reviews: 1000,
      price: 69.99,
      duration: '10 heures au total',
      updated: 'Mise à jour 10/2024',
      imageUrl: 'python.png', // Replace with actual image path
    },
    {
      id: 6,
      title: 'le Machine Learning avec Python',
      rating: 4.5,
      reviews: 8668,
      price: 59.99,
      duration: '7 heures au total',
      updated: 'Mise à jour 04/2020',
      imageUrl: 'ml.png', // Replace with actual image path
    },
  ];

  return (
    <div className="video-course-list-containerappt">
      {videoCourses.map((course) => (
        <div key={course.id} className="video-course-cardtre">
          <div className="video-course-previewesd">
            <img src={course.imageUrl} alt={course.title} />
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
            <p className="video-course-durationred">{course.duration} • {course.updated}</p>
          </div>
          <div className="video-course-actionsdesz">
            <span className="video-course-pricezeser">{course.price} $US</span>
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

export default VideoCourseList;