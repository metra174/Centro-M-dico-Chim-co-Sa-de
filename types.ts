
import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  category: 'Atendimento Imediato' | 'Serviços Básicos' | 'Diagnóstico e Apoio' | 'Consultas e Especialidades';
  description?: string;
  icon: ReactNode;
}

export interface Benefit {
  id: string;
  title: string;
  icon: ReactNode;
}
