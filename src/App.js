import React, { Component } from 'react';
import Form from './components/Form.jsx';
import ContactList from './components/ContactList.jsx';
import Filter from './components/Filter.jsx';
import { fetchContacts } from './redux/contacts-operations';
import { loadingContacts } from './redux/contacts-selectors';
import style from './components/Style.module.css';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    filter: '',
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={style.wrapper}>
        <h1>Phonebook</h1>
        <Form onSubmitData={this.formSubmitData} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: loadingContacts(state),
});

const mapDiaspatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDiaspatchToProps)(App);
