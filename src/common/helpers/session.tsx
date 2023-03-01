

export const getTokenFromSession = () => {
    const jwt_token = localStorage.getItem('AUTH_USER_TOKEN');
    console.log('getTokenFromSession', jwt_token)
    if (jwt_token === null) {
        return '2ccb96dd-a4da-402f-b8d0-dc23f87e6655';
    } else {
        return jwt_token;
    }
}

