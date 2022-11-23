import React, { useEffect } from 'react';
import './App.css';

const tg = Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready() //является хорошей практикой сообщает о том, что приложение полностью инициализировалось
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div>
      <button onClick={onClose}>Зыкрыть</button>
    </div>
  );
}

export default App;
