import React from 'react';
import './bussiness.css';

class Bussiness extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.changeBussiness = this.changeBussiness.bind(this);
    }

    changeBussiness(newBussiness){
        this.setState({
            src: newBussiness.src,
            name: newBussiness.name,
            p1: newBussiness.p1,
            p2: newBussiness.p2,
            p3: newBussiness.p3,
            p4: newBussiness.p4,
            p5: newBussiness.p5,
            p6: newBussiness.p6,
        })
    }

    render() {
        return(
            <div className="bussinessContainer">
                <img src={this.props.src} alt="business"/>
                <h5>{this.props.name}</h5>
                <div className="infoContainer">
                    <div className="leftInfo">
                        <p>{this.props.p1}</p>
                        <p>{this.props.p2}</p>
                        <p>{this.props.p3}</p>
                    </div>
                    <div className="rightInfo">
                        <p>{this.props.p4}</p>
                        <p>{this.props.p5}</p>
                        <p>{this.props.p6}</p>
                    </div>
                </div>
            </div>
        )
    }


}

export default Bussiness;