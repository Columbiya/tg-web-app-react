import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import { ProductList } from './components/ProductList/ProductList';
import { Form } from './components/Form/Form';
import './App.css';

function App() {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready() //является хорошей практикой сообщает о том, что приложение полностью инициализировалось
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/form" element={<Form />} />
      </Routes>

      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
