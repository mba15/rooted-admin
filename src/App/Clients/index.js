import React, { Component } from "react";
import { connect } from "react-redux";
import { clientList, select } from "../../redux/clientContact";
import { Table } from 'semantic-ui-react';
import HeaderBanner from "./HeaderBanner";
import ClientList from "./ClientsList";

class Clients extends Component {

    componentDidMount() {
        this.props.clientList();
        
    }
    
    handleSelect = (id) => {
        this.props.select(id)
    }
    
    render() {
        let loading = this.props.loading;
       console.log(this.props);
        return (
            !loading ? 
            <div>
                <HeaderBanner />
                <Table>
                    <Table.Header>
                        <Table.Row className="table-header">
                            <Table.HeaderCell width={2}>First Name</Table.HeaderCell>
                            <Table.HeaderCell width={2}>Last Name</Table.HeaderCell>
                            <Table.HeaderCell width={2}>Phone</Table.HeaderCell>
                            <Table.HeaderCell width={2}>Email</Table.HeaderCell>
                            <Table.HeaderCell>Comments</Table.HeaderCell>
                            <Table.HeaderCell> Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.clientContact.data.map((client) => {
                            return ( 
                                <ClientList 
                                    key={client._id} 
                                    select={this.handleSelect} 
                                    {...client} 
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



export default connect(state => state, { clientList, select })(Clients);