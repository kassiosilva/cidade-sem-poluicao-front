import { api } from '../lib/axios'

export async function registerDonor(donor) {
  const { data } = await api.post('/register-donor', { ...donor })

  return data
}
