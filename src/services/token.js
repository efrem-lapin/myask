class Token {
    static token = ""

    static setToken(token) {
        this.token = token;
    }

    static getToken() {
        return this.token;
    }
}

export default Token;