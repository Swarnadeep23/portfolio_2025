import 'next-auth';
import { User } from '@clerk/nextjs/dist/types/server';

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}

declare module '@clerk/nextjs/server' {
  interface GetAuthReturn {
    userId: string | null;
    sessionId: string | null;
    getToken: (options?: any) => Promise<string | null>;
  }
} 