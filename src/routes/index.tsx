import { Route, Routes } from 'react-router-dom'

import { Home } from '../screens/SignedIn/Home'
import { MyProfile } from '../screens/SignedIn/MyProfile'

export function RouterApp() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="profile" element={<MyProfile />} />
      <Route path='*' element={<Home />} />
    </Routes>
  )
}