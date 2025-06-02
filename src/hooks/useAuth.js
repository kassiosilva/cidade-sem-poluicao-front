import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'

import { signIn } from '../api/sign-in'
import { signUp } from '../api/sign-up'

export function useAuth() {
  const token = localStorage.getItem('token')

  const navigate = useNavigate()

  const { mutateAsync: authenticate, isPending: loginIsPending } = useMutation({
    mutationFn: signIn,
  })

  const { mutateAsync: register, isPending: registerUserIsPending } =
    useMutation({
      mutationFn: signUp,
    })

  function logout() {
    localStorage.clear()
    navigate('/signin', { replace: true })
  }

  async function login({ email, password }) {
    try {
      const data = await authenticate({ email, password })

      localStorage.setItem('token', data.token)

      navigate('/dashboard', { replace: true })
    } catch (error) {
      toast.error('Erro ao logar. Tente novamente.')
    }
  }

  async function registerUser({ username, email, password }) {
    try {
      await register({ username, email, password })

      toast.success('Usuário cadastrado!')

      navigate('/')
    } catch (error) {
      toast.error('Não foi possível cadastrar o usuário')
    }
  }

  return {
    login,
    loginIsPending,
    logout,
    registerUser,
    registerUserIsPending,
    isUserAuthenticated: !!token,
  }
}
