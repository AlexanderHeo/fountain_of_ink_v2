import React, { Component } from 'react';
import styled from 'styled-components';

export default class App extends Component {
  render() {
    return (
      <Container>
        <h1>Fountain of Ink Header</h1>
      </Container>
    )
  }
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`
