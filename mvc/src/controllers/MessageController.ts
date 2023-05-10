import { Request, Response } from "express";
import { Message } from "../models/Message";
import { MessageView } from "../views/MessageView";

export class MessageController {
    private message: Message;
    private messageView: MessageView;

    constructor(message: Message, messageView: MessageView) {
        this.message = message;
        this.messageView = messageView;
    }

    public getMessages(req: Request, res: Response) {
        const uuid = this.message.getUuid()
        const name = this.message.getName()
        const message = this.message.getMessage()
        const createdAt = this.message.getCreatedAt()
        this.messageView.render(res, { uuid, name, message, createdAt })
    }

}