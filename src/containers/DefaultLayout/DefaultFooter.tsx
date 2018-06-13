import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};


class DefaultFooter extends Component<any,any> {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://coreui.io">CoreUI</a> &copy; 2018 creativeLabs.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
      </React.Fragment>
    );
  }
}

export default DefaultFooter;
