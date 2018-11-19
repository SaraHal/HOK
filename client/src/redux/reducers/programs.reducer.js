const programs = (state = { current: {}, list: [] }, action) => {
    switch (action.type) {
        case 'SET_PROGRAMS':
            return {
                ...state,
                list: [
                    ...action.programs
                ],
            }
        default:
            return state;
    }
}

export default programs