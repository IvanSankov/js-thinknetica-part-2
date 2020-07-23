import ReactDOM from 'react-dom';
import React from 'react';

class Hello extends React.Component{
    render() {
        const name = this.props.name;

        return <div>Hello, {name}</div>;
    }
}

ReactDOM.render(
    <Hello name='Ivan' />,
    document.getElementById('root'),
);