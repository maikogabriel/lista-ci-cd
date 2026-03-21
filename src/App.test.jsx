import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('pode adicionar e remover tarefas', async () => {
  render(<App />)
  const input = screen.getByPlaceholderText(/adicione uma nova tarefa/i)
  const addButton = screen.getByText(/adicionar/i)

  await userEvent.type(input, 'Escrever testes')
  await userEvent.click(addButton)

  expect(screen.getByText('Escrever testes')).toBeInTheDocument()

  const removeButton = screen.getByText(/remover/i)
  await userEvent.click(removeButton)

  expect(screen.getByText(/nenhuma tarefa ainda/i)).toBeInTheDocument()
})
