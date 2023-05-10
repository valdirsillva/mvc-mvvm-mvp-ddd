import express from "express";
import { Message } from "./models/Message";
import { MessageView } from "./views/MessageView";
import { MessageController } from "./controllers/MessageController";

const app = express()
app.use(express.json())

const message = new Message(1, 'Valdir', 'Bem-vindo ao desafio de arquitetura de software!', new Date)
const messageView = new MessageView()
const messageController = new MessageController(message, messageView)

app.get('/message', messageController.getMessages.bind(messageController))

app.listen(3000, () => {
    console.log('Server running')
})