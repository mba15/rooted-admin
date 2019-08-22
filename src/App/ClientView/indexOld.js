import React, {Component} from "react";
import {connect} from "react-redux";
import {clientView} from "../../redux/clientContact";
import ClientHeader from "./ClientHeader";
import AddForm from "../shared/AddForm";

class ClientView extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        console.log("client view props check")
        console.log(this.props);
        this.props.clientView(this.props._id);
    }
    handleClick(){

    }

    render(){
        let {firstName, lastName, email, phone, comments, _id } = this.props;
        return (
            <div>
               <ClientHeader />
               <div> 
                    Client Info:
                    <p label="First Name:">{firstName} First </p>
                    <p label="Last Name:">{lastName} Last </p>
                    <p label="Phone Number:">{phone}  Phone</p>
                    <p label="Email Address:">{email} Email </p>
                    <p label="Comments:">{comments} Comments</p>
                </div>
                {/* <AddForm /> */}
            </div>
        )
    }
}

export default connect(state => state.clientContact.currentClient, { clientView}) (ClientView);