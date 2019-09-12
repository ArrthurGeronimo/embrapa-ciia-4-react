import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example222 Component</div>

                            <div className="card-body">
                                I'm an exaaampleee componente!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example2')) {
    ReactDOM.render(<Example2 />, document.getElementById('example2'));
}
