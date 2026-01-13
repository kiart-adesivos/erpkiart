
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { TrendingUp, ShoppingBag, Clock, AlertTriangle } from 'lucide-react';

const data = [
  { name: 'Seg', sales: 400, prod: 240 },
  { name: 'Ter', sales: 300, prod: 139 },
  { name: 'Qua', sales: 200, prod: 980 },
  { name: 'Qui', sales: 278, prod: 390 },
  { name: 'Sex', sales: 189, prod: 480 },
  { name: 'Sab', sales: 239, prod: 380 },
  { name: 'Dom', sales: 349, prod: 430 },
];

export const TenantDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard icon={<ShoppingBag className="text-blue-600" />} label="Vendas Mensais" value="R$ 12.450,00" trend="+12.5%" />
        <KpiCard icon={<Clock className="text-amber-600" />} label="Em Produção" value="24 Pedidos" trend="Normal" />
        <KpiCard icon={<TrendingUp className="text-green-600" />} label="Taxa de Entrega" value="98%" trend="+2%" />
        <KpiCard icon={<AlertTriangle className="text-red-600" />} label="Abaixo do Estoque" value="3 Insumos" trend="Crítico" />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Desempenho Semanal</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="sales" stroke="#2563eb" fillOpacity={1} fill="url(#colorSales)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Produção por Status</h3>
          <div className="space-y-4">
            <StatusProgress label="Aguardando Arte" count={8} color="bg-gray-200" percentage={40} />
            <StatusProgress label="Impressão" count={12} color="bg-blue-500" percentage={60} />
            <StatusProgress label="Acabamento" count={5} color="bg-indigo-500" percentage={25} />
            <StatusProgress label="Finalizado" count={18} color="bg-green-500" percentage={90} />
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-800">Últimos Pedidos</h3>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Cliente</th>
              <th className="px-6 py-4">Produto</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {[1, 2, 3].map(i => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium">João Silva</td>
                <td className="px-6 py-4 text-gray-600">Banner 120x80 Lona 440g</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">Em Produção</span>
                </td>
                <td className="px-6 py-4 font-semibold">R$ 145,00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const KpiCard = ({ icon, label, value, trend }: any) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
      <span className={`text-xs font-bold ${trend.startsWith('+') ? 'text-green-600' : 'text-gray-400'}`}>{trend}</span>
    </div>
    <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </div>
);

const StatusProgress = ({ label, count, color, percentage }: any) => (
  <div>
    <div className="flex justify-between text-sm mb-1.5">
      <span className="font-medium text-gray-700">{label}</span>
      <span className="text-gray-500 font-bold">{count}</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);
