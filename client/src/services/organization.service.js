import Resources, { domain } from './resources';

const create = (organization) => {

    return fetch(`${Resources.domain}/organization`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(organization)

    })
}

const update = (id, organization) => {
    return fetch(`${Resources.domain}/organization/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(organization), // body data type must match "Content-Type" header
    })
}

const get = (id) => {

    return fetch(`${Resources.domain}/organization/${id}`)
        .then(response => response.json());
}

const getList = () => {
    return fetch(`${Resources.domain}/organization`)
        .then(response => response.json());
}

const getCustomers = (id) => {
    return fetch(`${Resources.domain}/organization/${id}/customer`).then(response => response.json());
}

export default { get, getCustomers, getList, create, update };