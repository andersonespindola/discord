import React from 'react'

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
  nickname: string
  isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Anderson" />

      <Role>Offline - 7</Role>
      <UserRow nickname="Dj Dreysson Rodrigues" isBot />
      <UserRow nickname="Roberto" />
      <UserRow nickname="Pablo" />
      <UserRow nickname="William" />
      <UserRow nickname="Jackson" />
      <UserRow nickname="Marcel" />
      <UserRow nickname="Poli" />
      <UserRow nickname="Rudi" isBot />
      <UserRow nickname="Matheus" />
      <UserRow nickname="Marcelo" />
    </Container>
  )
}

export default UserList
