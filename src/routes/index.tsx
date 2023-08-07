import {Routes, Route} from 'react-router-dom'
import { Home } from '../screens/SignedIn/Home'
import { DetailsHome } from '../screens/SignedIn/DetailsHome'
import { MyProfile } from '../screens/SignedIn/MyProfile'


export function RouterApp() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="details-home/:id" element={<DetailsHome />} />
      <Route path="profile" element={<MyProfile />} />
      <Route path='*' element={<Home />} />
    </Routes>
  )
}