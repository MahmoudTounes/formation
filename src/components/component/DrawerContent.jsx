import React from 'react';
import Header from './Header';
import HeroContent from './HeroContent';
import PopularCourses from './PopularCourses';
import Footerapp from './Footerapp';
import Awrapper from './Awrapper';
import './DrawerContent.css'; // Importez le fichier CSS
import './margin.css'; // Importez le fichier margin.css

function DrawerContent() {
    return (
        <div className="drawer-content">
            <Header />
            <HeroContent />
            <Awrapper/>
            <PopularCourses />
            <Footerapp />
        </div>
    );
}

export default DrawerContent;