import React from 'react';
import './bussinessList.css';
import Bussiness from "../bussiness/bussiness";


class BussinessList extends React.Component{

    render() {
        return(
            <div className="bussinessListContainer">
                {this.props.list.map(obj => <Bussiness
                                                src={obj.src}
                                                name={obj.name}
                                                p1={obj.p1}
                                                p2={obj.p2}
                                                p3={obj.p3}
                                                p4={obj.p4}
                                                p5={obj.p5}
                                                p6={obj.p6}
                                             />)}
            </div>
        )
    }


}

export default BussinessList;