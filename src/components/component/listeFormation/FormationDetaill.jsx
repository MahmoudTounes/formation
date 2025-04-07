import React from 'react';
import './FormationDetaill.css';

const courseData = [
  {
    title: 'Les Data Sciences de A à Z',
    subtitle: 'Data Science, Business Analytics, Data Analysis, Data Mining, Tableau, Statistiques, Modélisation, Régression, SQL, SPSS',
    instructor: 'Hadelin de Ponteves, SuperDataScience Team',
    rating: 4.4,
    reviewCount: '(2079)',
    duration: '16,5 heures au total',
    lectures: '207 sessions',
    level: 'Débutant',
    price: 74.99,
    imageUrl: 'nds.png', // Replace with actual image URL
    filterValues: { rating: 4.5, duration: '17+' },
  },
  {
    title: 'Le Deep Learning de A à Z',
    subtitle: 'Apprenez à créer des algorithmes de Deep Learning en Python par des experts en Machine Learning & Data Science',
    instructor: 'Hadelin de Ponteves',
    rating: 4.4,
    reviewCount: '(2690)',
    duration: '18,5 heures au total',
    lectures: '170 sessions',
    level: 'Tous les niveaux',
    price: 59.99,
    imageUrl: 'ndn.png', // Replace with actual image URL
    filterValues: { rating: 4.0, duration: '17+' },
  },
  {
    title: 'Intelligence Artificielle de A à Z',
    subtitle: 'Combinez la puissance des Data Sciences, du Machine Learning et du Deep Learning pour créer des IAs redoutables !',
    instructor: 'Hadelin de Ponteves',
    rating: 4.6,
    reviewCount: '(1995)',
    duration: '11 heures au total',
    lectures: '108 sessions',
    level: 'Débutant',
    bestSeller: true,
    price: 64.99,
    imageUrl: 'ndm.png', // Replace with actual image URL
    filterValues: { rating: 4.5, duration: '6-17' },
  },
  // Add more course data as needed
];

const CourseCard = ({ course }) => {
  const handleCourseClick = () => {
    window.open(`/course/${course.title.toLowerCase().replace(/ /g, '-')}`, '_blank');
  };

  return (
    <div className="course-card-udemy">
      <div className="course-image-container-udemy" onClick={handleCourseClick} style={{ cursor: 'pointer' }}>
        <img src={course.imageUrl} alt={course.title} className="course-image-udemy" />
      </div>
      <div className="course-details-udemy">
        <h3 className="course-title-udemy">{course.title}</h3>
        <p className="course-subtitle-udemy">{course.subtitle}</p>
        <p className="course-instructor-udemy">{course.instructor}</p>
        <div className="course-rating-udemy">
          <span className="rating-udemy">{course.rating}</span>
          <span className="star-udemy">★</span>
          <span className="review-count-udemy">{course.reviewCount}</span>
        </div>
        <p className="course-duration-udemy">{course.duration} · {course.lectures}</p>
        <p className="course-level-udemy">Niveau : {course.level}</p>
        {course.bestSeller && <span className="best-seller-udemy">Bestseller</span>}
      </div>
      <div className="course-price-udemy">
        <span className="price-udemy">{course.price} $US</span>
      </div>
    </div>
  );
};

const FilterSidebar = () => {
  const handleFilterClick = (event) => {
    event.preventDefault();
    const filterValue = event.currentTarget.getAttribute('href').substring(1);
    window.open(`/filter/${filterValue}`, '_blank');
  };

  return (
    <div className="filter-sidebar-udemy">
      <div className="filter-group-udemy">
        <h4 className="filter-title-udemy">Notes</h4>
        <div className="filter-option-udemy">
          <input type="radio" name="rating" value="4.5" id="rating-4-5" onClick={(e) => window.open(`?rating=${e.target.value}`, '_blank')} />
          <label htmlFor="rating-4-5" className="filter-label-udemy">
            <a href="?rating=4.5" className="filter-link-udemy-checkbox" onClick={handleFilterClick}>
              <span className="star-filter-udemy">★★★★★</span> À partir de 4,5 (1619)
            </a>
          </label>
        </div>
        <div className="filter-option-udemy">
          <input type="radio" name="rating" value="4.0" id="rating-4-0" onClick={(e) => window.open(`?rating=${e.target.value}`, '_blank')} />
          <label htmlFor="rating-4-0" className="filter-label-udemy">
            <a href="?rating=4.0" className="filter-link-udemy-checkbox" onClick={handleFilterClick}>
              <span className="star-filter-udemy">★★★★☆</span> À partir de 4 (3383)
            </a>
          </label>
        </div>
        <div className="filter-option-udemy">
          <input type="radio" name="rating" value="3.5" id="rating-3-5" onClick={(e) => window.open(`?rating=${e.target.value}`, '_blank')} />
          <label htmlFor="rating-3-5" className="filter-label-udemy">
            <a href="?rating=3.5" className="filter-link-udemy-checkbox" onClick={handleFilterClick}>
              <span className="star-filter-udemy">★★★☆☆</span> À partir de 3,5 (3919)
            </a>
          </label>
        </div>
        <div className="filter-option-udemy">
          <input type="radio" name="rating" value="3.0" id="rating-3-0" onClick={(e) => window.open(`?rating=${e.target.value}`, '_blank')} />
          <label htmlFor="rating-3-0" className="filter-label-udemy">
            <a href="?rating=3.0" className="filter-link-udemy-checkbox" onClick={handleFilterClick}>
              <span className="star-filter-udemy">★★☆☆☆</span> À partir de 3 (4040)
            </a>
          </label>
        </div>
      </div>

      <div className="filter-group-udemy">
        <h4 className="filter-title-udemy">Durée de la vidéo</h4>
        <div className="filter-option-udemy">
          <input type="checkbox" name="duration" value="0-1" id="duration-0-1" onClick={(e) => window.open(`?duration=${e.target.value}`, '_blank')} />
          <label htmlFor="duration-0-1" className="filter-label-udemy">
            <a href="?duration=0-1" className="filter-link-udemy-checkbox" onClick={handleFilterClick}>
              0 à 1 heure (484)
            </a>
          </label>
        </div>
        <div className="filter-option-udemy">
          <input type="checkbox" name="duration" value="1-3" id="duration-1-3" onClick={(e) => window.open(`?duration=${e.target.value}`, '_blank')} />
          <label htmlFor="duration-1-3" className="filter-label-udemy">
            <a href="?duration=1-3" className="filter-link-udemy-checkbox" onClick={handleFilterClick}>
              1 à 3 heures (1117)
            </a>
          </label>
        </div>
        <div className="filter-option-udemy">
          <input type="checkbox" name="duration" value="3-6" id="duration-3-6" onClick={(e) => window.open(`?duration=${e.target.value}`, '_blank')} />
          <label htmlFor="duration-3-6" className="filter-label-udemy">
            <a href="?duration=3-6" className="filter-link-udemy-checkbox" onClick={handleFilterClick}>
              3 à 6 heures (1009)
            </a>
          </label>
        </div>
        <div className="filter-option-udemy">
          <input type="checkbox" name="duration" value="6-17" id="duration-6-17" onClick={(e) => window.open(`?duration=${e.target.value}`, '_blank')} />
          <label htmlFor="duration-6-17" className="filter-label-udemy">
            <a href="?duration=6-17" className="filter-link-udemy-checkbox" onClick={handleFilterClick}>
              6 à 17 heures (1115)
            </a>
          </label>
        </div>
        <div className="filter-option-udemy">
          <input type="checkbox" name="duration" value="17+" id="duration-17-plus" onClick={(e) => window.open(`?duration=${e.target.value}`, '_blank')} />
          <label htmlFor="duration-17-plus" className="filter-label-udemy">
            <a href="?duration=17+" className="filter-link-udemy-checkbox" onClick={handleFilterClick}>
              17+ heures (1531)
            </a>
          </label>
        </div>
        <button className="show-more-udemy" onClick={() => window.open('/filter/more-duration', '_blank')}>Afficher plus</button>
      </div>

      <div className="filter-group-udemy">
        <h4 className="filter-title-udemy">Thème</h4>
        <div className="filter-dropdown-udemy">
          <select className="filter-select-udemy" onChange={(e) => window.open(`/filter/theme=${e.target.value}`, '_blank')}>
            <option value="">Tous les thèmes</option>
            <option value="data-science">Data Science</option>
            <option value="deep-learning">Deep Learning</option>
            <option value="machine-learning">Machine Learning</option>
            {/* Add theme options dynamically with links */}
          </select>
        </div>
      </div>

      <div className="filter-group-udemy">
        <h4 className="filter-title-udemy">Sous-catégorie</h4>
        <div className="filter-dropdown-udemy">
          <select className="filter-select-udemy" onChange={(e) => window.open(`/filter/subcategory=${e.target.value}`, '_blank')}>
            <option value="">Toutes les sous-catégories</option>
            <option value="python">Python</option>
            <option value="sql">SQL</option>
            <option value="neural-networks">Réseaux neuronaux</option>
            {/* Add sub-category options dynamically with links */}
          </select>
        </div>
      </div>

      <div className="filter-group-udemy">
        <h4 className="filter-title-udemy">Niveau</h4>
        <div className="filter-dropdown-udemy">
          <select className="filter-select-udemy" onChange={(e) => window.open(`/filter/level=${e.target.value}`, '_blank')}>
            <option value="">Tous les niveaux</option>
            <option value="debutant">Débutant</option>
            <option value="intermediaire">Intermédiaire</option>
            <option value="avance">Avancé</option>
          </select>
        </div>
      </div>

      <div className="filter-group-udemy">
        <h4 className="filter-title-udemy">Langues</h4>
        <div className="filter-dropdown-udemy">
          <select className="filter-select-udemy" onChange={(e) => window.open(`/filter/language=${e.target.value}`, '_blank')}>
            <option value="">Toutes les langues</option>
            <option value="francais">Français</option>
            <option value="anglais">Anglais</option>
            {/* Add language options dynamically with links */}
          </select>
        </div>
      </div>
      <div className="filter-group-udemy">
        <h4 className="filter-title-udemy">Prix</h4>
        <div className="filter-option-udemy">
          <input type="radio" name="price" value="free" id="price-free" onClick={(e) => window.open(`?price=${e.target.value}`, '_blank')} />
          <label htmlFor="price-free" className="filter-label-udemy">
            <a href="?price=free" className="filter-link-udemy-checkbox" onClick={handleFilterClick}>Gratuit</a>
          </label>
        </div>
        <div className="filter-option-udemy">
          <input type="radio" name="price" value="paid" id="price-paid" onClick={(e) => window.open(`?price=${e.target.value}`, '_blank')} />
          <label htmlFor="price-paid" className="filter-label-udemy">
            <a href="?price=paid" className="filter-link-udemy-checkbox" onClick={handleFilterClick}>Payant</a>
          </label>
        </div>
        {/* Add more price options as needed */}
      </div>
    </div>
  );
};

const CourseListSection = ({ courses }) => (
  <div className="course-list-section-udemy">
    {courses.map((course) => (
      <CourseCard key={course.title} course={course} />
    ))}
  </div>
);

const FormationDetaill = () => (
  <div className="udemy-course-list-page">
    <FilterSidebar />
    <CourseListSection courses={courseData} />
  </div>
);

export default FormationDetaill;