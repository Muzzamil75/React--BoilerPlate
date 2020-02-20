import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 32px;
  border-radius: 3px;
  color: black;
  border: 2px solid white;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: blacks;
    color: black;
  }
`
export default function CustomButton() {
  return (
    <div className="card card-body mb-3" style={{ width: '50%', margin: 'auto' }}>
      <div className="row">
        <div className="col-md-12 mb-3">
          <Button>I am styled Button</Button>
        </div>
      </div>
    </div>
  )
}