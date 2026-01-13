
import React from 'react';
import { ArrowUpCircle, ArrowDownCircle, DollarSign, Wallet } from 'lucide-react';

export const FinancePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Financeiro</h1>
          <p className="text-gray-500">Controle de caixa, contas a pagar e receber.</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm">+ Receita</button>
           <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm">+ Despesa</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FinanceCard label="Saldo Atual" value="R$ 15.240,50" icon={<Wallet className="text-blue-600" />} />
        <FinanceCard label="A Receber (30 dias)" value="R$ 8.900,00" icon={<ArrowUpCircle className="text-green-600" />} />
        <FinanceCard label="A Pagar (30 dias)" value="R$ 4.150,00" icon={<ArrowDownCircle className="text-red-600" />} />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Fluxo de Caixa Recente</h3>
          <button className="text-sm text-blue-600 font-bold hover:underline">Exportar Relatório</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
            <tr>
              <th className="px-6 py-4">Data</th>
              <th className="px-6 py-4">Descrição</th>
              <th className="px-6 py-4">Categoria</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { date: '12/09', desc: 'Pedido #1002 - Panfletos', cat: 'Vendas', status: 'Pago', val: '+ R$ 180,00', color: 'text-green-600' },
              { date: '11/09', desc: 'Aluguel Galpão', cat: 'Fixo', status: 'Agendado', val: '- R$ 2.500,00', color: 'text-red-600' },
              { date: '10/09', desc: 'Compra de Insumos - Vinil', cat: 'Produção', status: 'Pago', val: '- R$ 850,00', color: 'text-red-600' },
              { date: '09/09', desc: 'Pedido #1001 - Placa PVC', cat: 'Vendas', status: 'Pago', val: '+ R$ 450,00', color: 'text-green-600' },
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-500">{row.date}</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-800">{row.desc}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{row.cat}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${row.status === 'Pago' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {row.status}
                  </span>
                </td>
                <td className={`px-6 py-4 text-sm font-bold text-right ${row.color}`}>{row.val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FinanceCard = ({ label, value, icon }: any) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm font-bold text-gray-500 uppercase tracking-tight">{label}</span>
      <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
    </div>
    <p className="text-3xl font-black text-gray-900 tracking-tighter">{value}</p>
  </div>
);
