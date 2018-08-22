import Resources from "./resources";


const create = (project) => {
    return fetch(`${Resources.domain}/project`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(project), // body data type must match "Content-Type" header
    }).then(response => response.json())
}

const update = (id, project) => {
    return fetch(`${Resources.domain}/project/${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(project), // body data type must match "Content-Type" header
    })
}

const get = (id) => {
    return fetch(`${Resources.domain}/project/${id}`).then(response => response.json());
}


export default { create, get, update };