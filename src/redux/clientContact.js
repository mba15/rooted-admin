import axios from "axios";
const contactUrl = "http://localhost:8080/api/contacts/";

export const newClientContact = (id, contactLog) => {

    return (dispatch) => {
        axios.post(contactUrl + id +"/contactlog", contactLog)
            .then(response => {
                dispatch({ 
                    type: "ADD_CONTACT", 
                    client: response.data,
                    loading: false
                });
            })
            .catch((err) => {
                console.error(err);
                return err;
            })
    }

}


export const clientList = (clients) => {
    return (dispatch) => {
        axios.get(contactUrl)
            .then(response => {
                dispatch({ type: "GET_CLIENTS", data: response.data, loading: true})
                    
            })
            .catch((err) => {
                console.error(err);
                return err;
            })
    }
}

export const clientView = (id) => {

    return (dispatch) => {
        axios.get(contactUrl + id)
            .then(response => {
                
                dispatch({
                    type: "GET_CLIENT", 
                    client: response.data, 
                    loading: false
                });
            })
            .catch((err) => {
                console.error(err)
                return err;
            })
    }
}
export const removeContact = (id) => {
    return (dispatch) => {
        axios.delete(contactUrl + id)
            .then(response => {
                console.log("This is the response " + response)
                dispatch({
                    type: "DELETE",
                    id: id,
                    
                })
            })
            .catch((err) => {
                console.error(err)
                return err;
            })
    }
    
}

export const select = (id) => {
    return {
        type: "SELECT", 
        id
    }
}


const clientsReducer = (prevState = {data: [], currentClient: {}, loading: true, clientLoading: true}, action) => {
    switch (action.type) {
        case "GET_CLIENTS":
            return {
                ...prevState,
                data: action.data,
                loading: false
            };
        case "GET_CLIENT":
            return {
                ...prevState,
                currentClient: action.client,
                clientLoading: false
            };
        case "ADD_CONTACT":
            return { 
                ...prevState, 
                currentClient: action.client
                
            }
        case "SELECT":
            const clients = {...prevState}
            const allClients  = clients.data
            let currentClient;
            for(var i = 0; i < allClients.length; i++){
                if(allClients[i]._id === action.id){
                    currentClient = allClients[i];
                }
            }
            return {
                ...prevState,
                currentClient
            }
        case "DELETE": 
            return { 
                ...prevState,
                data: prevState.data.filter((client, i) => {
                    return client._id !== action.id;
                })
        }
        default:
            return prevState;
    }

}


export default clientsReducer;