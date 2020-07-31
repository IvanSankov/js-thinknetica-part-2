import React from "react";
import PropTypes from "prop-types";

class ContactFormInput extends React.Component {
  render() {
    const {label, placeholder, type, name} = this.props;

    return (
      <div className="form-group">
        <label>{label}</label>
        <input type={type} className="form-control" name={name} placeholder={placeholder} />
      </div>
    )
  }
}

ContactFormInput.defaultProps = {
  type: "text"
}

ContactFormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default ContactFormInput;