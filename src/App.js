import React, {Component} from 'react';
import SignIn from './js/Components/SignIn';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false,
            companyName:'New Workout Studio',
            error : null,
            errorInfo: null
        }
        
        this.forgotPassword = this.forgotPassword.bind(this)
        
    }

    static getDerivedStateFromError(error) {
        return { hasError : true }
    }
    
    componentDidCatch(error, errorInfo) {
        this.logErrorToMyService(error,errorInfo)
    }

    logErrorToMyService(error , errorInfo){
        console.log('error',error);
        console.log('errorInfo',errorInfo)
        this.setState({
            error:error,
            errorInfo:errorInfo
        })
    }

    forgotPassword() {
        console.log('Please try later!!')
    }

    render() {
        if(this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong!!</h1>
                    <h3>Error : {this.state.error}</h3>
                    <p>Error Info : {this.state.errorInfo}</p>
                </div>
            )
        }

        return <SignIn companyName = {this.state.companyName} forgotPassword = {this.forgotPassword}/>;
    }
}

export default App;