import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '@/features/test_components/Home'
import Users from '@/features/test_components/Users'
import Articles from '@/features/test_components/Articles'
import OwnersLogin from '@/features/owners/login/owners_login'
import HomeShow from '@/features/owners/home/show/show'

export default function ReserveRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="users" element={<Users />} />
        <Route path="/owners_login" element={<OwnersLogin />} />
        <Route path="/owners/home" element={<HomeShow />} />
      </Routes>
    </BrowserRouter>
  )
}
