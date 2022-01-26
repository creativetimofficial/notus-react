import React from 'react';
import MyD3Component from './MyD3Component';

class D3Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var data = [10, 20, 30];

        return (
            <div>
                <h1>D3 Example</h1>
                <MyD3Component
                    data={data}
                />
            </div>
        );
    }
}

export default D3Container;
