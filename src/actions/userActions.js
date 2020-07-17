const login = (username) => {
    return {
        type: "LOGIN",
        payload: username
    }
}

const logout = () => {
    return {
        type: "LOGOUT"
    }
}

export default {
    login,
    logout
}