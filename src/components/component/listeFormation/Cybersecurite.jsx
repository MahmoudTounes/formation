import React from 'react';
import Interformation from '../Interformation';
import './Cybersecurite.css'; // Import CSS file
import Coursesapps from './Coursesapps';
import FormationDetaill from './FormationDetaill';

const courses = [
    {
        title: 'Python pour le Deep Learning & le Machine Learning: A à Z',
        instructor: 'Cora Demort',
        rating: 4.4,
        reviewCount: 944,
        price: 34.99,
        originalPrice: null,
        imageUrl: 'nd.png', // Replace with actual image URL
        link: '/CoursesDta',
    },
    {
        title: 'Analyse de Données avec Python: Numpy, Pandas et Matplotlib',
        instructor: 'Lacki G',
        rating: 4.3,
        reviewCount: 347,
        price: 24.99,
        originalPrice: null,
        imageUrl: 'ndm.png', // Replace with actual image URL
        link: '/course/python-data-analysis',
    },
    {
        title: 'Le Deep Learning de A à Z',
        instructor: 'Hadelin de Ponteves',
        rating: 4.4,
        reviewCount: 2090,
        price: 59.99,
        originalPrice: null,
        imageUrl: 'ndn.png', // Replace with actual image URL
        link: '/course/deep-learning-az',
    },
    {
        title: 'Les Data Sciences de A à Z',
        instructor: 'Hadelin de Ponteves, SuperDataScience Team',
        rating: 4.4,
        reviewCount: 279,
        price: 74.99,
        originalPrice: null,
        imageUrl: 'nds.png', // Replace with actual image URL
        link: '/course/data-science-az',
    },
    // Add more courses here if needed
];

function CourseCard({ course }) {
    return (
        <div className="course-cardappq">
            <a href={course.link} className="course-linkaq">
                <div className="course-image-containeraqz">
                    <img src={course.imageUrl} alt={course.title} className="course-image" />
                </div>
                <h3 className="course-titleaq">{course.title}</h3>
                <p className="course-instructorqq">{course.instructor}</p>
                <div className="course-ratingqq">
                    <span className="rating-valueqq">{course.rating}</span>
                    <span className="star">★</span>
                    <span className="review-countqs">({course.reviewCount})</span>
                </div>
                <div className="course-priceqq">
                    <span className="current-pricesd">${course.price.toFixed(2)}</span>
                    {course.originalPrice && (
                        <span className="original-priceqs">${course.originalPrice.toFixed(2)}</span>
                    )}
                </div>
            </a>
        </div>
    );
}

function Formations() {
    return (
        <div className="drawer-contentazq">
            <Interformation />
          
            <div className="data-science-sectionaz">
                <h2>Cours sur le sujet Data Science</h2>
                <div className="browse-sectionazs">
                    <h3>Cours pour commencer</h3>
                    <p>Découvrez les cours dispensés par des experts confirmés.</p>
                    <ul className="filter-tabsaze">
                        <li className="activeaze">Le plus populaire</li>
                        <li>Nouveau</li>
                        <li>Tendance</li>
                    </ul>
                </div>
                <div className="courses-gridaze">
                    {courses.map((course) => (
                        <CourseCard key={course.link} course={course} />
                    ))}
                    {/* You might need a navigation arrow here based on the image */}
                    <div className="navigation-arrow right-arrow">&gt;</div>
                </div>
            </div>
            <Coursesapps/>
            <FormationDetaill/>
            
        </div>
    );
}

export default Formations;