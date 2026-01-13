
import React from 'react';
import { Users, Building2, CreditCard, Activity, LogOut, Search } from 'lucide-react';
import { SubscriptionStatus } from '../../types';

interface Props {
  onLogout: () => void;
}

export const SuperAdminDashboard: React.FC<Props> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white font-bold">SA</div>
          <span className="text-lg font-black tracking-tighter text-slate-800 uppercase">PrintSaaS Super Admin</span>
        </div>
        <button onClick={onLogout} className="flex items-center gap-2 text-slate-600 hover:text-red-600 font-bold text-sm">
          <LogOut size={18} /> Sair
        </button>
      </header>

      <main className="flex-1 p-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard icon={<Building2 />} label="Empresas Ativas" value="128" />
          <StatCard icon={<Users />} label="Usuários Totais" value="456" />
          <StatCard icon={<CreditCard />} label="Receita Mensal" value="R$ 3.198,72" />
          <StatCard icon={<Activity />} label="Churn Rate" value="2.4%" />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold text-slate-900">Gestão de Empresas</h2>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Filtrar por nome ou CNPJ..." className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-slate-900" />
            </div>
          </div>
          
          <table className="w-full text-left">
             <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Empresa</th>
                <th className="px-6 py-4">Início</th>
                <th className="px-6 py-4">Usuários</th>
                <th className="px-6 py-4">Assinatura</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Grafica Alpha', date: '01/01/2024', users: 12, status: SubscriptionStatus.ACTIVE },
                { name: 'Visual Signs', date: '15/02/2024', users: 5, status: SubscriptionStatus.PAST_DUE },
                { name: 'Print Fast SP', date: '22/03/2024', users: 8, status: SubscriptionStatus.BLOCKED },
                { name: 'Design & Print', date: '10/04/2024', users: 20, status: SubscriptionStatus.ACTIVE },
              ].map((tenant, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">{tenant.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{tenant.date}</td>
                  <td className="px-6 py-4 text-sm font-medium">{tenant.users}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                      tenant.status === SubscriptionStatus.ACTIVE ? 'bg-green-100 text-green-700' :
                      tenant.status === SubscriptionStatus.PAST_DUE ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {tenant.status === SubscriptionStatus.ACTIVE ? 'Ativa' : tenant.status === SubscriptionStatus.PAST_DUE ? 'Atrasada' : 'Bloqueada'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <button className="text-slate-900 text-xs font-black hover:underline">LOGS</button>
                    <button className="text-blue-600 text-xs font-black hover:underline">EDITAR</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ icon, label, value }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-slate-50 rounded-lg text-slate-900">{icon}</div>
      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</span>
    </div>
    <p className="text-2xl font-black text-slate-900 tracking-tighter">{value}</p>
  </div>
);
