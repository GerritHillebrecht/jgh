import { User } from '@prisma/client';

export interface SafeUser
  extends Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
}
