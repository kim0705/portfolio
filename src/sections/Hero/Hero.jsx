import React from 'react';
import * as S from './style';

function Hero() {
    return (
        <S.HeroContainer>
            <S.HeroContent>
                <S.Title>Flexible Developer</S.Title>
                <S.Subtitle>현실에 안주하지 않고 <span>매일 더 나은 가치를 만드는</span> 개발자입니다.</S.Subtitle>
            </S.HeroContent>
        </S.HeroContainer>
    );
}

export default Hero;