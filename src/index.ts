import { Wallet, Transaction } from './classes'

export default class Voltacoin {
    authorization: string

    wallets: Wallet
    transactions: Transaction

    constructor(authorization: string) {
        this.authorization = authorization
        
        this.wallets = new Wallet(authorization)
        this.transactions = new Transaction(authorization)
    }
}