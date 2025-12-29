import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Book from './pages/Book'
import HeartPulse from './pages/HeartPulse'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<HeartPulse />} />
        <Route path="/" element={<Book />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
