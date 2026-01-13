
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  TENANT_ADMIN = 'TENANT_ADMIN',
  SALES = 'SALES',
  PRODUCTION = 'PRODUCTION',
  FINANCE = 'FINANCE'
}

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  PAST_DUE = 'PAST_DUE',
  BLOCKED = 'BLOCKED'
}

export interface Tenant {
  id: string;
  name: string;
  domain: string;
  planStatus: SubscriptionStatus;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  tenantId: string | null;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  total: number;
  status: 'PENDING' | 'IN_PRODUCTION' | 'COMPLETED' | 'CANCELLED';
  type: 'PRINT' | 'VISUAL_COMM';
  createdAt: string;
  description: string;
}

export interface Material {
  id: string;
  name: string;
  unit: string;
  stock: number;
  minStock: number;
  pricePerUnit: number;
}
