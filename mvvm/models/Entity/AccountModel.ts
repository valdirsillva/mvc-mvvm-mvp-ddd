import { Client } from './ClientModelInterface';
import { Transaction } from './TransactionModel'

export class AccountModel {
    private client: Client;
    private accountNumber: string;
    private balance: number;
    private creditLimit: number;
    private transactions: Transaction[];

    constructor(account: string, client: Client, balance: number, creditLimit: number) {
        this.client = client;
        this.balance = balance;
        this.accountNumber = account;
        this.creditLimit = creditLimit;
        this.transactions = [];
    }

    public debit(account: string, value: number): boolean {
        const balanceWithLimit = this.balance + this.creditLimit;
        if (balanceWithLimit - value < 0) {
            return false;
        }

        this.balance -= value
        const transaction: Transaction = { type: "debito", value, data: new Date() }
        this.transactions.push(transaction)
        return true;
    }

    public deposit(account: string, value: number): boolean {
        if (value < 0) {
            return false;
        }

        this.balance += value
        const transaction: Transaction = { type: "deposito", value, data: new Date() }
        this.transactions.push(transaction)
        return true;
    }

    public getAccountNumber(): string {
        return this.accountNumber;
    }

    public getClient(): Client {
        return this.client;
    }

    public getBalance(): number {
        return this.balance;
    }

    public getCreditLimit(): number {
        return this.creditLimit;
    }

    public getTransactions(): Transaction[] {
        return this.transactions;
    }
}