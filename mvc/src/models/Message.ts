interface MessageProps {
    uuid: number | string;
    name: string;
    message: string;
    createdAt: Date;
}

export class Message {
    private uuid: number;
    private name: string;
    private message: string;
    private createdAt: Date;
    private messages: MessageProps[];

    constructor(uuid: number, name: string, message: string, createdAt: Date) {
        this.uuid = uuid;
        this.name = name;
        this.message = message;
        this.createdAt = new Date();
        this.messages = []
    }

    public insertMessage(): boolean {
        let newMessage: MessageProps;

        if (this.name != '' && this.message.trim().length > 0) {
            newMessage = {
                uuid: this.uuid,
                name: this.name,
                message: this.message,
                createdAt: this.createdAt
            }

            this.messages.push(newMessage)
            return true;
        }

        return false
    }

    public getUuid(): number {
        return this.uuid;
    }

    public getName(): string {
        return this.name;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public getMessage(): string {
        return this.message;
    }

    public getMessages() {
        return this.messages;
    }
}