
import React, { useEffect, useState } from 'react';
import { 
  Zap, 
  Bell, 
  ShieldCheck, 
  Smartphone,
  Star,
  Users,
  Infinity,
  ArrowRight,
  AlertTriangle,
  Target,
  TrendingUp
} from 'lucide-react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setProgress(90), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-2xl mx-auto mb-12 mt-8 px-4">
      <div className="border border-brand/30 bg-brand/5 rounded-2xl p-4 md:p-6 text-center relative overflow-hidden">
        <div className="flex items-center justify-center gap-3 mb-4 text-brand">
          <AlertTriangle size={20} className="animate-pulse flex-shrink-0" />
          <p className="text-[10px] md:text-sm font-bold tracking-wider uppercase">
            ESPERA! NÃO FECHE ESTA PÁGINA. SUA COMPRA ESTÁ SENDO PROCESSADA...
          </p>
        </div>
        
        <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2 overflow-hidden">
          <div 
            className="bg-brand h-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(254,83,36,0.6)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">
          <span>CONFIGURANDO ACESSO</span>
          <span className="text-brand">{progress}% CONCLUÍDO</span>
        </div>
      </div>
    </div>
  );
};

const PhoneMockup = () => (
  <div className="relative mx-auto w-[260px] h-[520px] md:w-[280px] md:h-[560px] bg-black border-[8px] md:border-[10px] border-[#1a1a1a] rounded-[2.5rem] md:rounded-[3rem] shadow-[0_0_50px_rgba(254,83,36,0.15)] overflow-hidden">
    {/* Screen Content */}
    <div className="h-full w-full bg-[#050505] flex flex-col p-4 pt-10">
      {/* Notification Card */}
      <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-start gap-3 shadow-xl transform translate-y-4 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="bg-brand p-1.5 rounded-lg">
          <Bell size={14} className="text-white fill-white" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-0.5">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Sua Marca</span>
            <span className="text-[9px] text-gray-500">agora</span>
          </div>
          <p className="text-xs font-bold text-white">Novo lead capturado</p>
        </div>
      </div>

      <div className="mt-8 space-y-3 px-2">
        <div className="h-28 bg-white/5 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent"></div>
            <div className="p-3">
                <div className="w-1/2 h-2 bg-white/10 rounded mb-2"></div>
                <div className="w-3/4 h-3 bg-brand/20 rounded"></div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-20 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-2">
            <Users size={16} className="text-brand/50" />
            <div className="w-10 h-1 bg-white/10 rounded"></div>
          </div>
          <div className="h-20 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-2">
            <TrendingUp size={16} className="text-brand/50" />
            <div className="w-10 h-1 bg-white/10 rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Nav */}
      <div className="mt-auto bg-brand h-8 rounded-xl flex items-center justify-center text-[10px] font-black tracking-tighter text-white shadow-[0_-5px_15px_rgba(254,83,36,0.2)]">
        SEU APP WHITE LABEL
      </div>
    </div>
  </div>
);

const App = () => {
  const purchaseUrl = "https://go.perfectpay.com.br/PPU38CQ676N/?upsell=true";
  const rejectionUrl = "https://nilsonrodrigues.shop/upsell-digitalzap-codigo-fonte";

  return (
    <div className="min-h-screen bg-[#02040a] text-white selection:bg-brand selection:text-white pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Progress Section */}
        <ProgressBar />

        {/* Headline Section */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-6xl font-black font-jakarta mb-6 tracking-tight leading-tight">
            Dê o <span className="text-brand">Próximo Passo</span> e Tenha<br />
            Seu Próprio App para Revenda
          </h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Agora que você é dono do seu sistema de automação, entregue o máximo de profissionalismo. 
            Transforme sua plataforma em um <strong>Aplicativo Mobile White Label</strong> e cobre mensalidades mais caras.
          </p>
        </div>

        {/* Main Offer Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Mockup Section */}
          <div className="relative order-1 lg:order-1 mb-8 lg:mb-0">
            <div className="absolute -inset-10 bg-brand/5 blur-[100px] rounded-full -z-10"></div>
            <PhoneMockup />
          </div>

          {/* Features & Price Section */}
          <div className="order-2 lg:order-2">
            <div className="bg-[#0a0d14] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-brand/10 p-2 rounded-xl text-brand">
                  <Target size={24} />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-jakarta">Por que oferecer o App Mobile aos seus clientes?</h2>
              </div>

              {/* Feature Grid */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand font-bold text-xs md:text-sm uppercase tracking-wide">
                    <Star size={14} className="fill-brand flex-shrink-0" /> Autoridade SaaS
                  </div>
                  <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">Sua marca no celular do cliente passa 10x mais confiança. Valorize seu ticket de revenda instantaneamente.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand font-bold text-xs md:text-sm uppercase tracking-wide">
                    <Bell size={14} className="fill-brand flex-shrink-0" /> Push White Label
                  </div>
                  <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">Seus clientes recebem alertas de novas automações e mensagens direto na tela, sem custo de SMS.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand font-bold text-xs md:text-sm uppercase tracking-wide">
                    <Users size={14} className="fill-brand flex-shrink-0" /> Retenção de Clientes
                  </div>
                  <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">Apps têm taxa de cancelamento 3x menor que sistemas acessados apenas via navegador mobile.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand font-bold text-xs md:text-sm uppercase tracking-wide">
                    <Infinity size={14} className="fill-brand flex-shrink-0" /> Revenda Ilimitada
                  </div>
                  <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">Pague uma única vez e instale para quantos clientes você quiser. Lucro 100% no seu bolso.</p>
                </div>
              </div>

              {/* Price Block */}
              <div className="bg-[#05070c] border border-white/5 rounded-2xl p-5 md:p-6 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                  <div>
                    <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">UPGRADE EXCLUSIVO</p>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 line-through text-base md:text-lg">R$ 197,00</span>
                      <span className="text-3xl md:text-4xl font-black text-white">R$ 19,90</span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto">
                    <div className="bg-red-500/10 text-red-500 text-[9px] font-black px-2 py-1 rounded-md border border-red-500/20 uppercase inline-block">
                      OFERTA ÚNICA: 04:59
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button - Responsivo */}
              <a 
                href={purchaseUrl}
                className="w-full bg-gradient-to-r from-brand to-brand-light hover:from-brand-dark hover:to-brand text-white font-black py-4 md:py-5 rounded-2xl text-base sm:text-lg md:text-xl flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 transition-all shadow-[0_0_30px_rgba(254,83,36,0.4)] group pulse-button no-underline text-center"
              >
                <span>SIM! QUERO O APP</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform hidden sm:block" />
              </a>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-tighter opacity-70">
                <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-500" /> PAGAMENTO SEGURO</div>
                <div className="flex items-center gap-1.5"><Zap size={14} className="text-brand" /> LIBERAÇÃO IMEDIATA</div>
                <div className="flex items-center gap-1.5"><Smartphone size={14} className="text-brand-light" /> 100% CUSTOMIZÁVEL</div>
              </div>
            </div>
          </div>
        </div>

        {/* No Thanks */}
        <div className="text-center mt-12 px-4">
          <a 
            href={rejectionUrl}
            className="text-white hover:text-white/80 text-[11px] md:text-xs font-bold transition-colors underline underline-offset-4 no-underline inline-block leading-relaxed"
          >
            Não, quero continuar apenas com o painel web padrão
          </a>
        </div>

      </div>
    </div>
  );
};

export default App;
