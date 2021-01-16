import React, { useState } from 'react';
import Video from '../../videos/herov.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer,
        HeroBg,
        VideoBg,
        HeroContent,
        HeroH1,
        HeroP,
        HeroBtnWrapper,
        ArrowForward,
        ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay={true} muted={false} loop src={Video} resizeMode={"cover"} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>MAY THE BRUTES BE WITH YOU</HeroH1>
                <HeroP>
                    Sign up for a new kind of gaming and pick your Brutes
                    to constitute the best squad.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="signup" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover} 
                    primary="true"
                    dark="true"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
} 

export default HeroSection;