import React from 'react'

import * as Styled from './Button.styled'

const Button = ({ label, onClick }) => {
  return <Styled.Container onClick={onClick}>{label}</Styled.Container>
}

export default Button
