
import React from 'react';
import { CheckCircle, ShieldCheck, TrendingUp, Cpu, Rocket } from 'lucide-react';

interface Props {
  onLogin: () => void;
  onSuperAdmin: () => void;
}

export const LandingPage: React.FC<Props> = ({ onLogin, onSuperAdmin }) => {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl">P</div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">PrintSaaS</span>
        </div>
        <div className="flex gap-4">
          <button onClick={onSuperAdmin} className="text-slate-600 hover:text-blue-600 font-medium text-sm">Painel Administrativo</button>
          <button onClick={onLogin} className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Acessar Sistema</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-20 pb-32 text-center">
        <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">O ERP definitivo para gráficas</span>
        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1]">
          Sua Gráfica Sob Controle, <br />
          <span className="text-blue-600">Lucro Sem Complicação.</span>
        </h1>
        <p className="mt-8 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Gerencie orçamentos, produção, estoque e financeiro em uma única plataforma. Criado especificamente para o mercado de impressão e comunicação visual.
        </p>
        
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <p className="text-slate-400 font-medium mb-1">Plano Único Profissional</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-900">R$</span>
              <span className="text-6xl font-black text-slate-900">24,99</span>
              <span className="text-slate-500 font-medium">/mês</span>
            </div>
          </div>
          <button onClick={onLogin} className="bg-slate-900 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group">
            Começar Agora <Rocket className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">Tudo o que você precisa para crescer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<TrendingUp className="text-blue-600" size={32} />} 
              title="Comercial Completo" 
              desc="Cadastro de clientes, orçamentos personalizados e pedidos de venda integrados."
            />
            <FeatureCard 
              icon={<Cpu className="text-blue-600" size={32} />} 
              title="Produção Inteligente" 
              desc="Acompanhe o status de cada trabalho, da pré-impressão ao acabamento final."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-blue-600" size={32} />} 
              title="Financeiro & Estoque" 
              desc="Fluxo de caixa, contas a pagar/receber e controle automático de insumos."
            />
          </div>
        </div>
      </section>

      {/* Pricing Simple */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Sem letras miúdas. Sem limites de usuários.</h2>
        <div className="bg-white border-2 border-blue-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 rounded-bl-3xl font-bold text-sm uppercase">Mais Popular</div>
          <p className="text-lg text-slate-500 mb-4">Plano Anual Flexível</p>
          <div className="flex items-center justify-center gap-1 mb-8">
            <span className="text-2xl font-bold">R$</span>
            <span className="text-6xl font-black">24,99</span>
            <span className="text-slate-400 font-medium">/mensal</span>
          </div>
          <ul className="text-left space-y-4 mb-10 inline-block">
            <PricingItem text="Usuários ilimitados" />
            <PricingItem text="Suporte Prioritário" />
            <PricingItem text="Multi-tenant: Isolamento de dados" />
            <PricingItem text="Gestão de Produção e Estoque" />
            <PricingItem text="Relatórios Financeiros" />
          </ul>
          <button onClick={onLogin} className="block w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-blue-700 transition-all">Contratar Agora</button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left hover:shadow-md transition-shadow">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const PricingItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 text-slate-700 font-medium">
    <CheckCircle className="text-green-500" size={20} />
    {text}
  </li>
);
