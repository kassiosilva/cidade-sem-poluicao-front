import { BrowserRouter, Route, Routes } from 'react-router'

import { RedirectRoot } from './components/redirect-root'
import { ContactUs } from './pages/app/contact-us'
import { DonationsPoints } from './pages/app/donation-points'
import { Donations } from './pages/app/donations'
import { EnvironmentalAwareness } from './pages/app/environmental-awareness'
import { Home } from './pages/app/home'
import { LearnMore } from './pages/app/learn-more'
import { RegisterDonation } from './pages/app/register-donation'
import { RegisterDonor } from './pages/app/register-donor'
import { WasteCollectionInfo } from './pages/app/waste-collection-info'
import { WasteInfo } from './pages/app/waste-info'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { AppLayout } from './pages/layouts/app'
import { AuthLayout } from './pages/layouts/auth'

export function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectRoot />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="donations" element={<Donations />} />
          <Route path="register-donor" element={<RegisterDonor />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route
            path="environmental-awareness"
            element={<EnvironmentalAwareness />}
          />
          <Route path="wast-information" element={<WasteInfo />} />
          <Route
            path="wast-collection-info"
            element={<WasteCollectionInfo />}
          />
          <Route path="donation-points" element={<DonationsPoints />} />
          <Route path="learn-more" element={<LearnMore />} />
          <Route path="register-donation" element={<RegisterDonation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
