import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '@/features/test_components/Home'
import Users from '@/features/test_components/Users'
import Articles from '@/features/test_components/Articles'

export default function ReserveRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}
