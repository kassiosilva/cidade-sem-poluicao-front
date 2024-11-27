import { BrowserRouter, Route, Routes } from 'react-router'

import { ContactUs } from './pages/app/contact-us'
import { Donations } from './pages/app/donations'
import { EnvironmentalAwareness } from './pages/app/environmental-awareness'
import { Home } from './pages/app/home'
import { RegisterDonor } from './pages/app/register-donor'
import { SignUp } from './pages/auth/sign-up'

export function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register-donor" element={<RegisterDonor />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/environmental-awareness"
          element={<EnvironmentalAwareness />}
        />
      </Routes>
    </BrowserRouter>
  )
}
