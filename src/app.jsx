/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent, createRef } from 'react';
import Search from './Search';
import WeatherList from './WeatherList';

export default class App extends PureComponent {
  state = {
    weatherList: [],
    error: null,
  };

  searchText = createRef();

  async componentDidMount() {
    this.loadWeather();
  }

  loadWeather = async () => {
    try {
      const url = 'http://localhost:3000/weatherList';
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data);
      }

      this.setState({ weatherList: data });
    } catch (error) {
      this.setState({ error });
    }
  };

  clearWeather = async () => {
    this.setState({
      weatherList: [],
    });
  };

  addWeather = async event => {
    try {
      event.preventDefault();

      const searchText = this.searchText.current.value;

      const res = await fetch('http://localhost:3000/weatherList', {
        method: 'POST',
        body: JSON.stringify({
          cityName: searchText,
          temp: 30,
          humidity: 80,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data);
      }

      this.setState(
        ({ weatherList }) => ({
          weatherList: [...weatherList, data],
        }),
        () => {
          this.searchText.current.value = '';
        },
      );
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, weatherList } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <div className="flex flex-row items-center justify-center h-screen">
        <div className="w-1/2">
          <Search addWeather={this.addWeather} ref={this.searchText} />
          <WeatherList weatherList={weatherList} />
          <button
            className="btn ml-2"
            type="button"
            onClick={this.clearWeather}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}
