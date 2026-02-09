
export interface Formula {
  id: number;
  expression: string;
  name: string;
  example: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: number;
  image?: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  exp: number;
  level: number;
}

export enum AppTab {
  HOME = 'home',
  LEARN = 'learn',
  PRACTICE = 'practice',
  CHAT = 'chat',
  PROFILE = 'profile'
}
