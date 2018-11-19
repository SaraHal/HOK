const customers = (state = { current: {}, list: [] }, action) => {
    switch (action.type) {
        case 'SET_CUSTOMERS':
            return {
                ...state,
                list: [
                    ...action.customers
                ],
            }
        case 'SET_CURRENT_CUSTOMER':
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

export default customers