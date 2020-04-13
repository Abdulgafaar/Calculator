import React, { PureComponent, Component } from 'react'


class ResultComponent extends Component{
    constructor(){
        super()
       
    }
    render(){
        return(
            <div className="result">
                <p>{result}</p>

            </div>
        )
    }
    
}

export default ResultComponent