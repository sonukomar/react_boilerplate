import React, {Component} from 'react';
import SignIn from './js/Components/SignIn';
import EmailForm from './EmailForm';
import Corona from './Corona';

const corona =  {
    display:'flex'
}

const box = {
    padding: '2em',
    border: '2px #e8e8e8 solid',
    borderRadius: '5%',
    minWidth:'7em'
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false,
            companyName:'New Workout Studio',
            error : null,
            errorInfo: null,
            data:null
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

    componentWillMount() {
        fetch(
            'https://toibnews.timesofindia.indiatimes.com/ncov19/india_states_data.json',{
                method: 'get'
            }
        )
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({
                data:data
            },
            () => {
                console.log(data);
            })
        })
            
    }

    getCoronaUpdate() {
        return this.state.data.state_wise
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

        // if(this.state.data && this.state.data.state_wise) {
        //     return(
        //         <div className='corona' style={corona}>
        //             {(this.state.data.state_wise).map((states,index) => {
        //                 return (
        //                     <div className="box" style={box}>
        //                             <h2>{states.State}</h2>
        //                             <h4>Confirmed : {states.Confirmed} </h4>
        //                             <h4>Deaths : {states.Deaths} </h4>
        //                         </div>
        //                 )
        //             })
        //         }
        //         </div>
        //     )
        // }

        return (
            <>
            {/* <EmailForm />
            <SignIn companyName = {this.state.companyName} forgotPassword = {this.forgotPassword}/>; */}
            {this.state.data && this.state.data.state_wise ?
            <Corona data={this.state.data}/> : 'Loading...'
            }
            </>
        ) 
            
    }
}

export default App;