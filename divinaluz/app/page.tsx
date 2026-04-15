"use client";
import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Heart, Map, Clock, Rocket, PlusCircle, Check, Star, ChevronDown, MessageCircle, MapPin, Phone, Mail, Send, Menu, X, ArrowDown } from "lucide-react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  
  const WHATSAPP_LINK = "https://wa.me/5508005652000";
  const openWhatsapp = () => window.open(WHATSAPP_LINK, "_blank");

  const faqData = [
    {
      question: "Qual a área de cobertura dos planos?",
      answer: "Nossa assistência funeral tem cobertura em todo o território nacional. Independente de onde o associado esteja, prestamos todo o suporte necessário através da nossa rede credenciada."
    },
    {
      question: "Quantas pessoas posso incluir no plano familiar?",
      answer: "Nossos planos são flexíveis. No plano padrão, você pode incluir o titular, cônjuge, filhos solteiros até 21 anos e pais/sogros. Também oferecemos opções para dependentes extras conforme sua necessidade."
    },
    {
      question: "Como funciona o atendimento 24 horas?",
      answer: "Temos uma central de atendimento disponível 24 horas por dia, 7 dias por semana. Em caso de necessidade, basta ligar para o nosso 0800 e um consultor especializado dará todo o suporte imediato, coordenando os serviços necessários."
    },
    {
      question: "Existe carência para os serviços?",
      answer: "Sim, existe um período de carência padrão conforme as normas da ABREDIF, mas oferecemos condições especiais dependendo da modalidade de contratação. Fale com um de nossos consultores para detalhes sobre o seu perfil."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Hydration fix: Only render the full UI after mounting on the client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // No more blank screen guard for better FCP


  return (
    <div className={styles.pageContainer} suppressHydrationWarning>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <img  
              className={styles.logoImage}
              src="/divinaluz.png" 
            />
          </div>
          
          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {[
              { label: 'Benefícios', href: '#beneficios' },
              { label: 'Planos', href: '#planos' },
              { label: 'Sobre Nós', href: '#sobre-nos' }
            ].map((item) => (
              <a key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className={styles.ctaContainer}>
            <a href="https://www.instagram.com/grupodivinaluz/?hl=pt-br" target="_blank" rel="noopener noreferrer" className={styles.headerInstagramCta} title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <button className={styles.headerCta} onClick={openWhatsapp}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </button>
            <div className={styles.mobileActions}>
              <button className={styles.mobileMenuBtn} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {menuOpen && (
          <div className={styles.mobileNavOverlay}>
            <nav className={styles.mobileNav}>
              {[
                { label: 'Benefícios', href: '#beneficios' },
                { label: 'Planos', href: '#planos' },
                { label: 'Sobre Nós', href: '#sobre-nos' }
              ].map((item) => (
                <a 
                   key={item.label} 
                   href={item.href} 
                   className={styles.mobileNavLink}
                   onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/familiasol.jpg"
            alt="Fundo Hero - Família"
            fill
            priority
            className={styles.heroImgObj}
          />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            {/* Badge */}
            <div className={styles.badge}>
              <ShieldCheck className="w-4 h-4 text-[#1A4D8F]" />
              <span className={styles.badgeText}>
                Selo de Qualidade ABREDIF
              </span>
            </div>

            {/* Headline */}
            <h1 className={styles.heroTitle}>
              Agora Jaraguá pode escolher o melhor para sua família
            </h1>

            {/* Subheadline */}
            <p className={styles.heroText}>
              A população pediu, e a Divina Luz chegou para oferecer o atendimento que
Jaraguá merece. Um atendimento humanizado que se importa de verdade, porque cada história merece ser honrada com respeito, dignidade e cuidado.
            </p>

            {/* Buttons */}
            <div className={styles.heroButtons}>
              <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={openWhatsapp}>
                <svg 
                  className="w-6 h-6 mr-3" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Falar com um consultor
              </button>
              <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver Planos e Valores
              </button>
            </div>


          </div>
        </div>
      </section>

      {/* Trust Indicators (Moved Below Hero) */}
      <div className={styles.trustBanner}>
        <div className={styles.trustIndicators}>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <Clock className="w-6 h-6" />
            </div>
            <div className={styles.trustText}>
              <span className={styles.trustTextBold}>Suporte 24h</span>
              <span className={styles.trustTextLight}>Pronto Atendimento</span>
            </div>
          </div>
          
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className={styles.trustText}>
              <span className={styles.trustTextBold}>30 Anos</span>
              <span className={styles.trustTextLight}>Experiência e Tradição</span>
            </div>
          </div>
        </div>
      </div>

      <section id="sobrePlanos">
        <div className={styles.sectionFamiliaPlan}>
          <div className={styles.imageFamilia}>
            {/* img*/}
          </div>
          <div className={styles.textYellow}>
            <div className={styles.textFamiliaTitle}>
              <h2><strong>Cuidar</strong> é o nosso plano. E o <strong>seu</strong>?</h2>
            </div>
            <div className={styles.textFamiliaDescription}>
              <div className={styles.iconSetaBaixo}>
                <ArrowDown className="w-6 h-6" />
              </div>              
              <h3>Conheça nossos <b className={styles.b}>PLANOS</b></h3>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className={styles.section} style={{ backgroundColor: '#F2F4F7' }}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionCenter}>
            <h2 className={styles.sectionTitle}>
              Planos para Sua Família
            </h2>
            <p className={styles.sectionSubtitle}>
              Planos flexíveis que cabem no seu orçamento.
            </p>
          </div>

          <div className={styles.grid4}>
            {/* POP */}
            <div className={styles.planCard}>
              <h3 className={styles.planTitle}>POP</h3>
              <p className={styles.planSubtitle}>Cuidado essencial e sensibilidade.</p>
              <div className={styles.planPriceBox}>
                <span className={styles.planCurrency}>R$</span>
                <span className={styles.planPrice}>44,40</span>
                <span className={styles.planPeriod}>/mês</span>
              </div>
              <ul className={styles.planList}>
                {[
                  'S.A.F (Atendimento Funerário)',
                  'Traslado com limite de Km',
                  'Ornamentação flores naturais',
                  'Kit lanche e Vestimentas'
                ].map((li, i) => (
                  <li key={i} className={styles.planListItem}>
                    <CheckCircle2 className={styles.planListItemIcon} />
                    <span className={styles.planListText}>{li}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.btnPlan} onClick={openWhatsapp}>
                <svg className="w-5 h-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                falar com um consultor
              </button>
            </div>

            {/* VIP */}
            <div className={styles.planCard}>
              <h3 className={styles.planTitle}>VIP</h3>
              <p className={styles.planSubtitle}>Despedidas feitas com carinho.</p>
              <div className={styles.planPriceBox}>
                <span className={styles.planCurrency}>R$</span>
                <span className={styles.planPrice}>74,00</span>
                <span className={styles.planPeriod}>/mês</span>
              </div>
              <ul className={styles.planList}>
                <li className={styles.planListItem}>
                  <PlusCircle className={styles.planListItemIcon} />
                  <span className={styles.planListTextBold}>Tudo do plano POP +</span>
                </li>
                {[
                  'Traslado sem limite (GO e DF)',
                  'Sala de homenagem póstuma'
                ].map((li, i) => (
                  <li key={i} className={styles.planListItem}>
                    <CheckCircle2 className={styles.planListItemIcon} />
                    <span className={styles.planListText}>{li}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.btnPlan} onClick={openWhatsapp}>
                <svg className="w-5 h-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                falar com um consultor
              </button>
            </div>

            {/* MASTER */}
            <div className={styles.planCardMaster}>
              <div className={styles.masterBadge}>
                Mais Escolhido
              </div>
              <h3 className={styles.planTitleMaster}>MASTER</h3>
              <p className={styles.planSubtitleMaster}>Proteção e amparo em cada fase.</p>
              <div className={styles.planPriceBox}>
                <span className={styles.planCurrencyMaster}>R$</span>
                <span className={styles.planPriceMaster}>111,20</span>
                <span className={styles.planPeriodMaster}>/mês</span>
              </div>
              <ul className={styles.planList}>
                <li className={styles.planListItem}>
                  <PlusCircle className={styles.planListItemIconMaster} />
                  <span className={styles.planListTextMaster} style={{fontWeight: 700}}>Tudo do plano VIP +</span>
                </li>
                {[
                  'Tanatopraxia/Embalsamamento',
                  'Coroa de Flores',
                  'Chuva de Pétalas'
                ].map((li, i) => (
                  <li key={i} className={styles.planListItem}>
                    <CheckCircle2 className={styles.planListItemIconMaster} />
                    <span className={styles.planListTextMaster}>{li}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.btnPlanMaster} onClick={openWhatsapp}>
                <svg className="w-5 h-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                falar com um consultor
              </button>
            </div>

            {/* PREMIUM */}
            <div className={styles.planCard}>
              <h3 className={styles.planTitle}>PREMIUM</h3>
              <p className={styles.planSubtitle}>Cada detalhe com amor e dignidade.</p>
              <div className={styles.planPriceBox}>
                <span className={styles.planCurrency}>R$</span>
                <span className={styles.planPrice}>201,30</span>
                <span className={styles.planPeriod}>/mês</span>
              </div>
              <ul className={styles.planList}>
                <li className={styles.planListItem}>
                  <PlusCircle className={styles.planListItemIcon} />
                  <span className={styles.planListTextBold}>Tudo do MASTER +</span>
                </li>
                {[
                  'Cremação e Cobertura Nacional',
                  'Pet Assistência & Residencial',
                  'Assist. Psicoterapêutica',
                  'Seguro AUX (Titular)'
                ].map((li, i) => (
                  <li key={i} className={styles.planListItem}>
                    <CheckCircle2 className={styles.planListItemIcon} />
                    <span className={styles.planListText}>{li}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.btnPlan} onClick={openWhatsapp}>
                <svg className="w-5 h-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                falar com um consultor
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.personalizeWrap}>
        <div className={styles.personalizeContainer}>
          <div className={styles.personalizeTextCol}>
            <div className={styles.personalizeCard}>
              <h2>Cuidar de quem você ama do seu jeito</h2>
            </div>
            <div className={styles.personalizeCardSeta}>
              <div className={styles.personalizeIcon}>
                <ArrowDown className="w-6 h-6" />
              </div>
              <h3>personalize seu plano</h3>
            </div>
          </div>
          <div className={styles.personalizeImg}>
            <Image 
              src="/foto.png" 
              alt="Personalize seu plano" 
              width={400} 
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        
        <div className={styles.personalizeTopicsBox}>
          <div className={styles.topicsGridInner}>
            <div className={styles.topicCol}>
              <div className={styles.topicItem}>
                <Check className={styles.topicIcon} />
                <span>Tanatopraxia</span>
              </div>
              <div className={styles.topicItem}>
                <Check className={styles.topicIcon} />
                <span>Seguro AUX com indenização a partir de R$ 5.000,00 por vida segurada</span>
              </div>
              <div className={styles.topicItem}>
                <Check className={styles.topicIcon} />
                <span>Cesta básica emergencial em caso de óbito do titular</span>
              </div>
              <div className={styles.topicItem}>
                <Check className={styles.topicIcon} />
                <span>Seguro Residencial Fácil</span>
              </div>
            </div>
            <div className={styles.topicCol}>
              <div className={styles.topicItem}>
                <Check className={styles.topicIcon} />
                <span>Sala de Homenagem</span>
              </div>
              <div className={styles.topicItem}>
                <Check className={styles.topicIcon} />
                <span>PET Assistência</span>
              </div>
              <div className={styles.topicItem}>
                <Check className={styles.topicIcon} />
                <span>Coroa de Flores</span>
              </div>
              <div className={styles.topicItem}>
                <Check className={styles.topicIcon} />
                <span>Cobertura nacional por dependente</span>
              </div>
            </div>
          </div>
          <button className={styles.btnPulseWhatsapp} onClick={openWhatsapp}>
            <svg className="w-6 h-6 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            Quero mais informações
          </button>
        </div>
      </section>

      {/* Feedbacks */}
      <section className={styles.section} style={{ backgroundColor: '#FAF9F7' }}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionCenter} style={{ marginBottom: '3rem' }}>
            <h2 className={styles.sectionTitle}>
              Depoimentos de nossos clientes
            </h2>
          </div>
          <div className={styles.grid3}>
            {[
              { text: '"Fui muito bem acolhida na despedida do meu pai. O cuidado da equipe e a tranquilidade para resolver tudo sem pressa fizeram toda a diferença."', author: 'Jaciara' },
              { text: '"Sem palavras pelo atendimento e compromisso nesa hora difícil Vocês conseguem tornar um momento tranquilo"', author: 'Luiz' },
              { text: '"Vocês foram excelenteS! Equipe maravilhosa, que trabalha com tanto carinho e dedicação pela a família neste momento de dor."', author: 'Eliete' }
            ].map((feedback, i) => (
              <div key={i} className={styles.feedbackCard}>
                <div className={styles.feedbackStars}>
                  {[1,2,3,4,5].map(star => <Star key={star} />)}
                </div>
                <p className={styles.feedbackText}>
                  {feedback.text}
                </p>
                <p className={styles.feedbackAuthor}>{feedback.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionCenter}>
            <h3 className={styles.sectionSuperTitle}>
              Por que nos escolher
            </h3>
            <h2 className={styles.sectionTitle}>
              Amparo Completo para Sua Família
            </h2>
          </div>

          <div className={styles.grid4}>
            {[
              { title: 'Atendimento Humanizado', text: 'Nossa equipe é treinada para oferecer acolhimento e empatia acima de tudo.', icon: Heart },
              { title: 'Cobertura Nacional', text: 'Assistência em todo o território brasileiro, garantindo segurança onde você estiver.', icon: Map },
              { title: 'Rede de Benefícios', text: 'Descontos exclusivos em farmácias, clínicas e diversos parceiros locais.', icon: CheckCircle2 },
              { title: 'Suporte 24/7', text: 'Central de atendimento especializada disponível a qualquer hora do dia ou da noite.', icon: Clock },
            ].map((item, i) => (
              <div key={i} className={styles.benefitCard}>
                <div className={styles.benefitIconWrap}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className={styles.benefitTitle}>{item.title}</h4>
                <p className={styles.benefitText}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className={styles.section} style={{ backgroundColor: '#ffffffff', padding: '20px'}}>
        <div className={styles.sectionInner}>
          <div className={styles.howItWorksGrid}>
            <div>
              <br />
              <h2 className={styles.sectionTitle} style={{ marginBottom: '3rem' }}>
                Simples e Rápido:<br />
                Como Garantir Sua Proteção
              </h2>
              <div className={styles.stepsList}>
                {[
                  { n: '1', t: 'Entre em contato', p: 'Fale com nossos consultores via WhatsApp ou telefone para tirar suas dúvidas.' },
                  { n: '2', t: 'Escolha seu plano', p: 'Selecione as coberturas que melhor atendem as necessidades da sua família.' },
                  { n: '3', t: 'Família protegida', p: 'Pronto! Agora você tem a tranquilidade de saber que sua família está amparada.' }
                ].map((step, i) => (
                  <div key={i} className={styles.stepItem}>
                    <div className={styles.stepNumber}>
                      {step.n}
                    </div>
                    <div>
                      <h4 className={styles.stepTitle}>{step.t}</h4>
                      <p className={styles.stepText}>
                        {step.p}
                      </p>
                    </div>
                  </div>
                ))}
                <br />              
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.section}>
        <div className={styles.statsWrap}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber1}>30+</div>
              <div className={styles.statLabel1}>Anos de História</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber1}>15k+</div>
              <div className={styles.statLabel1}>Famílias Amparadas</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber1}>24h</div>
              <div className={styles.statLabel1}>Suporte Ativo</div>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className={styles.section} style={{ backgroundColor: '#FAF9F7', paddingTop: '2rem', padding: '20px' }}>
        <div className={styles.faqMax}>
          <h2 className={styles.faqTitle}>
            Perguntas Frequentes
          </h2>
          <div className={styles.faqList}>
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={styles.faqItem}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqHeader}>
                  <span>{faq.question}</span>
                  <ChevronDown 
                    style={{ 
                      transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                </div>
                {activeFaq === index && (
                  <p className={styles.faqBody}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="sobre-nos" className={styles.ctaWrap}>
        <div className={`${styles.section} ${styles.ctaSectionPadding}`}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Proteja quem você ama hoje mesmo
            </h2>
            <p className={styles.ctaText}>
              Não deixe para amanhã a segurança de quem você mais valoriza. Fale com um de nossos especialistas agora.
            </p>
            <button className={styles.ctaBtn} onClick={openWhatsapp}>
              <svg className="w-6 h-6 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Chamar no WhatsApp
            </button>
          </div>
        </div>
      </section>
            <div className="estamos" style={{backgroundColor: '#ffffffff'}}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', fontWeight: '800', color: '#002453ff' }}>Aonde estamos</h2>
</div>
      {/* Maps */}
      <section className={styles.mapWrap}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.8989432426306!2d-49.32471128830343!3d-15.756484384815574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935c546182a20b5b%3A0xbdff79b1d3f44338!2sAv.%20Ferreira%20Rios%2C%20511%20-%20Vila%20Sao%20Jose%2C%20Jaragu%C3%A1%20-%20GO%2C%2076330-000!5e0!3m2!1spt-BR!2sbr!4v1776257262735!5m2!1spt-BR!2sbr"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Grupo Divina Luz"
        ></iframe>
    
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
         <div className={styles.sectionInner}>
           <div className={styles.grid4} style={{ marginBottom: '4rem' }}>
             
             {/* Logo Col */}
             <div>
               <p className={styles.footerText}>
                 Assistência Familiar e Amparo. Tradição e respeito cuidando da sua família há mais de três décadas.
               </p>
               <div className={styles.footerSocials}>
                 <a href="https://www.instagram.com/grupodivinaluz/?hl=pt-br" target="_blank" rel="noopener noreferrer" className={styles.footerSocialIcon} title="Instagram" aria-label="Instagram">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                 </a>
                 <div className={styles.footerSocialIcon}><ShieldCheck /></div>
                 <div className={styles.footerSocialIcon}><Star /></div>
               </div>
             </div>

             {/* Links Rápidos */}
             <div>
               <h4 className={styles.footerTitle}>Links Rápidos</h4>
               <ul className={styles.footerLinks}>
                 {['Políticas de Privacidade', 'Termos de Uso', 'Unidades de Atendimento', 'Trabalhe Conosco'].map(link => (
                   <li key={link}>
                     <a href="#" className={styles.footerLink}>
                       {link}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>

             {/* Contato */}
             <div>
               <h4 className={styles.footerTitle}>Contato</h4>
               <ul className={styles.footerContactList}>
                 <li className={styles.footerContactItem} onClick={openWhatsapp} style={{ cursor: 'pointer' }}>
                   <Phone className={styles.footerContactIcon} />
                   0800 565 2000
                 </li>
                 <li className={`${styles.footerContactItem} ${styles.itemsStart}`}>
                   <MapPin className={styles.footerContactIconTop} />
                   Av. Ferreira Rios, 511 - Vila Sao Jose, Jaraguá - GO
                 </li>
               </ul>
             </div>

             {/* Associe-se */}
             
           </div>
           
           <div className={styles.footerBottom}>
             <div className={styles.footerCopy}>
               &copy; 2026 Divina Luz. Assistência Familiar e Amparo. Todos os direitos reservados.
             </div>
             <button className={styles.footerUp}>
               <ChevronDown style={{ transform: 'rotate(180deg)', width: '16px', height: '16px' }} />
             </button>
           </div>
         </div>
      </footer>
    </div>
  );
}
