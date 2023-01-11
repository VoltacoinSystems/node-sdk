import { RequestManager } from '../managers/RequestManager'

export class Wallet {
    requests: RequestManager

    constructor(authorization: string) {
        this.requests = new RequestManager(authorization)
    }

    async get(data: { address: string }) {
        return await this.requests.getWallet(data.address)
    }

    async login() {
        return await 
            this.requests.postWalletAuthToken(this.requests.authorization)
    }
}