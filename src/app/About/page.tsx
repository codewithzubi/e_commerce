import React from 'react'
import AboutHero from '@/Components/AboutHero';
import AboutSection from '@/Components/AboutSection';
import Aboutpopularproduct from '@/Components/Aboutpopularproduct';

const page = () => {
    return (
      <div>
        <AboutHero/>
            <AboutSection />
            <Aboutpopularproduct />
            
      </div>
    );
}

export default page