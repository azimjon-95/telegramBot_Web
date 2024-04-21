import React, { useEffect } from 'react';
import './app.css'
import { useTelegram } from './hooks/useTelegram';

const App = () => {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])


  return (
    <div className="">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  )
}

export default App