import React, { Component } from 'react'


class Splash extends Component {
    render() {
        return (
            <>
            <div className='splash'>
                <div className='splash-container'>
                    <div className='splash-main'>
                        <h1 className='header'>{this.props.heading ? this.props.heading : 'Up Your Reads'}</h1>
                    </div>
                </div>
            </div>
            </>
        )
    }


}

export default Splash;