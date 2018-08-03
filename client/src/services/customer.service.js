import Resources from "./resources";


const create = (customer) => {
    return fetch(`${Resources.domain}/customer`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(customer), // body data type must match "Content-Type" header
    }).then(response => response.json())
}

const update = (id, customer) => {
    return fetch(`${Resources.domain}/customer/${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(customer), // body data type must match "Content-Type" header
    })
}

const get = (id) => {
    return fetch(`${Resources.domain}/customer/${id}`).then(response => response.json());
}


const getPrograms = (id) => {
    return fetch(`${Resources.domain}/customer/${id}/program`).then(response => response.json());
}


export default { create, get, update, getPrograms };