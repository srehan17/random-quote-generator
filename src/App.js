import { useMemo } from "react"
import data from "./data/data.json"
import "./App.css"

const App = () => {
  
  const refresh = () => {
    window.location.reload()
  }

  const randomQuoteAndAuthor = useMemo ( () => {
    const dataLength = data.data.length
    const randomIndex = Math.floor(Math.random() * dataLength)   
    const quote = JSON.stringify(data.data[randomIndex].quote)
    const author = JSON.stringify(data.data[randomIndex].author).replace(/"/g, "")
    return [quote, author]
  }, [])

  return (
    <div className="app">
      <div id="quote-box">
        <div id="text" style={{fontSize: 20, fontWeight: 600}}>Random Quote Generator</div>
        <div className="quoteContainer" style={{height: 100}}>
          <div id="quote" style={{fontSize: 17}}>{randomQuoteAndAuthor[0]}</div>
          <div id="author" style={{fontSize: 16, fontWeight: 400, marginTop: 20}}>by {randomQuoteAndAuthor[1]}</div>
        </div>
        <button onClick={refresh} style={{fontWeight: 600, width: 150}} id="new-quote">Get New Quote</button>
        <button style={{width: 150}}><a style={{fontWeight: 600}} href={`https://twitter.com/intent/tweet?text=${randomQuoteAndAuthor.join(" ")}`} target="_blank" id="tweet-quote">Tweet Quote</a></button>
      </div>
    </div>
  )
}

export default App