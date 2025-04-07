import React from 'react';
import './Coursesapps.css'; // Import CSS file
import { Link } from 'react-router-dom'; // Import Link from React Router

const popularInstructors = [
  {
    name: 'Enzo Ustariz - Web School',
    expertise: 'JavaScript, CSS',
    rating: 4.6,
    globalRatingText: 'Note Globale Du Formateur',
    participants: '92748 participants',
    coursesCount: '40 cours',
    imageUrl: 't8.webp', // Replace with actual image URL
    link: "/PgeFormateurapps", // Simplified link
  },
  {
    name: 'John Taieb (Codeur)',
    expertise: 'Web Development, WordPress',
    rating: 4.5,
    globalRatingText: 'Note Globale Du Formateur',
    participants: '130474 participants',
    coursesCount: '17 cours',
    imageUrl: 't6.webp', // Replace with actual image URL
    link: '/PageFormateurapps', // Simplified link
  },
  {
    name: 'Louis Nicolas Leulliet',
    expertise: 'JavaScript, CSS',
    rating: 4.5,
    globalRatingText: 'Note Globale Du Formateur',
    participants: '51234 participants',
    coursesCount: '10 cours',
    imageUrl: 't7.webp', // Replace with actual image URL
    link: '/PageFormateurapps', // Simplified link
  },
  {
    name: 'DONKEYGEEK Tahar',
    expertise: 'React JS, Next.js',
    rating: 4.6,
    globalRatingText: 'Note Globale Du Formateur',
    participants: '8651 participants',
    coursesCount: '7 cours',
    imageUrl: 't5.webp', // Replace with actual image URL
    link: '/PageFormateurapps', // Simplified link
  },
  {
    name: 'DONKEYGEEK Tahar',
    expertise: 'React JS, Next.js',
    rating: 4.6,
    globalRatingText: 'Note Globale Du Formateur',
    participants: '8651 participants',
    coursesCount: '7 cours',
    imageUrl: 't4.webp', // Replace with actual image URL
    link: '/PageFormateurapps', // Simplified link
  },
];

const InstructorCard = ({ instructor }) => (
  <div className="instructor-card-combined">
    <Link to={instructor.link} className="instructor-link-combined">
      <div className="instructor-image-container-combined">
        <img src={instructor.imageUrl} alt={instructor.name} className="instructor-image-combined" />
      </div>
      <h3 className="instructor-name-combined">{instructor.name}</h3>
      <p className="instructor-expertise-combined">{instructor.expertise}</p>
      <div className="instructor-rating-combined">
        <span className="rating-combined">{instructor.rating}</span>
        <span className="star-combined">★</span>
        <p className="global-rating-text-combined">{instructor.globalRatingText}</p>
      </div>
      <p className="instructor-participants-combined">{instructor.participants}</p>
      <p className="instructor-courses-combined">{instructor.coursesCount}</p>
    </Link>
  </div>
);

const Coursesapps = () => {
  return (
    <div className="web-development-page-combined">
      <section className="popular-instructors-section-combined">
        <h2>Formateurs populaires</h2>
        <p className="section-description-combined">Ces formateurs confirmés sont très bien notés par des participants comme vous.</p>
        <div className="instructors-carousel-combined">
          {popularInstructors.map((instructor) => (
            <InstructorCard key={instructor.name} instructor={instructor} />
          ))}
          {/* Optional: Add navigation arrows for the carousel */}
        </div>
      </section>

      <section className="web-development-courses-section-combined">
        <h2>Tous les cours de la catégorie Web Development</h2>
        <div className="guarantee-info-combined">
          <span className="info-icon-combined">ⓘ</span>
          <p>Vous n'êtes pas sûr de vous ? Tous nos cours s'accompagnent d'une garantie satisfait ou remboursé de 30 jours.</p>
        </div>
        <div className="filter-sort-row-combined">
          <button className="filter-button-combined">
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="filter-icon-combined"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></svg>
            Filtrer
          </button>
          <div className="sort-dropdown-combined">
            <label htmlFor="sort-by-combined">Trier par</label>
            <select id="sort-by-combined">
              <option>Les plus populaires</option>
              {/* Add other sorting options */}
            </select>
          </div>
        </div>
        <p className="results-count-combined">10 000 résultats</p>
        {/* You would typically list the web development courses here */}
      </section>
    </div>
  );
};

export default Coursesapps;