import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from 'aphrodite';


const style = StyleSheet.create({
  bodySection: {
    marginBottom: '40px',
  },
});

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(style.bodySection)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom;
