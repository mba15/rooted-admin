import React, { Component } from "react";
import { connect } from "react-redux";
import { newClientContact, clientView } from "../../../redux/clientContact";
import { Table, Button } from 'semantic-ui-react';


class ContactLog extends Component {
    constructor(props){
        super(props);

    }
    
    render() {
        let loading = this.props.loading;
        console.log(this.props);
        return (
            !loading ? 
            
                <Table.Row className="contact-row">
                    <Table.Cell>{this.props.typeOfContact}</Table.Cell>
                    <Table.Cell>{this.props.reason}</Table.Cell>
                    <Table.Cell>{this.props.note}</Table.Cell>
                    <Table.Cell>{this.props.results}</Table.Cell>
                </Table.Row>

            
            : <div> Loading.... </div>
        )
    }
}



export default connect(state => state, { clientView, newClientContact })(ContactLog);
