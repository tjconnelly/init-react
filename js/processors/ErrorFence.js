import React from 'react';

class ErrorFence extends React.Component {
  constructor(props){
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error,info) {
    this.setState({ hasError: true });
    //console.log(error,info);
  }
  render() {
    if (this.state.hasError) {
      return <p style={{ 'color': 'red' }}><b>KA-GANK!</b></p>;
      //return <b>KA-GANK!</b>;
    }
    return this.props.children;
  }
}
export default ErrorFence;
