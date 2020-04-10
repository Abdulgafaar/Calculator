import React, { Component } from 'react'
import ResultComponent from "./src/components/ResultComponent"
import KeyPadComponent from "./src/components/KeyPadComponent"


class App extends Component  {
    constructor(props){
        super()

        this.state = {
            result : ""
        }

    }
    calculator = () =>{
        this.setState({

            result : (eval(this.state.result)|| "") + ""
        })


    }

    reset = () => {
        this.setState({
            result : ""
        })
    }


    backspace = () => {
        try{
            this.setState({
            result : this.state.slice(0, -1)
             })

        }catch(e){
            this.setState({
                result: "error"
            })
        }
        
    }

    render(){
        return(
            <div className="calculator-body">
                <h1>A simple calculate...</h1>
                <ResultComponent result={this.state.result}/>
                <keyPayComponent onClick={this.onClick}/>

            </div>
        )
    }
}




export default App
