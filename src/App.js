import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserLayout } from './components/UserLayout';
import { GuestHome } from './GuestHome';
import { GuestNavbar } from './components/GuestNavbar';
import { About } from './about';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <GuestNavbar />
          <UserLayout>
            <Routes>
              <Route path="/" element={<GuestHome />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </UserLayout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
