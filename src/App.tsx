import React from 'react';
import './App.css';
import BillingHistory from './containers/BillingHistory/BillingHistory';
import PaymentMethod from './containers/payment_method/PaymentMethod';
import AdminLayout from './layout/admin/admin_layout';

function App() {
  return (
    <div className="App">
      <AdminLayout title="Settings" description="Manage your team and preferences here">
        <PaymentMethod />
        <BillingHistory />
      </AdminLayout>
    </div>
  );
}

export default App;
