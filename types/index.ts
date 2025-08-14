// Base types for the application
export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  created_at?: Date;
  updated_at?: Date;
}

// Generic document interface
export interface BaseDocument {
  id: string;
  created_at?: Date;
  updated_at?: Date;
}