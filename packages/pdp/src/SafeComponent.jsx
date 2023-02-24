import React from 'react'

export default class SafeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={hasError:false}
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    componentDidCatch(){

    }
    render(){
        if(this.state.hasError){
            return <h1>Composant par défaut lancé au cas où le module HEADER par exemple, est en arrêt.....</h1>
        }
        return this.props.children
    }
}