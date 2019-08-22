import React, { Component } from 'react';
import { connect } from "react-redux";
import { newClientContact, clientView } from "../../redux/clientContact.js";
import { Form, Button, TextArea } from 'semantic-ui-react';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                typeOfContact: "phone",
                reason: "initial",
                note: ""
            },
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                type: "",
                reason: "",
                notes: ""
            }
        })
    }
    handleSubmit(e, id) {
        e.preventDefault();
        this.props.newClientContact(id, this.state.inputs);
        //this.clearInputs();
    }
    
    render() {

        let { note, reason, typeOfContact } = this.state.inputs;
        const reasons = [
            { key: "i", text: "Initial", value: "Initial" },
            { key: "f", text: "Follow Up", value: "Follow Up" },
            { key: "s", text: "Scheduling", value: "Scheduling" },
            { key: "b", text: "Billing", value: "Billing" }
        ]

        return (
            <div>
                <div className="contact-form">
                    <div className="form-overlay">
                        <Form onSubmit={(e) => { this.handleSubmit(e, this.props.clientContact.currentClient._id, this.props.clientContact) }}>
                            <div className="form-group">
                                <Form.Group inline widths={1}>
                                    <label> Type of Contact </label>
                                    <label htmlFor="">Email: <input  onChange={this.handleChange} checked={typeOfContact === "email"} value="email" name="typeOfContact" type="radio" placeholder="Email" /></label>
                                    <label htmlFor="">Phone: <input  onChange={this.handleChange} checked={typeOfContact === "phone"} value="phone" name="typeOfContact" type="radio" placeholder="Phone" /></label>
                                </Form.Group>
                                <Form.Select label="Reason for Contact" type="select" options={reasons} placeholder="initial" />
                                <Form.TextArea width={13} label="Notes" control={TextArea} className="input comment" onChange={this.handleChange} value={note} name="note" type="text" placeholder="Notes" />
                                <Button onChange={this.handleChange} className="submit">Send</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return { clientContact: state.clientContact }
}

export default connect(mapStateToProps, { newClientContact, clientView })(AddForm);