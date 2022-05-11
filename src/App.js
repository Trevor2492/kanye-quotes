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
      console.log(result.data) //This is a comment
      setQuote(result.data)
    }

    fetchData()
  }, [newQuote])

  const getQuote = () => {
    setNewQuote(!newQuote)
  }

  return (
    <div className="App">
      <img src={kanyePicture} alt='kanye west' />
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
