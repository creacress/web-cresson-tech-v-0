// lib/db.ts
import { prisma } from './prisma';
import path from 'path';

const LOG_PATH = path.join(process.cwd(), 'logs', 'chat-log.json');

export async function saveChatLog(entry: {
    prompt: string;
    response: string;
    userAgent?: string;
    ip?: string;
  }) {
    try {
      await prisma.chatLog.create({
        data: {
          prompt: entry.prompt,
          response: entry.response,
          userAgent: entry.userAgent,
          ip: entry.ip,
        },
      });
    } catch (error) {
      console.error('❌ Erreur Prisma (saveChatLog) :', error);
    }
  }