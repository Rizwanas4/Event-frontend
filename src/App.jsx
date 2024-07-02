import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Price from './Components/Price';
import Login from './Components/Login';
import Signup from './Components/Signup';
import EventCreation from './Components/EventCreation';
import EventDisplay from './Components/EventDisplay';
import { Auth0Provider } from '@auth0/auth0-react';
import Profile from './Components/Profile';
import Layout from './Components/Layout';

export default function App() {
  return (
    <Auth0Provider
      domain="dev-qm3ehq3cxd80gypi.us.auth0.com"
      clientId="p7OIhz0Ns791P7M9z6Otwzwy4nTSTRmz"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router>
        <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/service" element={<Layout><Service /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/price" element={<Layout><Price /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/eventcreation" element={<Layout><EventCreation /></Layout>} />
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/eventdisplay" element={<Layout><EventDisplay /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}
