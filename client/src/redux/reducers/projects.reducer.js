const projects = (state = { current: {}, list: [] }, action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return {
                ...state,
                list: [
                    ...action.projects
                ],
            }
        case 'SET_CURRENT_PROJECT':
            return {
                ...state,
                current: {
                    ...action.current
                },
            }
        default:
            return state;
    }
}

export default projects