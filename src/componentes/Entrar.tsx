import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div style={styles.container}>
      <h1 style={styles.title}>
        Ponto <span style={styles.highlight}>Ilumeo</span>
      </h1>
      <div style={styles.inputContainer}>
        <label htmlFor="userCode" style={styles.label}>
          Código do usuário
        </label>
        <input
          id="userCode"
          type="text"
          placeholder="Digite o código do usuário"
          value={userCode}
          style={styles.input}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit} style={styles.button}>
        Confirmar
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
  },
  highlight: {
    color: '#FF7F00', // Orange
  },
  inputContainer: {
    margin: '20px 0',
    textAlign: 'center' as const,
  },
  label: {
    display: 'block',
    fontSize: '16px',
    color: '#777',
    marginBottom: '8px',
  },
  input: {
    width: '200px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    textAlign: 'center' as const,
    backgroundColor: '#f9f9f9',
  },
  button: {
    width: '200px',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: '#fff',
    backgroundColor: '#FF7F00', // Orange
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
export default Entrar;
