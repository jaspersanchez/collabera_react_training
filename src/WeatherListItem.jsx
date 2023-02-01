/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WeatherListItem = ({ item }) => {
  return (
    <div key={item.id} className="bg-white p-6 m-2 rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-4">{item.cityName}</h2>
      <p className="text-gray-600 mb-2">Temperature: {item.temp}</p>
      <p className="text-gray-600">Humidity: {item.humidity}</p>
    </div>
  );
};

WeatherListItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number,
    cityName: PropTypes.string,
    temp: PropTypes.number,
    humidity: PropTypes.number,
  }).isRequired,
};

export default memo(WeatherListItem);
