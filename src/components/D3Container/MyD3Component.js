import React from 'react';
import * as d3 from "d3";

class D3Component extends React.Component {
    constructor(props) {
        super(props);

        this.myReference = React.createRef();
    }

    componentDidMount() {
        this.update();
    }

    update() {
        var container = d3.select(this.myReference.current);

        container
            .selectAll("p")
            .data(this.props.data)
            .enter()
            .append("p")
            .text(function (d) {
                return "Value is " + d;
            });
    }

    render() {
        return (
            <div ref={this.myReference}>
            </div>
        );
    }
}

export default D3Component