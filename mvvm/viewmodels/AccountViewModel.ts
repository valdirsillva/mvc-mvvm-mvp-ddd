import { Client } from '../models/Entity/ClientModelInterface'
import { AccountModel } from '../models/Entity/AccountModel'
import { Transaction } from '../models/Entity/TransactionModel'

export class AccountViewModel {
    private accountModel: AccountModel;

    constructor(accountModel: AccountModel) {
        this.accountModel = accountModel;
    }

    public debit(account: string, value: number): boolean {
        return this.accountModel.debit(account, value);
    }

    public deposit(account: string, value: number): boolean {
        return this.accountModel.deposit(account, value)
    }

    public getAccountNumber(): string {
        return this.accountModel.getAccountNumber();
    }

    public getClient(): Client {
        return this.accountModel.getClient()
    }

    public getBalance(): number {
        return this.accountModel.getBalance()
    }

    public getCreditLimit(): number {
        return this.accountModel.getCreditLimit()
    }

    public getTransactions(): Transaction[] {

        return this.accountModel.getTransactions().map((transaction) => {
            return {
                type: transaction.type,
                value: transaction.value,
                data: new Date(transaction.data.getTime())
            }
        })
    }
}