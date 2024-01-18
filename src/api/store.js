class Store {
    setToken(token) {
        sessionStorage.setItem('jwtToken', token);
    }

    getToken() {
        return sessionStorage.getItem('jwtToken');
    }


    removeToken() {
        sessionStorage.removeItem('jwtToken');
    }

    isTokenExpired() {
        const token = this.getToken();
        if (token) {
            const decodedToken = this.parseJwt(token);
            if (decodedToken.exp * 1000 < Date.now()) {
                return true; // Token is expired
            }
        }
        return false; // Token is not expired or not present
    }

    parseJwt(token) {
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split("")
                .map(function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );
        console.log('Decoded JWT Token:', jsonPayload);

        return JSON.parse(jsonPayload);
    }
}

export default new Store();
