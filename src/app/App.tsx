import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Book from 'pages/book'
import HeartPulse from 'pages/heart-pulse'

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
