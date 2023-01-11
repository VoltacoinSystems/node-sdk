# Voltacoin Node.js Library

The Voltacoin Node library provides convenient access to the Voltacoin API from
applications written in server-side JavaScript.

## Installation

Install the package with:

```sh
npm install voltacoin --save
```

## Usage

The package needs to be configured with your account's token, which is returned
to you at the moment of creating your account.

```ts
import Voltacoin from 'voltacoin'

const voltacoin = new Voltacoin('TOKEN')

await voltacoin.transactions.mine()
await voltacoin.transactions.payments.create({
    amount: 50000,
    recipientAddress: 'ADDRESS'
})
```
