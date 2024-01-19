class Store {
    setToken(token) {
        // console.log("addingToken...", token)
        sessionStorage.setItem('jwtToken', token);
    }

    getToken() {
        // console.log("gettingToken...", sessionStorage.getItem('jwtToken'))
        return sessionStorage.getItem('jwtToken');
    }

    setUser(token) {
        const user = this.parseJwt(token);
        localStorage.setItem("userId", JSON.stringify(user));
    }

    getUser() {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }

    removeToken() {
        sessionStorage.removeItem('jwtToken');
    }

    isTokenExpired() {
        const token = this.getToken();
        if (token) {
            const decodedToken = this.parseJwt(token);
            if (decodedToken.exp * 1000 < Date.now()) {
                console.log("TOKEN EXPIRED")
                return true;
            }
        }
        console.log("TOKEN NOT")
        return false;
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
