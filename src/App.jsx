import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    const trimmed = task.trim()
    if (!trimmed) return
    setTasks((prev) => [...prev, trimmed])
    setTask('')
  }

  const removeTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index))
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask()
    }
  }

  return (
    <main className="app-container">
      <h1>Lista de Tarefas</h1>
      <div className="input-row">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Adicione uma nova tarefa"
          aria-label="Nova tarefa"
        />
        <button onClick={addTask} className="add-btn">
          Adicionar
        </button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 && <li className="empty">Nenhuma tarefa ainda.</li>}
        {tasks.map((item, index) => (
          <li key={`${item}-${index}`} className="task-item">
            <span>{item}</span>
            <button onClick={() => removeTask(index)} className="remove-btn">
              Remover
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
