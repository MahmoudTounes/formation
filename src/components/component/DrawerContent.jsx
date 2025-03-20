import React from 'react';
import Header from './Header';
import HeroContent from './HeroContent';
import PopularCourses from './PopularCourses';
import Footerapp from './Footerapp';
import Awrapper from './Awrapper';
import './DrawerContent.css'; // Importez le fichier CSS
import './margin.css'; // Importez le fichier margin.css
import CourseGrid from './CourseGrid';
import TeamSection from './TeamSection';
import BlogSection from './BlogSection';
function DrawerContent() {
    return (
        <div className="drawer-content">
            <Header />
            <HeroContent />
            <Awrapper/>
            <PopularCourses />
            <CourseGrid/>
            <TeamSection/>
            <BlogSection/>
            <Footerapp />
        </div>
    );
}

export default DrawerContent;