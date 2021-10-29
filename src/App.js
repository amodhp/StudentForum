import React,{Component} from "react";
import MainScreen from "./components/MainScreen";
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from "./reducers";


class App extends Component {
   
    render(){
        const store=createStore(reducers,{},applyMiddleware(ReduxThunk))
        return(
            <Provider store={store}> 
            <MainScreen/>
            </Provider>
        )
    }
}

export default App