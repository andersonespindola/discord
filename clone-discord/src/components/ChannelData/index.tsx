import React, { useRef, useEffect } from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Anderson Espindola"
          date="20/10/1997"
          content="Hoje é meu aniversário!"
        />

        <ChannelMessage
          author="William"
          date="20/10/2020"
          content={
            <>
              <Mention>@Anderson</Mention>, partiu jogar um fodinha, sexta fire
              nego!
            </>
          }
          hasMention
          isBot
        />

        <ChannelMessage
          author="Anderson Espindola"
          date="21/10/1997"
          content="Vamo dale!"
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
