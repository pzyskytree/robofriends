import React, {Component} from "react";

class ErrorBoundry extends Component{

    constructor(props){
        super();
        this.state ={
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError : true});
    }

    render(){
        if (this.state.hasError){
            return <h1>Ooooops. That is not good to see</h1>
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundry;