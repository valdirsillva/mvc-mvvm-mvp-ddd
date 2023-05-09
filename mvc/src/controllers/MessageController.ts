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

    }

}