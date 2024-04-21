import React, { useEffect } from 'react';
import './app.css'

const App = () => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="">Hello
      <button onClick={onClose}>Zakaz</button>
    </div>
  )
}

export default App