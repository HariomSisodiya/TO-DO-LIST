import { Component } from "react";

export default class Header extends Component{
    render(){
        return<>
            <div className="contrainer-fluid bg-danger p-1">
                <h1 className="text-center text-white">TO DO LIST</h1>
            </div>
        </>
    }
}