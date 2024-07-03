import { useState } from 'react'

const gifts = [
  'CPU i9',
  'RAM 32GB',
  'keyboard',
  'xe sh 160i',
]
function Randomgift() {
  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }
  return (
    <>
      <div className="App" style={{ padding: 20, textAlign: 'center' }}>
        <h1>{gift || 'Chua co phan thuong'}</h1>
        <button onClick={randomGift}>Lay thuong</button>
      </div>

    </>
  )
}

export default Randomgift