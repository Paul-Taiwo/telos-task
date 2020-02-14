import React, { PureComponent } from "react";
import Loader1 from "./Loaders/Loader1";

class AsyncComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            resolvedError: false,
            resolvedSuccess: false,
            data: "",
            error: ""
        };
        this.renderChildren = this.renderChildren.bind(this);
    }

    componentDidMount() {
        this.props
            .promise()
            .then(data => this.setState({ resolvedSuccess: true, data }))
            .catch(error => this.setState({ resolvedError: true, error }));
    }

    renderChildren() {
        return React.Children.map(this.props.children, child => {
            if (child !== null) {
                return React.cloneElement(child, {
                    data: this.state.data
                })
            }
        });
    }

    render() {
        if (this.state.resolvedError) {
            return <h1>Error Encountered</h1>;
        } else if (this.state.resolvedSuccess) {
            return <div>{this.renderChildren()}</div>
        } else {
            return (
                <div className="text-center">
                    <Loader1 />
                </div>
            )
        }
    }
}

export default AsyncComponent;
