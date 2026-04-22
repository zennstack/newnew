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

  const removeName = (index) => {
    setList(list.filter((_, i) => i !== index))
  }

  return (
    <div className="app">
      <div className="card">
        <h1>😎 List sa mga gwapo</h1>
        <p className="subtitle">Add your entries below</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addName()}
          />
          <button onClick={addName}>Add</button>
        </div>

        {list.length === 0 ? (
          <p className="empty">Wala pang gwapo sa list 😢</p>
        ) : (
          <ul>
            {list.map((item, index) => (
              <li key={index} className="list-item">
                <span>{item}</span>
                <button
                  className="delete"
                  onClick={() => removeName(index)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App