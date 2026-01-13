
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Printer, 
  Eye, 
  DollarSign, 
  Package, 
  LogOut, 
  Menu,
  FileText
} from 'lucide-react';
import { User, Tenant } from '../types';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
      active ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

interface TenantLayoutProps {
  user: User;
  tenant: Tenant;
  onLogout: () => void;
  setView: (v: string) => void;
  currentView: string;
  children: React.ReactNode;
}

export const TenantLayout: React.FC<TenantLayoutProps> = ({ 
  user, tenant, onLogout, setView, currentView, children 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8 px-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">P</div>
          <span className="text-xl font-bold tracking-tight">PrintSaaS</span>
        </div>

        <nav className="flex-1 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={currentView === 'dashboard'} onClick={() => setView('dashboard')} />
          <NavItem icon={<Users size={20} />} label="Comercial" active={currentView === 'commercial'} onClick={() => setView('commercial')} />
          <NavItem icon={<Printer size={20} />} label="Produção Gráfica" active={currentView === 'production'} onClick={() => setView('production')} />
          <NavItem icon={<Eye size={20} />} label="Comunicação Visual" active={currentView === 'visual-comm'} onClick={() => setView('visual-comm')} />
          <NavItem icon={<DollarSign size={20} />} label="Financeiro" active={currentView === 'finance'} onClick={() => setView('finance')} />
          <NavItem icon={<Package size={20} />} label="Estoque" active={currentView === 'inventory'} onClick={() => setView('inventory')} />
        </nav>

        <div className="mt-auto border-t border-gray-100 pt-4">
          <div className="px-4 mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Usuário</p>
            <p className="text-sm font-medium text-gray-700 truncate">{user.name}</p>
          </div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8">
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-gray-800">{tenant.name}</h1>
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded uppercase">Plano Ativo</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs text-gray-400">Próximo Vencimento</span>
                <span className="text-sm font-medium text-gray-700">15/10/2024</span>
             </div>
          </div>
        </header>

        {/* Dynamic Page Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
