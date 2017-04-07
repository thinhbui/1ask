export const types = {
    AGAIN: 'AGAIN',
    PASS: 'PASS',
    TIMEMILESTONE: 'TIMEMILESTONE',
    UPDATEUSER: 'USER',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    ANSWERING: 'ANSWERING',
    FIRST: 'FIRST'
}

export const actionCreators = {
    rerun: () => {
        return { type: types.AGAIN }
    },
    setFirst: () => {
        return { type: types.FIRST }
    },
    pass: () => {
        return { type: types.PASS }
    },
    setTimeMilestone: (date) => {
        return { type: types.TIMEMILESTONE, payload: date }
    },
    updateUser: (user) => {
        return { type: types.UPDATEUSER, payload: user }
    },
    loginActions: (user) => {
        return { type: types.LOGIN, payload: user }
    },
    answering: (isAnswering) => {
        return { type: types.ANSWERING, payload: isAnswering }
    }
    ,
    logout: () => {
        return { type: types.LOGOUT, }
    }

}
const initialState = {
    isFirst: true,
    isPass: false,
    timeMilestone: new Date(),
    isLogin: false,
    isAnswering: false,
    user: null
}

export const reducer = (state = initialState, action) => {
    const { isFirst, isPass, waitingTime, isLogin, isAnswering } = state
    const { type, payload } = action
    switch (type) {
        case types.AGAIN: {
            return {
                ...state,
                isFirst: false,
            }
        }
        case types.FIRST: {
            return {
                ...state,
                isFirst: true,
            }
        }
        case types.PASS: {
            return {
                ...state,
                isPass: true,
            }
        }
        case types.TIMEMILESTONE: {
            return {
                ...state,
                timeMilestone: payload,
            }
        }
        case types.LOGIN: {
            return {
                ...state,
                isLogin: true,
                user: payload
            }
        }
        case types.LOGOUT: {
            return {
                ...state,
                isLogin: false,
                user: null
            }
        }
        case types.ANSWERING: {
            return {
                ...state,
                isAnswering: payload,
            }
        }
    }
    return state
}
