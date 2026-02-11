
import React, { useEffect, useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  ChevronRight, 
  Menu, 
  X,
  ArrowUp,
  ShieldCheck,
  Zap,
  ExternalLink,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, BENEFITS, CONTACT_INFO, IMAGES } from './constants.tsx';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const groupedServices = SERVICES.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof SERVICES>);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-xl bg-white shadow-sm flex items-center justify-center p-1 border border-slate-100 group-hover:shadow-md transition-shadow">
              <img src={IMAGES.logo} alt="Logo Chimúco" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`font-black leading-tight text-lg md:text-xl tracking-tighter transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                Chimúco Saúde
              </span>
              <span className="text-[10px] text-blue-600 font-black tracking-[0.2em] uppercase">Centro Médico</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {['Serviços', 'Anúncios', 'Doutora', 'Contato'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))} 
                className="text-slate-600 hover:text-blue-600 text-sm font-bold uppercase tracking-widest transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-lg shadow-blue-200 active:scale-95"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-slate-900 bg-white shadow-sm rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl py-8 px-6 overflow-hidden"
            >
              <div className="flex flex-col space-y-6">
                {['Serviços', 'Anúncios', 'Doutora', 'Contato'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))} 
                    className="text-left text-xl font-black text-slate-800 tracking-tighter"
                  >
                    {item}
                  </button>
                ))}
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
                  className="bg-blue-600 text-white text-center py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 shadow-xl shadow-blue-100"
                >
                  <MessageCircle size={24} />
                  <span>Agendar Consulta</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-52 lg:pb-40 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -z-10 w-full lg:w-3/5 h-full bg-slate-50 lg:rounded-bl-[10rem]"></div>
        <div className="absolute top-40 right-10 -z-10 w-80 h-80 bg-blue-100/40 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg mb-8 shadow-lg shadow-blue-100">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">Atendimento Urgente 24H</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                Saúde com <br />
                <span className="text-blue-600">Excelência</span>
              </h1>
              <p className="text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Onde o cuidado humanizado encontra a tecnologia médica para o seu bem-estar e da sua família.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="w-full sm:w-auto flex items-center justify-center space-x-4 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-blue-200 active:scale-95"
                >
                  <MessageCircle size={24} />
                  <span>Marcar Consulta</span>
                </a>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="w-full sm:w-auto flex items-center justify-center space-x-4 bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:border-blue-600 hover:text-blue-600 transition-all shadow-xl shadow-slate-50"
                >
                  <Phone size={24} />
                  <span>Ligar Agora</span>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-center lg:justify-start space-x-8 text-slate-400">
                <div className="text-left">
                  <p className="text-slate-900 font-black text-xl leading-none">NIF</p>
                  <p className="text-xs uppercase tracking-widest font-bold">{CONTACT_INFO.nif}</p>
                </div>
                <div className="w-px h-8 bg-slate-100"></div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="text-blue-600" size={24} />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">100% Certificado</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden border-[12px] md:border-[16px] border-white shadow-[0_40px_100px_rgba(0,0,0,0.1)] aspect-[4/5] bg-slate-200">
                <img 
                  src={IMAGES.doctor} 
                  alt="Dra. Maryline Eyala" 
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating Doctor Bio */}
              <div className="absolute -bottom-12 -right-6 bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl z-20 border border-slate-50 max-w-[240px] md:max-w-[280px]">
                <div className="flex flex-col space-y-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center">
                    <Stethoscope size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tighter">Dra. Maryline Eyala</h3>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">Referência em atendimento humanizado e direção clínica em Viana.</p>
                </div>
              </div>

              {/* Urgência Card */}
              <div className="absolute top-20 -left-6 md:-left-12 bg-blue-600 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl z-20 hidden md:flex flex-col space-y-2 text-white border-4 border-white">
                <Zap size={28} fill="white" className="animate-pulse" />
                <p className="font-black text-xs md:text-sm uppercase tracking-widest">Urgência</p>
                <p className="text-[10px] md:text-xs font-bold text-blue-100">Disponível 24/7</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Cuidados Clínicos</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic">Nossos Serviços</h2>
            </div>
            <p className="text-slate-500 font-medium text-lg max-w-sm text-center lg:text-left">
              Estrutura completa para diagnósticos precisos e tratamentos eficazes.
            </p>
          </div>

          <div className="space-y-24">
            {Object.entries(groupedServices).map(([category, items]) => (
              <div key={category} className="group/cat">
                <div className="flex items-center space-x-6 mb-12">
                  <h3 className="text-2xl font-black text-slate-800 tracking-tighter whitespace-nowrap">{category}</h3>
                  <div className="flex-1 h-px bg-slate-100 group-hover/cat:bg-blue-100 transition-colors"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {items.map((service, idx) => (
                    <motion.div 
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="group p-8 bg-slate-50 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 border border-transparent hover:border-blue-100"
                    >
                      <div className="w-16 h-16 bg-white text-blue-600 group-hover:bg-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-sm">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">Equipe especializada em {service.title.toLowerCase()} com dedicação total ao paciente.</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <section id="anuncios" className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 -skew-x-12 translate-x-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-blue-400 font-black tracking-widest uppercase text-xs mb-6 block">Novidades e Campanhas</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Conheça Nossos <br /> Destaques</h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12">
                O Centro Médico Chimúco Saúde está em constante evolução. Nossas campanhas trazem benefícios reais para a comunidade de Viana.
              </p>
              
              <ul className="space-y-6">
                {[
                  'Análises Clínicas de Alta Precisão',
                  'Acompanhamento Pré-Natal Completo',
                  'Atendimento Pediátrico Especializado',
                  'Farmácia Interna com Medicamentos Essenciais'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-4">
                    <CheckCircle2 className="text-blue-500 shrink-0" size={24} />
                    <span className="text-lg font-bold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex items-center space-x-6">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Vi o anúncio e gostaria de saber mais.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-500 hover:text-white transition-all shadow-xl active:scale-95"
                >
                  Saiba Mais
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group cursor-pointer"
                onClick={() => window.open(IMAGES.pamphlet, '_blank')}
              >
                <div className="absolute -inset-4 bg-blue-600/30 rounded-[3rem] blur-2xl group-hover:bg-blue-600/50 transition-colors"></div>
                <img 
                  src={IMAGES.pamphlet} 
                  alt="Panfleto Chimúco Saúde" 
                  className="relative z-10 w-full h-auto rounded-[2rem] md:rounded-[2.5rem] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full text-slate-900">
                    <ExternalLink size={32} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Bio */}
      <section id="doutora" className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative w-full"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-10 animate-pulse"></div>
              <div className="rounded-[3rem] md:rounded-[4rem] overflow-hidden border-[8px] md:border-[12px] border-slate-50 shadow-2xl">
                <img 
                  src={IMAGES.doctor} 
                  alt="Dra. Maryline Eyala" 
                  className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="w-16 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
              <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4 block">Liderança e Visão Clínica</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter italic">Dra. Maryline Eyala</h2>
              
              <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
                <p>
                  A Dra. Maryline Eyala traz uma vasta experiência em medicina interna e direção hospitalar, focando no atendimento humanizado como pilar central do Centro Médico Chimúco Saúde.
                </p>
                <p>
                  Sua missão é proporcionar um ambiente onde o paciente não é apenas um número, mas um ser humano que merece respeito, dignidade e o melhor tratamento disponível.
                </p>
                <div className="p-8 bg-blue-50/50 rounded-[2rem] md:rounded-[2.5rem] border-l-8 border-blue-600">
                  <p className="italic text-slate-900 font-bold">
                    "O cuidado com a vida é o nosso maior compromisso. No Chimúco Saúde, cada batimento cardíaco importa."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {BENEFITS.map((benefit, idx) => (
              <motion.div 
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-blue-50 text-center group"
              >
                <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0 shadow-sm">
                  {benefit.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">{benefit.title}</h4>
                <p className="text-slate-400 font-medium">Excelência operacional e ética profissional em todos os nossos processos.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden p-2 shadow-2xl">
                  <img src={IMAGES.logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-2xl font-black tracking-tighter">Chimúco Saúde</h4>
                  <p className="text-[10px] text-blue-400 font-black uppercase tracking-[0.2em]">Centro Médico Clínico</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed font-bold italic text-lg">
                "Saúde com humanidade e rigor clínico no coração de Angola."
              </p>
            </div>

            <div>
              <h5 className="font-black text-white mb-8 uppercase text-xs tracking-[0.3em]">Navegação</h5>
              <ul className="space-y-4 text-slate-400 font-bold">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-blue-500 transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="hover:text-blue-500 transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('anuncios')} className="hover:text-blue-500 transition-colors">Anúncios</button></li>
                <li><button onClick={() => scrollToSection('doutora')} className="hover:text-blue-500 transition-colors">Doutora</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-white mb-8 uppercase text-xs tracking-[0.3em]">Contato</h5>
              <ul className="space-y-4 text-slate-400 font-bold">
                <li className="flex items-center space-x-3">
                  <Phone size={20} className="text-blue-500" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MessageCircle size={20} className="text-blue-500" />
                  <span>{CONTACT_INFO.whatsappDisplay}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin size={20} className="text-blue-500 mt-1 shrink-0" />
                  <span className="text-sm">{CONTACT_INFO.address}</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-[2.5rem] border border-slate-800">
              <h5 className="font-black text-white mb-6 uppercase text-xs tracking-[0.3em]">Informações</h5>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-black mb-2">NIF</p>
              <p className="font-black text-blue-400 mb-6">{CONTACT_INFO.nif}</p>
              <div className="flex items-center space-x-4">
                <Clock className="text-blue-500" size={24} />
                <div>
                  <p className="font-black">24 Horas</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Todos os dias</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
            <p>&copy; {new Date().getFullYear()} Centro Médico Chimúco Saúde. Qualidade Angolana.</p>
            <div className="mt-6 md:mt-0 space-x-8">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
          Fale Connosco
        </span>
      </a>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 left-8 z-50 bg-white text-slate-900 p-4 rounded-full shadow-2xl hover:bg-blue-50 transition-all border border-slate-100 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;
