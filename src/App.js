import './App.css';
import axios from 'axios';
import kanyePicture from './kanyePicture.jpg'
import { useState, useEffect } from 'react'

function App() {

  const [ quote, setQuote ] = useState('')
  const [ newQuote, setNewQuote ] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.kanye.rest`)
      console.log(result.data)
      setQuote(result.data)
    }

    fetchData()
  }, [newQuote])

  const getQuote = () => {
    setNewQuote(!newQuote)
  }

  return (
    <div className="App">
      <img src={kanyePicture} style={{ width: '375px' }} alt='kanye west' />
      <div className='quote'>
        {quote.quote}
      </div>
      <button onClick={getQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;
