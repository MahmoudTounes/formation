import React from 'react';
import './CoursesFormateur.css'; // Import the CSS file

// Dummy course data - replace with your actual data and image paths
const courses = [
  {
    id: 1,
    imageUrl: '/pn.png', // Replace with actual path
    title: 'Maîtrisez Excel de A à Z',
    subtitle: 'Excel, VBA, Power Query',
    instructor: 'Sébastien Daviot',
    rating: 4.5,
    reviewCount: 1335,
    totalHours: 16.5,
    sessionCount: 311,
    price: 59.99,
  },
  {
    id: 2,
    imageUrl: '/pns.png', // Replace with actual path
    title: 'Devenir un expert du SQL',
    subtitle: 'SQL, Big Query, PostgreSQL',
    instructor: 'Sébastien Daviot',
    rating: 4.0,
    reviewCount: 651,
    totalHours: 17.5,
    sessionCount: 75,
    price: 19.99,
  },
  {
    id: 3,
    imageUrl: '/pnd.png', // Replace with actual path
    title: 'Devenir un expert de Power BI',
    subtitle: 'Power BI, Power Query, Dax',
    instructor: 'Sébastien Daviot',
    rating: 4.6,
    reviewCount: 2022,
    totalHours: 15,
    sessionCount: 198,
    price: 59.99,
  },
  {
    id: 4,
    imageUrl: '/pn.png', // Replace with actual path
    title: 'Data Analyse avec Excel',
    subtitle: 'Tableaux Croisés Dynamiques',
    instructor: 'Sébastien Daviot',
    rating: 4.7,
    reviewCount: 1100,
    totalHours: 12,
    sessionCount: 250,
    price: 49.99,
  },
  {
    id: 5,
    imageUrl: '/pns.png', // Replace with actual path
    title: 'Devenez un expert du web',
    subtitle: 'HTML, CSS, JavaScript',
    instructor: 'Sébastien Daviot',
    rating: 4.2,
    reviewCount: 780,
    totalHours: 20,
    sessionCount: 90,
    price: 29.99,
  },
  {
    id: 6,
    imageUrl: '/pnd.png', // Replace with actual path
    title: 'Créez un Dashboard Excel',
    subtitle: 'Vues personnalisées',
    instructor: 'Sébastien Daviot',
    rating: 4.9,
    reviewCount: 1550,
    totalHours: 10,
    sessionCount: 200,
    price: 69.99,
  },
  // Add more courses with their image paths
];

const InstructorCourses = () => {
  return (
    <div className="instructorCoursesSection">
      <h2>Mes cours ({courses.length})</h2>
      <div className="coursesGrid">
        {courses.map((course) => (
          <div className="courseCard" key={course.id}>
            {course.badge && <div className="badge">{course.badge}</div>}
            <img src={course.imageUrl} alt={course.title} className="courseImage" />
            <div className="courseDetails">
              <h3 className="courseTitle">{course.title}</h3>
              <p className="courseSubtitle">{course.subtitle}</p>
              <p className="instructorName">{course.instructor}</p>
              <div className="ratingAndReviews">
                <span className="rating">{course.rating}</span>
                <span className="star">★</span>
                <span className="reviewCount">({course.reviewCount})</span>
              </div>
              <p className="courseInfo">
                {course.totalHours} heures au total • {course.sessionCount} sessions
              </p>
              <p className="coursePrice">{course.price} $US</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorCourses;