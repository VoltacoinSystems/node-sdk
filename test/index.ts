import Voltacoin from '../src'

(async () => {
    const voltacoin = new Voltacoin('')

    const mine = await voltacoin.transactions.mine()

    console.log('0. voltacoinTransactionsMine: ', mine)

    const wallet = 
        await voltacoin.wallets.get({ address: '' })

    console.log('1. voltacoinWalletsGet: ', wallet)
    
    const payment =
        await voltacoin.transactions.payments.get({
            id: ''
        })

    console.log('2. voltacoinTransactionsPaymentsGet: ', payment)

    const paymentCreate =
        await voltacoin.transactions.payments.create({
            amount: 2,
            recipientAddress: ''
        })

    console.log('3. voltacoinTransactionsPaymentsCreate: ', paymentCreate)

    const myWallet = await voltacoin.wallets.login()

    console.log('4. voltacoinWalletsLogin: ', myWallet)
})()