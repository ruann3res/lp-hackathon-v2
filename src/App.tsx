import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Index from './pages'
import { UserForm } from './components/User-Form'
// import Index from './pages'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/chat" element={<Chat />} /> */}
      </Routes>
    </BrowserRouter>
  )
}