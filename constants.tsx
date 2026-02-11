
import React from 'react';
import { 
  Stethoscope, 
  HeartPulse, 
  Activity, 
  Baby, 
  Users, 
  Microscope, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Thermometer, 
  Syringe, 
  Pill, 
  Brain, 
  UserPlus,
  Droplets,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Service, Benefit } from './types';

export const IMAGES = {
  logo: 'https://i.imgur.com/me5WeYN.png',
  doctor: 'https://i.imgur.com/yKS6Qca.jpg',
  pamphlet: 'https://i.imgur.com/tJr1wnp.jpg'
};

export const COLORS = {
  primary: '#1e40af', // Blue 800
  secondary: '#2563eb', // Blue 600
  accent: '#eff6ff', // Blue 50
};

export const SERVICES: Service[] = [
  // Atendimento Imediato
  { id: '1', title: 'Urgência', category: 'Atendimento Imediato', icon: <Zap className="w-8 h-8" /> },
  { id: '2', title: 'Emergência', category: 'Atendimento Imediato', icon: <HeartPulse className="w-8 h-8" /> },
  
  // Serviços Básicos de Saúde
  { id: 'b1', title: 'Vacinas', category: 'Serviços Básicos', icon: <Syringe className="w-8 h-8" /> },
  { id: 'b2', title: 'Glicemia', category: 'Serviços Básicos', icon: <Droplets className="w-8 h-8" /> },
  { id: 'b3', title: 'Medição de Pressão Arterial', category: 'Serviços Básicos', icon: <Activity className="w-8 h-8" /> },
  
  // Diagnóstico e Apoio
  { id: 'd1', title: 'Laboratório de Análises Clínicas', category: 'Diagnóstico e Apoio', icon: <Microscope className="w-8 h-8" /> },
  { id: 'd2', title: 'Farmácia Interna', category: 'Diagnóstico e Apoio', icon: <Pill className="w-8 h-8" /> },
  
  // Consultas e Especialidades
  { id: 'c1', title: 'Planeamento Familiar', category: 'Consultas e Especialidades', icon: <Users className="w-8 h-8" /> },
  { id: 'c2', title: 'Consulta Pré-Natal', category: 'Consultas e Especialidades', icon: <Baby className="w-8 h-8" /> },
  { id: 'c3', title: 'Consulta de Clínica Geral', category: 'Consultas e Especialidades', icon: <Thermometer className="w-8 h-8" /> },
  { id: 'c4', title: 'Consulta de Pediatria', category: 'Consultas e Especialidades', icon: <Baby className="w-8 h-8" /> },
  { id: 'c5', title: 'Consulta de Ginecologia / Obstetrícia', category: 'Consultas e Especialidades', icon: <UserPlus className="w-8 h-8" /> },
  { id: 'c6', title: 'Consulta de Especialidade', category: 'Consultas e Especialidades', icon: <Stethoscope className="w-8 h-8" /> },
  { id: 'c7', title: 'Consulta de Psiquiatria', category: 'Consultas e Especialidades', icon: <Brain className="w-8 h-8" /> },
  { id: 'c8', title: 'Medicina Interna', category: 'Consultas e Especialidades', icon: <Activity className="w-8 h-8" /> },
];

export const BENEFITS: Benefit[] = [
  { id: 'b1', title: 'Atendimento humanizado', icon: <Users className="w-10 h-10 text-blue-600" /> },
  { id: 'b2', title: 'Profissionais qualificados', icon: <ShieldCheck className="w-10 h-10 text-blue-600" /> },
  { id: 'b3', title: 'Estrutura moderna', icon: <Activity className="w-10 h-10 text-blue-600" /> },
  { id: 'b4', title: 'Localização acessível', icon: <MapPin className="w-10 h-10 text-blue-600" /> },
];

export const CONTACT_INFO = {
  nif: '5002763001',
  whatsapp: '+244950240554',
  whatsappDisplay: '+244 950 240 554',
  phone: '+244921418585',
  phoneDisplay: '+244 921 418 585',
  email: 'chimucosaude@gmail.com',
  address: 'Viana, Mulenvos, entrada do Millennium, junto à Igreja I.E.C.A',
};
