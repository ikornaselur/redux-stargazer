var React = require('react');
var PropTypes = React.PropTypes;
var UserTextInput = require('./UserTextInput');

var Header = React.createClass({
  propTypes: {
    searchForUser: PropTypes.func.isRequired,
    pending: PropTypes.bool
  },

  handleSearch: function (query) {
    if (query.length !== 0) {
      this.props.searchForUser(query);
    }
  },

  render: function () {
    return (
      <header className='header'>
        <h1>Stargazer</h1>
        <UserTextInput onSave={this.handleSearch}
                       placeholder='Search for user name?'
                       pending={this.props.pending}
        />
      </header>
    );
  }
});

module.exports = Header;
