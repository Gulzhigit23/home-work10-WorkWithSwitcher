import React from 'react'
import styled from 'styled-components'

function Toggle({onChange}) {
  return (
    <InputWrapper>
          <Input type="checkbox" onChange={onChange} />
          <Slider/>
    </InputWrapper>
  )
}

export default Toggle

const InputWrapper = styled.label`
position: relative;

`
const Input = styled.input`
position: absolute;
top: 13px;
&:checked + span {
background-color: #1890ff;

&::before{
left:27px;
}
}
`

const Slider = styled.span`

display: flex;
cursor: pointer;
width: 50px;
height: 25px;
border-radius: 100px;
background-color: #bfbfbf;
position: relative;
transition: background-color 0.2s;
top: 13px;
right: 15px;

&::before{
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 21px;
  height: 21px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
}

&:active::before{
  width: 28px;
}

`
