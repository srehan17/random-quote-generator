import { useMemo } from "react"
import data from "./data/data.json"
import "./App.css"

const App = () => {

  const handleGenerateNewQuoteClick = () => { console.log('click')
  window.location.reload()  }

  const randomQuoteAndAuthor = useMemo ( () => {
    const dataLength = data.data.length
    const randomIndex = Math.floor(Math.random() * dataLength)   
    const quote = JSON.stringify(data.data[randomIndex].quote)
    const author = JSON.stringify(data.data[randomIndex].author).replace(/"/g, "")
    return [quote, author]
  })


  return (
    <div className="app">
      <div id="quote-box">
        <div id="text" style={{fontSize: 20, fontWeight: 600}}>Random Quote</div>
        <div className="quoteContainer" style={{height: 100}}>
          <div id="quote" >{randomQuoteAndAuthor[0]}</div>
          <div id="author" style={{fontSize: 16, fontWeight: 400, marginTop: 20}}>by {randomQuoteAndAuthor[1]}</div>
        </div>
        <button onClick={handleGenerateNewQuoteClick} id="new-quote">Generate New Quote</button>
        <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">Tweet Quote</a>
      </div>
    </div>
  )
}

export default App
