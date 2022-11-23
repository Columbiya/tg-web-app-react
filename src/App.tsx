import React, { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { useTelegram } from './components/hooks/useTelegram';

function App() {
  const { tg } = useTelegram()
  
  useEffect(() => {
    tg.ready() //является хорошей практикой сообщает о том, что приложение полностью инициализировалось
  }, [])

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
