import React, { Component } from 'react';
import contacts from '../contacts.json';
import DetailContact from './DetailContact';

class ContactList extends Component {
  state = { renderContacts: contacts.slice(0, 5) };

  handleRandom = () => {
    let random = [];
    let inList = true;
    while (inList) {
      random = contacts[Math.floor(Math.random() * contacts.length)];
      inList = false;
      for (let i = 0; i < this.state.renderContacts.length; i++) {
        if (this.state.renderContacts[i].name === random.name) {
          inList = true;
        }
      }
    }
    this.setState({
      renderContacts: [random, ...this.state.renderContacts],
    });
  };

  handleSortByName = () => {
    let sortedNames = this.state.renderContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });

    this.setState({
      renderContacts: sortedNames,
    });
  };

  handleSortByPopu = () => {
    let sortedPopularity = this.state.renderContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      } else if (a.popularity < b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });

    this.setState({
      renderContacts: sortedPopularity,
    });
  };

  deleteContact = (id) => {
    const deleteBtn = this.state.renderContacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      renderContacts: deleteBtn,
    });
  };

  getContacts = () => {
    return this.state.renderContacts.map((contact) => {
      return (
        <DetailContact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          pictureUrl={contact.pictureUrl}
          popularity={contact.popularity}
          deleteContact={this.deleteContact}
        />
      );
    });
  };

  fiveContacts = (event) => {
    return this.event.slice(0, 6);
  };

  render() {
    return (
      <div>
        <div className="title">
          <h1>IRONCONTACTS</h1>
        </div>
        <div className="btns">
          <div>
            <button onClick={this.handleRandom}>add a random contact</button>
          </div>
          <div>
            <button onClick={this.handleSortByName}>sort by name</button>
          </div>
          <div>
            <button onClick={this.handleSortByPopu}>sort by popularity</button>
          </div>
        </div>
        <div className="titles">
          <p>Picture</p>
          <p>Name</p>
          <p>Popularity</p>
          <p>Action</p>
        </div>
        <div className="container-contacts">{this.getContacts()}</div>
      </div>
    );
  }
}

export default ContactList;
