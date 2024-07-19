import { useState } from 'react'
import 'antd/dist/reset.css';

const gifts = [
  'CPU i9',
  'RAM 32GB',
  'keyboard',
  'xe sh 160i',
]
export const RandomGift = () => {
  const [gift, setGift] = useState()

  const randomGifts = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }
  return (
    <>
      <div className="App" style={{ padding: 20, textAlign: 'center' }}>
        <h1>{gift || 'Chua co phan thuong'}</h1>
        <button onClick={randomGifts}>Lay thuong</button>
      </div>

    </>
  )
}