import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { removeContact } from "../../../redux/clientContact";

class ClientsList extends Component {
    constructor(props) {
        super(props);
        const{ _id } = this.props;
        this.state = {
            inputs: {
                isSelected: false,
            },
            key: _id
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e, _id) {
        console.log("e is: " + e, "and _id is: " + _id);
        e.preventDefault();
        this.props.removeContact(_id);
    }
    render() {
    
        
        return (
            <Table.Row className="contact-row">
                <Table.Cell><Link className="contact-link" to={`/client/${this.props._id}`}>{this.props.firstName}</Link></Table.Cell>
                <Table.Cell>{this.props.lastName}</Table.Cell>
                <Table.Cell>{this.props.phone}</Table.Cell>
                <Table.Cell>{this.props.email}</Table.Cell>
                <Table.Cell>{this.props.comments}</Table.Cell>
                <Table.Cell >
                    <Button basic color="black"
                    onClick={(e) => {this.handleSubmit(e, this.props._id)} }
                    name="isSelected"> Remove </Button>
                </Table.Cell>
            </Table.Row>
        )
    }

}
export default connect(state => state, { removeContact })(ClientsList);
