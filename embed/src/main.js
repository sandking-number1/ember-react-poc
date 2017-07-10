import React from 'react';
import ReactDOM from 'react-dom';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.communicate('hello');
  };

  render() {
    return (
      <div>
        It's aliiiiiive!!!
        { JSON.stringify(this.props.data) }
        <button onClick={ this.handleClick }>click me!</button>
      </div>
    );
  }
}

export default (element, data, cb) => {
  ReactDOM.render(
    <TestComponent data={ data } communicate={ cb }/>, 
    element
  );
}
