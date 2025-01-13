import React, { use, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getUserList } from '../handlers/ApiConnection';
import { TUSER } from '../types/UserType';
import {
  Box,
  Buttons,
  Label,
  StyledH1,
  StyledH2,
  StyledHighlight,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTD,
  StyledTH,
  StyledTRBody,
  StyledTRHead,
  Wrapper,
} from './styles';

const ListaHoras = () => {
  const { user_id } = useParams();

  const [previousDays, setPreviousDays] = useState<TUSER[]>([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user_id) {
      navigate('/');
    }
    const getList = async () => {
      setPreviousDays(await getUserList(user_id));
    };

    getList();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Box>
        <StyledH1>
          Ponto <StyledHighlight>Ilumeo</StyledHighlight>
        </StyledH1>
        <StyledH2>Usuário: {user_id}</StyledH2>

        <StyledH2>Dias anteriores</StyledH2>
        {previousDays.length === 0 && <Label>Nenhum dado disponível.</Label>}
        <StyledTable>
          <StyledTableHead>
            <StyledTRHead>
              <StyledTH>Dia trabalhado</StyledTH>
              <StyledTH>Horas trabalhadas</StyledTH>
            </StyledTRHead>
          </StyledTableHead>
          <StyledTableBody>
            {previousDays.map((day, index) => (
              <StyledTRBody key={index} isEven={index % 2 === 0}>
                <StyledTD>{day.day_worked}</StyledTD>
                <StyledTD>{day.worked_hours}</StyledTD>
              </StyledTRBody>
            ))}
          </StyledTableBody>
        </StyledTable>
        <Buttons onClick={handleBack}>Voltar</Buttons>
      </Box>
    </Wrapper>
  );
};
export default ListaHoras;
