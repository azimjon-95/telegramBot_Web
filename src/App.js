import React, { useEffect } from 'react';
import './app.css'
import { useTelegram } from './hooks/useTelegram';
import Main from './components/Header/Main';
import { Button } from 'antd'

const App = () => {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])


  return (
    <div className="">
      <Main />
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  )
}

export default App