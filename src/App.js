import React, { useEffect } from 'react';
import './app.css'
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';

const App = () => {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])


  return (
    <div className="">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  )
}

export default App