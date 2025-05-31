import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("")
  useEffect(() => {
    document.title = `Count ${count}`
  })
  useEffect(() => {
    console.log(`Text: ${text}`)
  },[text])
  

  return (
    <>
       <div>
          <h1>useEffect Hook Challenge</h1>
              <h1>Count: {count}</h1>
              <button onClick={() => setCount(count + 1)}>update Count</button>
       </div>
       <div>
              <h1>Text: {text}</h1>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
       </div>
    </>
  )
}

export default App
