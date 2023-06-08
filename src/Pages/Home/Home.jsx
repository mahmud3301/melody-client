import React from 'react';
import Carousel from './Carousel';
import PopularClassesSection from './PopularClassesSection';
import InstructorsSection from './InstructorsSection';
import ExtraSection from './ExtraSection';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <PopularClassesSection/>
            <InstructorsSection/>
            <ExtraSection/>
        </div>
    );
};

export default Home;