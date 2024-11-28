import { api } from '../lib/axios'

export async function sendContact(contact) {
  const { data } = await api.post('/contact-us', { ...contact })

  return data
}
