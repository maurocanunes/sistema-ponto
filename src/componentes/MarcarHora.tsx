import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTodayWork, setHour } from '../handlers/ApiConnection';
import {
  Box,
  Buttons,
  ButtonsBox,
  Label,
  StyledH1,
  StyledH2,
  StyledHighlight,
  Wrapper,
} from './styles';

const MarcarHora = () => {
  const navigate = useNavigate();
  const { user_id } = useParams();
  if (user_id === undefined || user_id === null) {
    alert('Nao foi possivel identificar o usuário');
    navigate('/');
  }
  const [hours, setHours] = useState<string | null>(null);
  const [startHour, setStartHour] = useState<string | null>(null);
  const [endHour, setEndHour] = useState<string | null>(null);

  useEffect(() => {
    const todayWork = async () => {
      const response = await getTodayWork(user_id);
      if (!response) return;
      if (response.start_time && response.end_time) {
        setHours(response.worked_hours);
      } else if (!response.end_time) {
        setStartHour(response.start_time);
      }
    };

    if (!hours) {
      todayWork();
    }
  }, [hours, endHour, startHour]);

  const handleStartStop = async (start: boolean) => {
    if (hours !== null) {
      alert('Voce ja trabalhou hoje');
      return;
    }
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    start
      ? setStartHour(await setHour(user_id, hour, minutes, true))
      : setEndHour(await setHour(user_id, hour, minutes, false));
  };

  const checkWeekHours = () => {
    navigate(`/lista-horas/${user_id}`);
  };

  return (
    <Wrapper>
      <Box>
        {/* <div style={styles.container}> */}
        {/* Header */}
        <StyledH1>
          Ponto <StyledHighlight>Ilumeo</StyledHighlight>
        </StyledH1>
        <StyledH2>Usuário: {user_id}</StyledH2>

        {/* Hours */}
        <Label>{hours ? 'Horas de hoje' : 'Inicio do dia às'}</Label>
        <StyledH1>{hours || startHour}</StyledH1>

        {/* Buttons */}
        <ButtonsBox>
          <Buttons
            onClick={() => handleStartStop(true)}
            isDisabled={hours !== null || startHour !== null}
          >
            Entrar
          </Buttons>
          <Buttons
            onClick={() => handleStartStop(false)}
            isDisabled={hours !== null || startHour === null}
          >
            Sair
          </Buttons>
        </ButtonsBox>
        <ButtonsBox>
          <Buttons onClick={checkWeekHours} isDisabled={false}>
            Ver Histórico
          </Buttons>
          <Buttons onClick={() => navigate('/')} isDisabled={false}>
            Voltar
          </Buttons>
        </ButtonsBox>
      </Box>
    </Wrapper>
  );
};
export default MarcarHora;
