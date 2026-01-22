import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { USER_TREES, USER_ORDERS } from '../data';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../lib/firebase';

const HYDRATION_DATA = [
  { day: 'Mon', level: 45 },
  { day: 'Tue', level: 60 },
  { day: 'Wed', level: 75 },
  { day: 'Thu', level: 50 },
  { day: 'Fri', level: 30 },
  { day: 'Sat', level: 80 },
  { day: 'Sun', level: 65 },
];

export const DashboardPage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading || !user) {
    return <div className="min-h-screen bg-background-dark flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen py-8 md:py-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-surface-dark rounded-xl p-6 border border-[#2f3231] flex flex-col items-center text-center">
            <div className="size-20 rounded-full bg-gradient-to-br from-primary to-[#2a403a] flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
              <span className="text-2xl font-bold text-white font-body">EF</span>
            </div>
            <h2 className="text-xl font-bold text-white">{user?.displayName || 'Gardener'}</h2>
            <p className="text-text-muted text-sm font-body mb-4">Member since 2021</p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/30">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              Master Gardener
            </span>
          </div>
          <nav className="bg-surface-dark rounded-xl p-4 border border-[#2f3231]">
            <ul className="space-y-1">
              {['My Zen Garden', 'My Collection', 'Order History', 'Wishlist'].map((item, i) => (
                <li key={i}><a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all text-sm ${i === 0 ? 'bg-primary text-white shadow-md shadow-primary/10' : 'text-text-muted hover:text-white hover:bg-surface-light'}`}>{item}</a></li>
              ))}
              <li className="pt-4 mt-4 border-t border-[#2f3231]"></li>
              {['Account Settings', 'Addresses', 'Payment Methods'].map((item, i) => (
                <li key={i}><a href="#" className="flex items-center gap-3 px-4 py-3 text-text-muted hover:text-white hover:bg-surface-light rounded-lg font-medium transition-colors font-body text-sm">{item}</a></li>
              ))}
              <li><button onClick={() => auth.signOut()} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-900/10 rounded-lg font-medium transition-colors font-body text-sm text-left">Sign Out</button></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Welcome back, {user?.displayName?.split(' ')[0] || 'Gardener'}</h2>
              <p className="text-text-muted font-body">Here is what's happening in your garden today.</p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 bg-surface-dark border border-[#2f3231] rounded-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-success">eco</span>
                <div className="flex flex-col"><span className="text-xs text-text-muted uppercase font-bold">Active Trees</span><span className="text-white font-bold text-lg leading-none">4</span></div>
              </div>
              <div className="px-4 py-2 bg-surface-dark border border-[#2f3231] rounded-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-warning">water_drop</span>
                <div className="flex flex-col"><span className="text-xs text-text-muted uppercase font-bold">Needs Water</span><span className="text-white font-bold text-lg leading-none">1</span></div>
              </div>
            </div>
          </div>

          {/* Collection Status */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2"><span className="material-symbols-outlined text-primary">psychiatry</span> My Collection Status</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {USER_TREES.map((tree) => (
                <div key={tree.id} className={`bg-surface-dark rounded-xl overflow-hidden border ${tree.status === 'Thirsty' ? 'border-primary/40 shadow-[0_0_15px_rgba(59,89,81,0.15)]' : 'border-[#2f3231]'} group transition-all`}>
                  <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: `url("${tree.image}")` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
                    <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 ${tree.status === 'Thirsty' ? 'bg-warning text-black' : 'bg-success/20 text-success border border-success/20'}`}>
                      <span className="material-symbols-outlined text-sm">{tree.status === 'Thirsty' ? 'water_drop' : 'check_circle'}</span> {tree.status}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <div><h4 className="text-lg font-bold text-white">{tree.name}</h4><p className="text-xs text-text-muted">Acquired: {tree.acquired}</p></div>
                    </div>
                    <div className="space-y-3 mt-4">
                      <div className="flex justify-between items-center text-sm font-body"><span className="text-text-muted">Health Status</span><span className={`flex items-center gap-1 ${tree.health === 'Thriving' ? 'text-success' : 'text-success'}`}><span className="size-2 rounded-full bg-current"></span> {tree.health}</span></div>
                      <div className="flex justify-between items-center text-sm font-body"><span className="text-text-muted">Last Watered</span><span className="text-white">{tree.lastWatered}</span></div>
                      <div className="w-full bg-background-dark rounded-full h-1.5 mt-2"><div className={`h-1.5 rounded-full ${tree.moistureLevel < 30 ? 'bg-warning' : 'bg-success'}`} style={{ width: `${tree.moistureLevel}%` }}></div></div>
                    </div>
                    <button className={`w-full mt-5 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors ${tree.status === 'Thirsty' ? 'bg-primary hover:bg-primary-hover text-white' : 'bg-surface-light hover:bg-[#353a39] text-text-muted hover:text-white'}`}>
                      <span className="material-symbols-outlined text-lg">{tree.status === 'Thirsty' ? 'water_drop' : 'history'}</span> {tree.status === 'Thirsty' ? 'Log Watering' : 'View History'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hydration Chart & Orders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recharts Component */}
            <section className="bg-surface-dark rounded-xl border border-[#2f3231] p-6">
              <h3 className="text-xl font-bold text-white mb-6">Hydration History (Avg)</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={HYDRATION_DATA}>
                    <XAxis dataKey="day" stroke="#a7aeac" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1f2423', border: '1px solid #3f4241', borderRadius: '8px' }}
                      itemStyle={{ color: '#e0e0e0' }}
                      cursor={{ fill: '#2a2f2e' }}
                    />
                    <Bar dataKey="level" radius={[4, 4, 0, 0]}>
                      {HYDRATION_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.level < 40 ? '#facc15' : '#3b5951'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="bg-surface-dark rounded-xl border border-[#2f3231] p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Recent Orders</h3>
                <a href="#" className="text-xs font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-wider">View All</a>
              </div>
              <div className="space-y-4">
                {USER_ORDERS.map(order => (
                  <div key={order.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-background-dark transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded bg-[#2f3231] flex items-center justify-center text-primary"><span className="material-symbols-outlined">package_2</span></div>
                      <div><p className="text-white font-bold text-sm group-hover:text-primary transition-colors">{order.id}</p><p className="text-text-muted text-xs">{order.date}</p></div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-sm">${order.total.toFixed(2)}</p>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${order.status === 'Delivered' ? 'text-success bg-success/10' : 'text-warning bg-warning/10'}`}>{order.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};