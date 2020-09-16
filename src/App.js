import React from 'react';
import { render } from 'react-dom';
import './App.css';
import ContactList from './Components/ContactList';
import contacts from './contacts.json';

const App = () => {
  return (
    <div>
      <ContactList />
    </div>
  );
};

export default App;
