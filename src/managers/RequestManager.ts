import axios from 'axios'

export interface RequestResponse {
    data?: any
    code?: string
    success: boolean
}

export class RequestManager {
    baseUrl: string
    authorization: string

    constructor(authorization: string) {
        this.authorization = authorization
        this.baseUrl = 'https://core.voltacoin.repl.co'
    }

    async getWallet(address: string): Promise<RequestResponse> {
        const response = 
            await axios.get(`${this.baseUrl}/wallets/${address}`)

        return response.status === 200
            ? { success: true, data: response.data.data }
            : { success: false, code: response.data.code }
    }

    async postWallet(password: string): Promise<RequestResponse | void> {
        if (password.length < 8) {
            // TODO: Errors
            return console.log(
                '[Voltacoin SDK] Error: Wallet password must have at least 8 characters. Request will not be sent.'
            )
        }

        const response = 
            await axios.post(`${this.baseUrl}/wallets`, { password })

        return response.status === 200
            ? { success: true }
            : { success: false, code: response.data.code }
    }

    async postWalletAuthCredentials(
        data: { 
            address: string, 
            password: string 
        }
    ): Promise<RequestResponse> {
        const response = 
            await axios.post(`${this.baseUrl}/wallets/auth`, data)

        return response.status === 200
            ? { success: true, data: response.data.data }
            : { success: false, code: response.data.code }
    }

    async postWalletAuthToken(token: string): Promise<RequestResponse> {
        const response = 
            await axios.post(`${this.baseUrl}/wallets/tokenauth`, { token })

        return response.status === 200
            ? { success: true, data: response.data.data }
            : { success: false, code: response.data.code }
    }

    async postMineTransaction(): Promise<RequestResponse | void> {
        const response = 
            await axios.post(`${this.baseUrl}/transactions/mine`, {}, {
                headers: {
                    authorization: this.authorization
                }
            })

        return response.status === 200
            ? { success: true }
            : { success: false, code: response.data.code }
    }

    async getPaymentTransaction(data: { id: string }) {
        const { id } = data

        const response = 
            await axios.get(`${this.baseUrl}/transactions/${id}`)

        return response.status === 200
            ? { success: true, data: response.data.data }
            : { success: false, code: response.data.code }
    }

    async postPaymentTransaction(data: { recipientAddress: string, amount: number }) {
        data['to_address'] = data.recipientAddress
        
        const response = 
            await axios.post(`${this.baseUrl}/transactions/pay`, data, {
                headers: {
                    authorization: this.authorization
                }
            })

        return response.status === 200
            ? { success: true }
            : { success: false, code: response.data.code }
    }
}