import React, { Component, PropTypes } from 'react';
import './sidedrawer.scss';
const elementClass = require('element-class');
const cssPrefix = 'react-sidedrawer--';

class Sidedrawer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const body = document.querySelector('body');
    if (this.props.open) {
      elementClass(body).add(`${cssPrefix}no-scroll`);
    } else {
      elementClass(body).remove(`${cssPrefix}no-scroll`);
    }
  }

  render() {
    let overlayClassNames = '';
    let sidedrawerClassNames = this.props.sidedrawerClassName;

    if (this.props.open) {
      overlayClassNames = this.props.overlayClassName;
      sidedrawerClassNames = `${sidedrawerClassNames} open`;
    }

    if (this.props.customClassNames) {
      if (this.props.customClassNames.overlay)
        overlayClassNames = `${overlayClassNames} ${this.props.customClassNames.overlay}`;
      if (this.props.customClassNames.sidedrawer)
        sidedrawerClassNames = `${sidedrawerClassNames} ${this.props.customClassNames.sidedrawer}`;
    }

    return (
      <div>
        <div className={overlayClassNames} onClick={this.props.onClose} />
        <div className={sidedrawerClassNames}>{this.props.children}</div>
      </div>
    );
  }
}

Sidedrawer.defaultProps = {
  overlayClassName: `${cssPrefix}overlay`,
  sidedrawerClassName: `${cssPrefix}sidedrawer`
};

Sidedrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  customClassNames: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  overlayClassName: PropTypes.string,
  sidedrawerClassName: PropTypes.string
};

export default Sidedrawer;
