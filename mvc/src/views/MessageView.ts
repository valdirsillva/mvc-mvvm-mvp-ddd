import { Response } from 'express'

interface MessageData {
    uuid: number;
    name: string;
    message: string;
    createdAt: Date;
}

export class MessageView {
    public render(res: Response, messageData: MessageData) {
        res.json(messageData)
    }
}
