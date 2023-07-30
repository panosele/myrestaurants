import React from 'react';
import './bussinessList.css';
import Bussiness from "../bussiness/bussiness";

class BussinessList extends React.Component{
    constructor(props) {
        super(props);
        this.LIST = [];
        this.createList = this.createList.bind(this);
    }

     newB = {
        url: "",
        name: "NEWNAME",
        p1: "1",
        p2: "2",
        p3: "3",
        p4: "4",
        p5: "5",
        p6: "6",
    };
    createList(){
        for (let i=0 ; i<20 ; i++){
            this.LIST.push(<Bussiness url={this.newB.url}
                                      name={this.newB.name}
                                      p1={this.newB.p1}
                                      p2={this.newB.p2}
                                      p3={this.newB.p3}
                                      p4={this.newB.p4}
                                      p5={this.newB.p5}
                                      p6={this.newB.p6}
                            />);
        }
        return this.LIST
    }

    render() {
        return(
            <div className="bussinessListContainer">
                {this.createList()}
            </div>
        )
    }


}

export default BussinessList;