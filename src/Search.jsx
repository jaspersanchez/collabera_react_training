/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const Search = forwardRef(({ addWeather }, ref) => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={addWeather}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg font-medium mb-4">Weather App</h1>
        <div className="mb-4 ">
          <h1 className="block font-medium mb-2">City</h1>
          <input ref={ref} className="border border-gray-400 p-2" type="text" />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
});

Search.propTypes = {
  addWeather: PropTypes.func.isRequired,
  clearWeather: PropTypes.func.isRequired,
};

export default memo(Search);
