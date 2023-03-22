import React from 'react';

const DateTimeDisplay = ({ value, type }) => {
    return (
        <div>
            <p>{value} {type}</p>
        </div>
    );
};

export default DateTimeDisplay;
