import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
    const { value } = props;

    const formatCount = () => (value === 0 ? "empty" : value);
    const getBadgeColorClass = () =>
        value === 0 ? "bg-warning" : "bg-primary";

    const badgeClasses = `badge ${getBadgeColorClass()} m-2`;
    const buttonClasses = "btn btn-sm bg-primary m-2";
    const deleteButtonClasses = "btn btn-sm btn-danger m-2";

    return (
        <div>
            <span>{props.name}</span>
            <span className={badgeClasses}>{formatCount()}</span>
            <button
                className={buttonClasses}
                onClick={() => props.onIncrement(props.id)}
            >
                +
            </button>
            <button
                className={buttonClasses}
                onClick={() => props.onDecrement(props.id)}
            >
                -
            </button>
            <button
                className={deleteButtonClasses}
                onClick={() => props.onDelete(props.id)}
            >
                Delete
            </button>
        </div>
    );
};

Counter.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Counter;
