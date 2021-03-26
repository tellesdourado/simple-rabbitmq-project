import { Channel, Connection, connect, GetMessage } from "amqplib";

export class RabbitMQService {
  private client: Connection;
  private channel: Channel;

  constructor(private uri?: string) {
    this.uri = `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@${process.env.RABBITMQ_URL}:${process.env.RABBITMQ_PORT}`;
  }

  async start(): Promise<void> {
    this.client = await connect(this.uri);
    this.channel = await this.client.createChannel();
    return;
  }

  async putMessageInQueue(topic: string, message: string): Promise<boolean> {
    await this.channel.assertQueue(topic);
    return this.channel.sendToQueue(topic, Buffer.from(message));
  }

  async getMessageInQueue(
    topic: string,
    quantity: number = 5
  ): Promise<string[]> {
    const messages: string[] = [];

    await this.channel.assertQueue(topic, {
      durable: true,
    });

    let interator = 1;
    while (interator <= quantity) {
      const message = await this.channel.get(topic);
      if (message) {
        messages.push(JSON.parse(message.content.toString()));
      }
      interator++;
    }
    return messages;
  }
}
