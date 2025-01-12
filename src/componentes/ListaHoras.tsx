import React, { use, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getUserList } from '../handlers/ApiConnection';
import { TUSER } from '../types/UserType';

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
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h2 style={styles.headerTitle}>Relógio de ponto</h2>
        <p style={styles.text}>Usuário</p>
        <p style={styles.boldText}>{user_id}</p>
      </header>

      {/* Previous Days */}
      <div style={styles.previousDays}>
        <h3 style={styles.sectionTitle}>Dias anteriores</h3>
        {previousDays.length === 0 && (
          <h4 style={styles.noDataText}>Nenhum dado disponível.</h4>
        )}
        <ul style={styles.daysList}>
          {previousDays.map((day, index) => (
            <li key={index} style={styles.dayItem}>
              <span>{day.day_worked}</span>
              <strong>{day.worked_hours}</strong>
            </li>
          ))}
        </ul>
      </div>

      {/* Return Button */}
      <button onClick={handleBack} style={styles.returnButton}>
        Voltar
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  headerTitle: {
    margin: 0,
  },
  boldText: {
    margin: 0,
    fontWeight: 'bold' as const,
  },
  text: {
    margin: 0,
  },
  previousDays: {
    width: '100%',
    maxWidth: '400px',
    marginBottom: '20px',
  },
  sectionTitle: {
    textAlign: 'left' as const,
    marginBottom: '10px',
  },
  noDataText: {
    textAlign: 'center' as const,
    marginBottom: '10px',
  },
  daysList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  dayItem: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
    padding: '10px',
    marginBottom: '5px',
    borderRadius: '4px',
  },
  returnButton: {
    backgroundColor: '#ff9900',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#e68a00',
    },
  },
};

export default ListaHoras;
