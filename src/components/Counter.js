import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.value = props.initialValue || 0;
    }

    handleButtonClick = (change) => {
        this.value += change;
        console.log(`Updated value: ${this.value}`);
        this.forceUpdate();
    };

    render() {
        return React.createElement(
            'div',
            { className: 'counter' },
            React.createElement('button', { onClick: () => this.handleButtonClick(-1) }, '-'),
            React.createElement('span', { style: { margin: '0 10px' } }, this.value),
            React.createElement('button', { onClick: () => this.handleButtonClick(1) }, '+')
        );
    }
}

export default Counter;
