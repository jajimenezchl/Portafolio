import React from 'react'

class Header extends React.Component {
    
    render() {

        return (
        <div className="header">

            <ul>
                <li><a href='/'>Inicio</a></li>
                <li><a href='/'>Información</a></li>
                <li><a href='/'>About</a></li>
            </ul>
        </div>
        
        )
    }
    
}

export default Header 