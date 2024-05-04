import * as React from 'react';
import PropTypes from 'prop-types';

function CheckboxSet({ checkboxes, callback, title }) {
  const [checkboxValues, setCheckboxValues] = React.useState(new Array(checkboxes.length).fill(false));

  React.useCallback(() => { callback(checkboxValues); }, [callback, checkboxValues]);

  React.useEffect(() => {
    const newArray = checkboxes.filter((value, index) => checkboxValues[index]).map(item => item.value);
    // console.log('callback', newArray)
    callback(newArray);
  }, [checkboxValues]);

  return (
    <div className="m-3" data-testid="checkboxset">
      <span className="flex flex-row place-content-between">
        <h3 data-testid="title" className="text-center">{title}</h3>
        <button
          type="button"
          className="text-blue-500 underline cursor-pointer block text-xs"
          onClick={() => setCheckboxValues(new Array(checkboxes.length).fill(false))}
        >
          Clear All
        </button>
      </span>
      {checkboxes.map((checkbox, index) => (
        <label key={checkbox.value} className="flex flex-row items-start mt-3 ml-1">
          <input
            type="checkbox"
            name={checkbox.label}
            checked={checkboxValues[index]}
            onChange={e => {
              const newCheckboxValues = [...checkboxValues];
              newCheckboxValues[index] = e.target.checked;
              setCheckboxValues(newCheckboxValues);
            }}
            className="mr-2 mt-1"
          />
          <span>
            <div data-testid="label" className="leading-tight">{checkbox.label}</div>
            <div data-testid="description" className="text-xs text-gray-500">{checkbox.description}</div>
          </span>
        </label>
      ))}
    </div>
  );
}

export default CheckboxSet;

CheckboxSet.propTypes = {
  checkboxes: PropTypes.array,
  callback: PropTypes.func,
  title: PropTypes.string,
};
