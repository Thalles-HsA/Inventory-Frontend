import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/useAuth'

type Props = {
  children: ReactNode
}

const PublicLayout = ({ children }: Props) => {
  const { loading, auth } = useAuth()
  const router = useRouter()

  if (loading) {
    return <div>Loading...</div>
  }

  if (auth) {
    router.push('/dashboard') // redireciona para a página de login caso o usuário não esteja autenticado
    return null
  }

  return <div>{children}</div> // renderiza as rotas privadas caso o usuário esteja autenticado
}

export default PublicLayout
