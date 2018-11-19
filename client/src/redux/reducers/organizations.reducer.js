const organizations = (state = { current: {}, list: [] }, action) => {
    switch (action.type) {
        case 'SET_ORGANIZATIONS':
            return {
                ...state,
                list: [
                    ...action.organizations
                ],
            }
        case 'SET_CURRENT_ORGANIZATION':
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

export default organizations