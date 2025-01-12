import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTodayWork, setHour } from '../handlers/ApiConnection';

const MarcarHora = () => {
  const navigate = useNavigate();
  const { user_id } = useParams();
  console.log(user_id);
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
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={{ margin: '5px' }}>Relógio de ponto</h2>
        <p style={{ margin: '5px' }}>Usuário</p>
        <p style={{ margin: '5px', fontWeight: 'bold' }}>{user_id}</p>
      </div>

      {/* Timer */}
      <div style={styles.timer}>
        {hours ? (
          <>
            <p style={{ margin: '5px' }}>Horas de hoje</p>
            <h1 style={{ margin: '5px', fontSize: '36px' }}>{hours}</h1>
          </>
        ) : (
          <>
            <p style={{ margin: '5px' }}>Inicio do dia</p>
            <h1 style={{ margin: '5px', fontSize: '36px' }}>{startHour}</h1>
          </>
        )}
      </div>

      {/* Buttons */}
      <div style={styles.buttons}>
        <button
          onClick={() => handleStartStop(true)}
          disabled={hours !== null || startHour !== null}
          style={
            hours !== null || startHour !== null
              ? styles.buttonDisabled
              : styles.button
          }
        >
          Entrar
        </button>
        <button
          onClick={() => handleStartStop(false)}
          disabled={hours !== null || startHour === null}
          style={
            hours !== null || startHour === null
              ? styles.buttonDisabled
              : styles.button
          }
        >
          Sair
        </button>
      </div>

      {/* View History Button */}
      <div style={styles.buttons}>
        <button onClick={checkWeekHours} style={styles.button}>
          Ver Histórico
        </button>
        <button onClick={() => navigate('/')} style={styles.button}>
          Voltar
        </button>
      </div>
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
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    '@media (maxWidth: 768px)': {
      flexWrap: 'wrap' as const,
      alignItems: 'stretch',
    },
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  timer: {
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  buttons: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  buttonsDisabled: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
    cursor: 'not-allowed',
  },
  button: {
    backgroundColor: '#FF9900',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    color: '#000',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'not-allowed',
    borderRadius: '4px',
  },
};
export default MarcarHora;
