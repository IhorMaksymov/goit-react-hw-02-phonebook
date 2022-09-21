import PropTypes from 'prop-types';

export const Filter = ({ value, change }) => {
    return (
        <label htmlFor="">
            <input type="text" value={value} onChange={change} />
        </label>
    );

};

Filter.Filter = {
    value: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
};