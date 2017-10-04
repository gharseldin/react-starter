import React from 'react'
import Button from './bootstrap/button'

export default class App extends React.Component{


    render(){
        return (
            <div className="jumbotron jumbotron-fluid text-center">
            <h1>Testing React User Interfaces</h1>
                <p>
                    with BootStrap and SASS
                </p>
                <p>
                <Button className="btn-primary" href="http://www.google.com" target="_blank"/>
                <Button className="btn-danger" target="_blank"/>
                </p>
                <Button className="btn-primary-outline btn-lg " target="_blank"/>
            </div>
        )
    }
}