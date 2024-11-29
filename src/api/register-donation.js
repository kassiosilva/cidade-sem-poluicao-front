import { api } from '../lib/axios'

export async function registerDonation(donation) {
  const { data } = await api.post('/register-donation', { ...donation })

  return data
}
