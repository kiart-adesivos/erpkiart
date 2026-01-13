
import React, { useState, useEffect } from 'react';
import { LandingPage } from './pages/LandingPage';
import { SuperAdminDashboard } from './pages/SuperAdmin/SuperAdminDashboard';
import { TenantLayout } from './components/TenantLayout';
import { TenantDashboard } from './pages/Tenant/TenantDashboard';
import { CommercialPage } from './pages/Tenant/CommercialPage';
import { ProductionPage } from './pages/Tenant/ProductionPage';
import { FinancePage } from './pages/Tenant/FinancePage';
import { InventoryPage } from './pages/Tenant/InventoryPage';
import { VisualCommPage } from './pages/Tenant/VisualCommPage';
import { User, UserRole, Tenant, SubscriptionStatus } from './types';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentTenant, setCurrentTenant] = useState<Tenant | null>(null);
  const [view, setView] = useState<string>('landing');

  // Simulated login/tenant context switcher
  const handleLogin = (role: UserRole) => {
    const mockTenant: Tenant = {
      id: 't1',
      name: 'Gráfica Exemplo',
      domain: 'exemplo',
      planStatus: SubscriptionStatus.ACTIVE,
      createdAt: new Date().toISOString()
    };

    const mockUser: User = {
      id: 'u1',
      name: role === UserRole.SUPER_ADMIN ? 'Admin Global' : 'Empresa Admin',
      email: 'admin@example.com',
      role: role,
      tenantId: role === UserRole.SUPER_ADMIN ? null : 't1'
    };

    setCurrentUser(mockUser);
    setCurrentTenant(role === UserRole.SUPER_ADMIN ? null : mockTenant);
    setView(role === UserRole.SUPER_ADMIN ? 'superadmin' : 'dashboard');
  };

  const logout = () => {
    setCurrentUser(null);
    setCurrentTenant(null);
    setView('landing');
  };

  // Basic Router logic
  const renderView = () => {
    if (view === 'landing') return <LandingPage onLogin={() => handleLogin(UserRole.TENANT_ADMIN)} onSuperAdmin={() => handleLogin(UserRole.SUPER_ADMIN)} />;
    
    if (currentUser?.role === UserRole.SUPER_ADMIN) {
      return <SuperAdminDashboard onLogout={logout} />;
    }

    if (currentUser && currentTenant) {
      if (currentTenant.planStatus === SubscriptionStatus.BLOCKED) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md">
              <h1 className="text-2xl font-bold text-red-600 mb-4">Acesso Bloqueado</h1>
              <p className="text-gray-600 mb-6">Sua assinatura está atrasada. Regularize seu pagamento de R$ 24,99 para retomar o acesso.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium" onClick={logout}>Sair</button>
            </div>
          </div>
        );
      }

      return (
        <TenantLayout user={currentUser} tenant={currentTenant} onLogout={logout} setView={setView} currentView={view}>
          {view === 'dashboard' && <TenantDashboard />}
          {view === 'commercial' && <CommercialPage />}
          {view === 'production' && <ProductionPage />}
          {view === 'visual-comm' && <VisualCommPage />}
          {view === 'finance' && <FinancePage />}
          {view === 'inventory' && <InventoryPage />}
        </TenantLayout>
      );
    }

    return <LandingPage onLogin={() => handleLogin(UserRole.TENANT_ADMIN)} onSuperAdmin={() => handleLogin(UserRole.SUPER_ADMIN)} />;
  };

  return (
    <div className="min-h-screen">
      {renderView()}
    </div>
  );
};

export default App;
