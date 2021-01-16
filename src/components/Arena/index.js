import React, { useState } from 'react';
import Arena from '../../images/HOME_BG_ARENA_1440.jpg';
import { Button } from '../ButtonElement';
import { ArenaContainer,
        ArenaBg,
        ImgBg,
        ArenaContent,
        ArenaH1,
        ArenaP,
        ArenaBtnWrapper,
        ArrowForward,
        ArrowRight } from './ArenaElements';

const ArenaSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <ArenaContainer id='arena'>
            <ArenaBg>
                <ImgBg src={Arena} alt='arena'/>
            </ArenaBg>
            <ArenaContent>
                <ArenaH1>TOURNAMENT</ArenaH1>
                <ArenaP>
                    Join the Arena and win lot of awards
                </ArenaP>
                <ArenaBtnWrapper>
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
                </ArenaBtnWrapper>
            </ArenaContent>
        </ArenaContainer>
    );
} 

export default ArenaSection;