import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Buttons,
  Input,
  Label,
  StyledH1,
  StyledHighlight,
  Wrapper,
} from './styles';

const Entrar: React.FC = () => {
  const navigate = useNavigate();
  const [userCode, setUserCode] = React.useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCode(event.target.value);
  };

  const handleSubmit = () => {
    if (!userCode) {
      alert('Por favor, digite o código do usuário.');
      return;
    }
    navigate(`/marcar-hora/${userCode}`);
  };

  return (
    <Wrapper>
      <Box>
        <StyledH1>
          Ponto <StyledHighlight>Ilumeo</StyledHighlight>
        </StyledH1>
        <Label htmlFor="userCode">Código da Usuário</Label>
        <Input
          id="userCode"
          placeholder="Digite o código do usuário"
          value={userCode}
          onChange={handleInputChange}
        />
        <Buttons type="submit" onClick={handleSubmit} isDisabled={false}>
          Confirmar
        </Buttons>
      </Box>
    </Wrapper>
  );
};
export default Entrar;
