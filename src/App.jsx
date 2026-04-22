import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])

  const addName = () => {
    if (name.trim() === '') return
    setList([...list, name])
    setName('')
  }

  return (
    <div className="container">
      <h1>Listahan sa mga gwapo 😎</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addName}>Add</button>
      </div>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App