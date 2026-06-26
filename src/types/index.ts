export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'user' | 'admin';
  createdAt: string;
  emailVerified: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  category: string;
  language: 'rw' | 'en' | 'fr';
  createdAt: string;
}

export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: string;
  language: 'rw' | 'en' | 'fr';
}

export interface RoadSign {
  id: string;
  title: string;
  category: 'regulatory' | 'warning' | 'information' | 'guidance';
  imageUrl: string;
  description: string;
  language: 'rw' | 'en' | 'fr';
}

export interface ExamSession {
  id: string;
  userId: string;
  startedAt: string;
  endedAt?: string;
  score?: number;
  completed: boolean;
}

export interface ExamResult {
  id: string;
  userId: string;
  score: number;
  percentage: number;
  passed: boolean;
  date: string;
}
