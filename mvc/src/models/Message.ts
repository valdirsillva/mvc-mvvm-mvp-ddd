interface MessageProps {
    uuid: number;
    name: string;
    message: string;
    createdAt: Date;
}

interface MessagesData {
    messages: MessageProps
}

export class Message {
    private uuid: number;
    private name: string;
    private message: string;
    private createdAt: Date;
    private messages: MessagesData[];

    constructor(uuid: number, name: string, message: string, createdAt: Date) {
        this.uuid = uuid;
        this.name = name;
        this.message = message;
        this.createdAt = new Date();

        this.messages = []
    }

    public insertMessage(): boolean {
        if (this.name != '' && this.message.length > 0) {
            let newMessage: MessageProps = {
                uuid: this.uuid,
                name: this.name,
                message: this.message,
                createdAt: this.createdAt
            }

        }
        this.messages.push(newMessage)

        return true;
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

    public getMessage(): MessagesData[] {
        return this.messages;
    }
}