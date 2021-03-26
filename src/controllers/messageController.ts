import { Request, Response } from "express";
import { RabbitMQService } from "../services/RabbitMQService";

const messageController = {
  async index(req: Request, res: Response) {
    try {
      const rmq = new RabbitMQService();
      await rmq.start();
      const messages = await rmq.getMessageInQueue(process.env.TOPIC);
      return res.status(200).send({ messages });
    } catch (e) {
      return res.status(400).send({ error: e });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const rmq = new RabbitMQService();
      await rmq.start();
      const status = await rmq.putMessageInQueue(
        process.env.TOPIC,
        JSON.stringify(req.body)
      );
      return res.status(200).send({ status });
    } catch (e) {
      return res.status(400).send({ error: e });
    }
  },
};

export { messageController };
