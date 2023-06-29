import express from 'express'
import { AccountModel } from './models/Entity/AccountModel'
import { AccountViewModel } from './viewmodels/AccountViewModel'
import { AccountView } from './views/AccountView'

const PORT = 8001
const app = express()
app.use(express.json())

const client = { name: 'Valdir' }
const accountModel = new AccountModel('19001', client, 100, 2000)
const accountViewModel = new AccountViewModel(accountModel)
const accountView = new AccountView(accountViewModel)

app.get("/conta", accountView.accountRender.bind(accountView));
app.post("/transacao", accountView.setTransaction.bind(accountView));
// app.post("/limiteCredito", accountView.setLimitCreditgit.bind(accountView));

app.listen(PORT, () => {
    console.log(`Application running in port: ${PORT}`)
})
