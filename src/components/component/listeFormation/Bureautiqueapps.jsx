import React, { useState } from 'react';
import './Bureautiqueapps.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const topCategories = [
    'Certifications informatiques',
    'Développement Web',
    'JavaScript',
    'React JS',
    
    'Java',
    
];

const subCategoriesData = {
    'Développement Web': [
        { name: 'Développement Web', count: '+14 M de participants', filter: 'Développement Web' },
    ],
    'JavaScript': [
        { name: 'JavaScript', count: '+12 M de participants', filter: 'JavaScript' },
    ],
    'React JS': [
        { name: 'React JS', count: '+8 M de participants', filter: 'React' },
    ],
    'Cadre d\'application Angular': [
        { name: 'Cadre d\'application Angular', count: '+4 M de participants', filter: 'Angular' },
    ],
    'Java': [
        { name: 'Java', count: '+15.5 M de participants', filter: 'Java' },
    ],
    'Développement Android': [
        { name: 'Développement Android', count: '+8 M de participants', filter: 'Android' },
    ],
    'Certifications informatiques': [],
};

const allCourses = [
    {
        title: 'Formation Complète Développeur Web 1',
        instructors: 'John Taibi (Coddy), Apprendre à Coder',
        rating: 4.6,
        reviewCount: 27507,
        price: 74.99,
        originalPrice: 179.99,
        imageUrl: 'na.png',
        isBestSeller: true,
        category: 'Développement Web',
        link: '/CoursesDevoppe',
    },
    {
        title: 'Formation Complète Développeur Web 2',
        instructors: 'John Taibi (Coddy), Apprendre à Coder',
        rating: 4.7,
        reviewCount: 28000,
        price: 79.99,
        originalPrice: 189.99,
        imageUrl: 'ns.png',
        category: 'Développement Web',
        link: '/CoursesWeb2',
    },
    {
        title: 'Formation Complète Développeur Web 3',
        instructors: 'John Taibi (Coddy), Apprendre à Coder',
        rating: 4.5,
        reviewCount: 26000,
        price: 69.99,
        originalPrice: 169.99,
        imageUrl: 'nm.png',
        category: 'Développement Web',
        link: '/CoursesWeb3',
    },
    {
        title: 'Formation Complète Développeur Web 4',
        instructors: 'John Taibi (Coddy), Apprendre à Coder',
        rating: 4.8,
        reviewCount: 29000,
        price: 84.99,
        originalPrice: 199.99,
        imageUrl: 'nn.png',
        category: 'Développement Web',
        link: '/CoursesWeb4',
    },
    {
        title: 'JavaScript - The Complete Guide 2024 1',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.8,
        reviewCount: 15000,
        price: 89.99,
        originalPrice: 199.99,
        imageUrl: 'java.jpg',
        category: 'JavaScript',
        link: '/COursesJavaDev',
    },
    {
        title: 'JavaScript - The Complete Guide 2024 2',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.7,
        reviewCount: 14500,
        price: 84.99,
        originalPrice: 194.99,
        imageUrl: 'java.jpg',
        category: 'JavaScript',
        link: '/CoursesJavaDevapp',
    },
    {
        title: 'JavaScript - The Complete Guide 2024 3',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.9,
        reviewCount: 16000,
        price: 94.99,
        originalPrice: 209.99,
        imageUrl: 'java.jpg',
        category: 'JavaScript',
        link: '/CoursesJavaDevappl2',
    },
    {
        title: 'JavaScript - The Complete Guide 2024 4',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.6,
        reviewCount: 13000,
        price: 79.99,
        originalPrice: 189.99,
        imageUrl: 'java.jpg',
        category: 'JavaScript',
        link: '/CoursesJavaDevapp5',
    },
    {
        title: 'React - The Complete Guide 1',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.7,
        reviewCount: 12000,
        price: 94.99,
        originalPrice: 209.99,
        imageUrl: 'nm.png',
        category: 'React JS',
        link: '/CoursesJavaDevs5',
    },
    {
        title: 'React - The Complete Guide 2',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.8,
        reviewCount: 12500,
        price: 99.99,
        originalPrice: 219.99,
        imageUrl: 'nn.png',
        category: 'React JS',
        link: '/CoursesJavaDeva6',
    },
    {
        title: 'React - The Complete Guide 3',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.6,
        reviewCount: 11500,
        price: 89.99,
        originalPrice: 199.99,
        imageUrl: 'ns.png',
        category: 'React JS',
        link: '/course/react-complete-3',
    },
    {
        title: 'React - The Complete Guide 4',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.9,
        reviewCount: 13000,
        price: 104.99,
        originalPrice: 229.99,
        imageUrl: 'nm.png',
        category: 'React JS',
        link: '/course/react-complete-4',
    },
    {
        title: 'Angular - The Complete Guide 1',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.6,
        reviewCount: 18000,
        price: 84.99,
        originalPrice: 204.99,
        imageUrl: 'na.png',
        category: 'Cadre d\'application Angular',
        link: '/course/angular-complete-1',
    },
    {
        title: 'Angular - The Complete Guide 2',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.7,
        reviewCount: 18500,
        price: 89.99,
        originalPrice: 209.99,
        imageUrl: 'nn.png',
        category: 'Cadre d\'application Angular',
        link: '/course/angular-complete-2',
    },
    {
        title: 'Angular - The Complete Guide 3',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.5,
        reviewCount: 17000,
        price: 79.99,
        originalPrice: 199.99,
        imageUrl: 'ns.png',
        category: 'Cadre d\'application Angular',
        link: '/course/angular-complete-3',
    },
    {
        title: 'Angular - The Complete Guide 4',
        instructors: 'Maximilian Schwarzmüller',
        rating: 4.8,
        reviewCount: 19000,
        price: 94.99,
        originalPrice: 214.99,
        imageUrl: 'nm.png',
        category: 'Cadre d\'application Angular',
        link: '/course/angular-complete-4',
    },
    {
        title: 'Java Programming Masterclass 1',
        instructors: 'Tim Buchalka',
        rating: 4.8,
        reviewCount: 90000,
        price: 79.99,
        originalPrice: 199.99,
        imageUrl: 'nn.png',
        category: 'Java',
        link: '/course/java-masterclass-1',
    },
    {
        title: 'Java Programming Masterclass 2',
        instructors: 'Tim Buchalka',
        rating: 4.9,
        reviewCount: 92000,
        price: 84.99,
        originalPrice: 204.99,
        imageUrl: 'na.png',
        category: 'Java',
        link: '/course/java-masterclass-2',
    },
    {
        title: 'Java Programming Masterclass 3',
        instructors: 'Tim Buchalka',
        rating: 4.7,
        reviewCount: 88000,
        price: 74.99,
        originalPrice: 194.99,
        imageUrl: 'nm.png',
        category: 'Java',
        link: '/course/java-masterclass-3',
    },
    {
        title: 'Java Programming Masterclass 4',
        instructors: 'Tim Buchalka',
        rating: 4.6,
        reviewCount: 85000,
        price: 69.99,
        originalPrice: 189.99,
        imageUrl: 'ns.png',
        category: 'Java',
        link: '/course/java-masterclass-4',
    },
    {
        title: 'Android 14 & Kotlin Masterclass 1',
        instructors: 'Denis Panjuta',
        rating: 4.7,
        reviewCount: 15000,
        price: 69.99,
        originalPrice: 179.99,
        imageUrl: 'na.png',
        category: 'Développement Android',
        link: '/course/android-kotlin-1',
    },
    {
        title: 'Android 14 & Kotlin Masterclass 2',
        instructors: 'Denis Panjuta',
        rating: 4.8,
        reviewCount: 15500,
        price: 74.99,
        originalPrice: 184.99,
        imageUrl: 'ns.png',
        category: 'Développement Android',
        link: '/course/android-kotlin-2',
    },
    {
        title: 'Android 14 & Kotlin Masterclass 3',
        instructors: 'Denis Panjuta',
        rating: 4.6,
        reviewCount: 14500,
        price: 64.99,
        originalPrice: 174.99,
        imageUrl: 'nm.png',
        category: 'Développement Android',
        link: '/course/android-kotlin-3',
    },
    {
        title: 'Android 14 & Kotlin Masterclass 4',
        instructors: 'Denis Panjuta',
        rating: 4.9,
        reviewCount: 16000,
        price: 79.99,
        originalPrice: 189.99,
        imageUrl: 'nn.png',
        category: 'Développement Android',
        link: '/course/android-kotlin-4',
    },
    {
        title: 'Info Security Cert 1',
        instructors: 'Various Experts',
        rating: 4.5,
        reviewCount: 5000,
        price: 99.99,
        originalPrice: 249.99,
        imageUrl: 'na.png',
        category: 'Certifications informatiques',
        link: '/course/cert-info-1',
    },
    {
        title: 'Info Security Cert 2',
        instructors: 'Various Experts',
        rating: 4.7,
        reviewCount: 5500,
        price: 109.99,
        originalPrice: 259.99,
        imageUrl: 'ns.png',
        category: 'Certifications informatiques',
        link: '/course/cert-info-2',
    },
    {
        title: 'Info Security Cert 3',
        instructors: 'Various Experts',
        rating: 4.6,
        reviewCount: 5200,
        price: 104.99,
        originalPrice: 254.99,
        imageUrl: 'nn.png',
        category: 'Certifications informatiques',
        link: '/course/cert-info-3',
    },
    {
        title: 'Info Security Cert 4',
        instructors: 'Various Experts',
        rating: 4.8,
        reviewCount: 5800,
        price: 119.99,
        originalPrice: 269.99,
        imageUrl: 'nm.png',
        category: 'Certifications informatiques',
        link: '/course/cert-info-4',
    },
];

function Bureautiqueapps() {
    const [currentCategory, setCurrentCategory] = useState('Développement Web');
    const [displayedCourses, setDisplayedCourses] = useState([]);
    const [courseStartIndex, setCourseStartIndex] = useState(0);

    const coursesToShow = 4;

    const handleTopCategoryClick = (category) => {
        setCurrentCategory(category);
        setCourseStartIndex(0);
        filterCourses(category);
    };

    const filterCourses = (category) => {
        const filtered = allCourses.filter(course => course.category === category);
        setDisplayedCourses(filtered);
    };

    const handlePrevClick = () => {
        setCourseStartIndex(prev => Math.max(0, prev - coursesToShow));
    };

    const handleNextClick = () => {
        setCourseStartIndex(prev => Math.min(displayedCourses.length - coursesToShow, prev + coursesToShow));
    };

    const visibleCourses = displayedCourses.slice(courseStartIndex, courseStartIndex + coursesToShow);
    const hasPrev = courseStartIndex > 0;
    const hasNext = displayedCourses.length > coursesToShow && courseStartIndex + coursesToShow < displayedCourses.length;

    React.useEffect(() => {
        filterCourses(currentCategory);
    }, [currentCategory]);

    return (
        <div className="skillsDisplaySection">
            <div className="skillsDisplaySection__header">
                <h1 className="skillsDisplaySection__mainTitle">Les meilleurs cours de {currentCategory}</h1>
                <p className="skillsDisplaySection__headline">Les cours les plus consultés et les mieux notés.</p>
            </div>

            <ul className="skillsDisplaySection__topCategories">
                {topCategories.map((category, index) => (
                    <li key={index} className={`skillsDisplaySection__topCategoryItem ${category === currentCategory ? 'skillsDisplaySection__topCategoryItem--active' : ''}`}>
                        <button
                            className="skillsDisplaySection__topCategoryButton"
                            onClick={() => handleTopCategoryClick(category)}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>

            {subCategoriesData[currentCategory] && subCategoriesData[currentCategory].length > 0 && (
                <div className="skillsDisplaySection__subCategories">
                    {subCategoriesData[currentCategory].map((subCategory, index) => (
                        <button
                            key={index}
                            className={`skillsDisplaySection__subCategoryButton`}
                        >
                            {subCategory.name}
                            <span className="skillsDisplaySection__participantCount">{subCategory.count}</span>
                        </button>
                    ))}
                </div>
            )}

            <div className="skillsDisplaySection__courseCarousel">
                {hasPrev && (
                    <button className="skillsDisplaySection__carouselButton skillsDisplaySection__carouselButton--prev" onClick={() => handlePrevClick()}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}
            <div className="skillsDisplaySection__courseList">
                {visibleCourses.map((course, index) => (
                    <div key={index} className="skillsDisplaySection__courseItem">
                        <a href={course.link} className="skillsDisplaySection__courseLink">
                            <div className="skillsDisplaySection__courseImageContainer">
                                <img
                                    src={course.imageUrl}
                                    alt={course.title}
                                    className="skillsDisplaySection__courseImage"
                                />
                                {course.isBestSeller && (
                                    <span className="skillsDisplaySection__bestSeller">Bestseller</span>
                                )}
                            </div>
                            <h3 className="skillsDisplaySection__courseTitle">{course.title}</h3>
                            <p className="skillsDisplaySection__courseInstructors">{course.instructors}</p>
                            <div className="skillsDisplaySection__courseRating">
                                <span className="skillsDisplaySection__ratingValue">{course.rating}</span>
                                <span className="skillsDisplaySection__star">★</span>
                                <span className="skillsDisplaySection__reviewCount">({course.reviewCount})</span>
                            </div>
                            <div className="skillsDisplaySection__coursePrice">
                                <span className="skillsDisplaySection__currentPrice">E£{course.price.toFixed(2)}</span>
                                {course.originalPrice && (
                                    <span className="skillsDisplaySection__originalPrice">E£{course.originalPrice.toFixed(2)}</span>
                                )}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            {hasNext && (
                <button className="skillsDisplaySection__carouselButton skillsDisplaySection__carouselButton--next" onClick={() => handleNextClick()}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
              
            
            )}       <div className="viewAllButtonContainer">
            <a href="/Cybersecurite" className="viewAllButtonLink">
              <button className="viewAllButton">
                Afficher tous les cours de la catégorie Science des données
              </button>
            </a>
          </div>
        </div>
    
        
        </div>
         
   
        

    
);
}

export default Bureautiqueapps;