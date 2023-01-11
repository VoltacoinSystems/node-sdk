import { RequestManager } from '../managers/RequestManager'

export class Transaction {
    requests: RequestManager

    constructor(authorization: string) {
        this.requests = new RequestManager(authorization)
    }

    async mine() {
        return this.requests.postMineTransaction()
    }

    payments = {
        get: async (data: { id: string }) => {
            return this.requests.getPaymentTransaction(data)
        },
        create: async (data: { recipientAddress: string, amount: number }) => {
            return this.requests.postPaymentTransaction(data)
        }
    }
}