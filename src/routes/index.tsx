import { Route, Routes } from 'react-router-dom'

import { Home } from '../screens/SignedIn/Home'
import { DetailsHome } from '../screens/SignedIn/DetailsHome'
import { Historico } from '../screens/SignedIn/Inquilinos/Historico'

export function RouterApp() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Home />} />
      <Route path="historico" element={<Historico />} />
      <Route path="detalhamento-casa/:id" element={<DetailsHome />} />
    </Routes>
  )
}