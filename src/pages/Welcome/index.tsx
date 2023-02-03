import React from 'react';

import AnimatedLottieView from 'lottie-react-native';

import pokemonAnimation from './squirtle.json';

import * as S from './styles';
import { Button } from '../../components/Button';

export function Welcome() {
  return (
    <S.Container>
      <S.Content>
        <S.WrapperIcon>
          <S.IconContent>
            <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
          </S.IconContent>
        </S.WrapperIcon>

        <S.Title>Pokédex</S.Title>
        <S.SubTitle>Encontre todos os pokémons em um só lugar</S.SubTitle>
      </S.Content>

      <S.Footer>
        <Button title="Iniciar" />
      </S.Footer>
    </S.Container>
  );
}
