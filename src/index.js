import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordFieldType: "password",
      isError: false,
    };
  }
  /**
   * This method is used for handle input change
   * @param {*} event
   */
  handleInput(event) {
    this.props.onChange(event);
    this.setState({
      isError: false,
    });
  }
  /**
   * This method is used for handle input focus
   * @param {*} event
   */
  handleFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }
  /**
   * This method is used for handle input blur
   * @param {*} event
   */
  handleBlur(event) {
    if (this.props.onBlur()) {
      this.props.onBlur(event);
    }
    if (this.props.value.length < this.props.passwordMinValue) {
      this.setState({
        isError: true,
      });
    } else {
      this.setState({
        isError: false,
      });
    }
  }
  /**
   * This method is used for handle input key down
   * @param {*} event
   */
  handleKeyDown(event) {
    if (this.props.onKeyDown()) {
      this.props.onKeyDown(event);
    }
  }
  /**
   * This method is used for handle input key up
   * @param {*} event
   */
  handleKeyUp(event) {
    if (this.props.onKeyUp()) {
      this.props.onKeyUp(event);
    }
  }
  /**
   * This method is used for handle input key press
   * @param {*} event
   */
  handleKeyPress(event) {
    if (this.props.onKeyPress()) {
      this.props.onKeyPress(event);
    }
  }
  /**
   * This method is used for handle password show/hide
   */
  handlePasswordToggle() {
    let passwordFieldTypeValue = this.state.passwordFieldType;
    this.setState({
      passwordFieldType:
        passwordFieldTypeValue === "password" ? "text" : "password",
    });
  }
  render() {
    return (
      <div>
        <input
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          tabIndex={this.props.tabIndex}
          placeholder={this.props.placeholder}
          hide={this.props.hide}
          disabled={this.props.disabled}
          type={this.state.passwordFieldType}
          maxLength={this.props.maxLength}
          autoComplete={this.props.autoComplete}
          className={this.props.className}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onChange={this.handleInput.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        ></input>

        {this.props.isViewPassword && this.props.value !== "" ? (
          <span class="password-eye">
            {this.state.passwordFieldType === "text" ? (
              <span onClick={this.handlePasswordToggle.bind(this)}>
                {" "}
                <i class="fas fa-eye"></i>
              </span>
            ) : (
              <span onClick={this.handlePasswordToggle.bind(this)}>
                {" "}
                <i class="fas fa-eye-slash"></i>
              </span>
            )}
          </span>
        ) : (
          ""
        )}
        {this.state.isError ? (
          <div class="error-text">{this.props.passwordErrorMsg}</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
Password.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  tabIndex: PropTypes.number,
  hide: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  autoComplete: PropTypes.string,
  className: PropTypes.object,
  isViewPassword: PropTypes.bool,
  passwordErrorMsg: PropTypes.string,
  passwordMinValue: PropTypes.number,
};
Password.defaultProps = {
  onFocus: function () {},
  onBlur: function () {},
  onKeyDown: function () {},
  onKeyPress: function () {},
  onKeyUp: function () {},
  onChange: function () {},
  placeholder: "",
  isViewPassword: true,
  id: "",
  name: "",
  tabIndex: 0,
  hide: false,
  disabled: false,
  type: "password",
  maxLength: 255,
  isnumberonly: false,
  autoComplete: "",
  className: {},
  value: "",
  passwordErrorMsg: "The password field must be at least 3 characters",
  passwordMinValue: 3,
};
export default Password;
