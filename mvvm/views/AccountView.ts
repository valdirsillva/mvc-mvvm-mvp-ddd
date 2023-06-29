import { Request, Response } from 'express'
import { AccountViewModel } from '../viewmodels/AccountViewModel'

export class AccountView {
    private accountViewModel: AccountViewModel;

    constructor(accountViewModel: AccountViewModel) {
        this.accountViewModel = accountViewModel;
    }

    public accountRender(req: Request, res: Response) {
        const balance = this.accountViewModel.getBalance()
        const creditLimit = this.accountViewModel.getCreditLimit()
        const transaction = this.accountViewModel.getTransactions()
        // const client = this.accountViewModel.getClient()
        res.json({ balance, creditLimit, transaction })
    }

    public setTransaction(req: Request, res: Response) {
        const { accountNumber, type, value } = req.body
        try {
            if (type === 'debito') {
                const success = this.accountViewModel.debit(accountNumber, value)

                if (!success) {
                    return res.status(400).json({ message: "Insufficient balance!" })
                }
            } else {
                this.accountViewModel.deposit(accountNumber, value)
            }

            const balance = this.accountViewModel.getBalance()
            const creditLimit = this.accountViewModel.getCreditLimit()
            const transaction = this.accountViewModel.getTransactions()
            res.json({ balance, creditLimit, transaction })

        } catch (err) {
            console.log(err)
        }
    }
}