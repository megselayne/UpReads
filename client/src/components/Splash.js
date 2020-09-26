import React, { Component } from 'react'


class Splash extends Component {
    render() {
        return (
            <>
            <div className='splash'>
                <div className='container-2'>
                    <div className='main'>
                        <h1>{this.props.heading ? this.props.heading : 'Up Your Reads'}</h1>
                    </div>
                </div>
            </div>
            </>
        )
    }


}

export default Splash;