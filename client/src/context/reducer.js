export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                alert: "",
                loading: false,
                user: action.payload
            }
        case 'LOGOUT':
            localStorage.setItem('token', "")
            return {
                ...state,
                alert: "",
                loading: false,
                user: null
            }
        case 'LOADING':
            return {
                ...state,
                alert: "",
                loading: true
            }
        case 'ALERT':
            return {
                ...state,
                loading: false,
                user: null,
                alert: action.payload
            }
        case 'CLEAR_ALERT':
            return {
                ...state,
                alert: ""
            }

        default:
            return state
    }
}