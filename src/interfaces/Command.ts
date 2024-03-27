import { Message } from 'discord.js';

export interface Command {
    name: string;
    execute(message: any, args?: string[]): Promise<void>;
  }