import React from 'react';
import * as S from './style';
import profileDatas from '../../../data/profile.json';

function Hero() {

    const { profile } = profileDatas;

    return (
        <S.HeroContainer>
            <S.HeroContent>
                <h2>{profile?.greeting?.main?.intro}</h2>
                <p>{profile?.greeting?.main?.detail}</p>
            </S.HeroContent>
        </S.HeroContainer>
    );
}

export default Hero;