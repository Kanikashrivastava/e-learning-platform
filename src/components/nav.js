import React from 'react';
import {
  Navbar,
  NavbarBrand } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar color="navbar navbar-dark bg-dark" light expand="md">
          <NavbarBrand href="/">Saral</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}