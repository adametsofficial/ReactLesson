import React, { Component } from "react";
import classes from "./App.module.scss";
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/counter";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Mazda", year: 2010 },
        { name: "AUDI", year: 2015 }
      ],
      pageTitle: "React Components",
      showCars: false
    };
  }

  onChangeName(name, index) {
    const car = this.state.cars[index];

    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars });
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({ cars });
  }

  UNSAFE_componentWillMount() {
    console.log("App componentWillMount");
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  render() {
    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={event =>
                this.onChangeName(event.target.value, index)
              }
            /> 
          </ErrorBoundary>
        );
      });
    }
    return (
      <div className={classes["div-style"]}>
        <h1 className={classes["Ttile"]}>
          {/* this.state.pageTitle */ this.props.title}
        </h1>

        <Counter />

        <div className={classes.container}>{cars}</div>
        <button
          style={{ marginTop: "20px" }}
          className={classes.toggleBtn}
          onClick={this.toggleCarsHandler}
        >
          Toggle cars
        </button>
      </div>
    );
  }
}

export default App;
