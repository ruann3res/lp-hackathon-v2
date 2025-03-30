import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages'
import UserForm from './pages/User-form'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/user-form" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  )
}