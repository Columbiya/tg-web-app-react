import React, { useEffect } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';
import { useTelegram } from './components/hooks/useTelegram';

function App() {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready() //является хорошей практикой сообщает о том, что приложение полностью инициализировалось
  }, [])

  return (
    <div>
      <Header />

      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
