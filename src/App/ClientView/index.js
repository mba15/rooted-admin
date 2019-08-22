import React, { Component } from "react";
import { connect } from "react-redux";
import { clientView, newClientContact } from "../../redux/clientContact.js";
import ClientHeader from "./ClientHeader";
import ContactLog from "./ContactLog";
import AddForm from "./AddForm"
import { Table} from 'semantic-ui-react';


class ClientView extends Component {


    componentDidMount() {
        this.props.clientView(this.props.match.params.id);
        //this.props.newClientContact(this.props.match.params.id)
    }
    


    render() {
        let {clientLoading, currentClient} = this.props;
        console.log(this.props.currentClient)
        return (
            !clientLoading ? 
            <div>
                <ClientHeader />
                <div className= "client-info-section">
                    <div className="current-client"> 
                        <h1>    Client Info </h1>
                        <h3 label="First Name:"> First Name: <span>{currentClient.firstName}</span>  </h3> 
                        <h3 label="Last Name:"> Last Name:  <span> {currentClient.lastName}  </span></h3> 
                        <h3 label="Phone Number:">Phone:   <span>{currentClient.phone}  </span> </h3>
                        <h3 label="Email Address:">Email:  <span>{currentClient.email} </span> </h3> 
                        <h3 label="Comments:"> Comments:   </h3> <span>{currentClient.comments}</span>
                    </div>
                    <AddForm id={currentClient._id}/>
                </div>
                <Table>
                    <Table.Header className="table-header">
                        <Table.Row className="header-row">
                            <Table.HeaderCell  width={4}>Contact Type</Table.HeaderCell>
                            <Table.HeaderCell  width={4}>Reason</Table.HeaderCell>
                            <Table.HeaderCell  width={5}>Notes</Table.HeaderCell>
                        
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {this.props.currentClient.contactLog.map((contact) => {
                            return ( 
                                <ContactLog 
                                key={this.props._id}
                                {...contact} 
                                />
                                   
                        
                            )
                        })}
                            
                    </Table.Body> 
                </Table>
            </div>
            : <div> Loading.... </div>
        )
    }
}



export default connect(state => state.clientContact, { clientView, newClientContact })(ClientView);
