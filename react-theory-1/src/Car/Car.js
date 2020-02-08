import React, { Component } from "react";
import classes from "./car.module.scss";
import withClass from "../hoc/withClass";
import PropTypes from 'prop-types'
class Car extends Component {
  render() {
    const inputClasses = [classes.input];

    if (this.props.name !== "") inputClasses.push(classes.green);
    else inputClasses.push(classes.red);

    if (this.props.name.length > 4) inputClasses.push(classes.bold);

    return (
      <React.Fragment>
        <h3> Car Name: {this.props.name}</h3>
        <p>
          Year: <strong>{this.props.year}</strong>
        </p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(" ")}
        />
        <button onClick={this.props.onDelete} className={classes.deleteBtn}>
          delete
        </button>
      </React.Fragment>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  onChangeName: PropTypes.func ,
  onDelete: PropTypes.func,
}

export default withClass(Car, classes.Car);
