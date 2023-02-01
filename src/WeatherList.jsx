/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import WeatherListItem from './WeatherListItem';

const WeatherList = ({ weatherList }) => {
  return (
    <div className="mt-6">
      {weatherList.map(item => {
        return <WeatherListItem key={item.id} item={item} />;
      })}
    </div>
  );
};

WeatherList.propTypes = {
  weatherList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      cityName: PropTypes.string,
      temp: PropTypes.number,
      humidity: PropTypes.number,
    }),
  ).isRequired,
};

export default memo(WeatherList);
