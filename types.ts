import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Episode {
  id: number;
  title: string;
  thumbnail: string;
  lesson: string;
  duration: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}