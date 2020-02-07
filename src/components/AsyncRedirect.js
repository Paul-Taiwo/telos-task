import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';


const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
);

class AsyncRedirect extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            resolvedError: false,
            resolvedSuccess: false,
            data: "",
            error: ""
        };
    }

    componentDidMount() {
        this.props
            .promise()
            .then(data => this.setState({ resolvedSuccess: true, data }))
            .catch(error => this.setState({ resolvedError: true, error }));
    }

    render() {
        if (this.state.resolvedError) {
            return <h1>Error Encountered</h1>;
        } else if (this.state.resolvedSuccess) {
            return (
                <Redirect from={this.props.from} push to={this.props.to} />
            );
        } else {
            return loading();
        }
    }
}

export default AsyncRedirect;
