import React from 'react';
import { Container } from 'react-bootstrap';

export const UserLayout= (props) => (
  <Container>
    {props.children}
  </Container>
)