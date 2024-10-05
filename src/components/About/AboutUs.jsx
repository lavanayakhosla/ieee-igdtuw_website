import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import ieeeImage from '../../../public/ieee-image.png'; 
import wieImage from '../../../public/wie-image.png';  

const AboutUs = () => {
    const [eventsCount, setEventsCount] = useState(0);
    const [alumniCount, setAlumniCount] = useState(0);

    useEffect(() => {
        let eventsTimer, alumniTimer;

        if (eventsCount < 100) {
            eventsTimer = setTimeout(() => setEventsCount(eventsCount + 1), 20);
        }

   
        if (alumniCount < 1000) {
            alumniTimer = setTimeout(() => setAlumniCount(alumniCount + 10), 10);
        }

        return () => {
            clearTimeout(eventsTimer);
            clearTimeout(alumniTimer);
        };
    }, [eventsCount, alumniCount]);

    return (
        <div className="about-container">
            <div className="big-heading">About Us</div>
            
            <div className="about-section">
                <img src={ieeeImage} alt="IEEE IGDTUW" className="about-image" />
                <div>
                    <div className="big-heading1">IEEE IGDTUW</div>
                    <p className="about-text">
                        IEEE IGDTUW started off with its inspiring journey as IEEE IGIT, inaugurated on 6th February 2004 with around 33 members. Now the student branch of IEEE IGDTUW has a strength of about 200 active members. Stepping beyond the common perceptions. The goal is to imbibe technical skills, managerial skills and self-confidence in students via various events that keep the student branch breathing throughout the year.
                    </p>
                </div>
            </div>

            <div className="counts">
                <div className="count-item">
                    <h2>{eventsCount}+</h2>
                    <p>Events</p>
                </div>
                <div className="count-item">
                    <h2>{alumniCount}+</h2>
                    <p>Alumni</p>
                </div>
            </div>

            <div className="about-section">
                <img src={wieImage} alt="WIEmpower" className="about-image" />
                <div>
                    <div className="big-heading1">WIEmpower</div>
                    <p className="about-text">
                        WIEmpower is the flagship event organised by IEEE IGDTUW and IEEE Delhi Section. WIEmpower aims towards the empowerment of women in STEM. Various events such as workshops, competitions etc. are organised during WIEmpower. WIEmpower 1.0 was organised from 26-27 March, 2019. WIEmpower 2.0 was organised from 17-23 April, 2020.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
