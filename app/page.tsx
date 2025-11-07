"use client";

import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, PieChart as PieChartIcon, AlertCircle } from 'lucide-react';

const investmentData = [
  { name: 'Large Cap Equity', value: 35000, percentage: 23.33, color: '#3B82F6', expectedReturn: '12-15%' },
  { name: 'Mid Cap Equity', value: 25000, percentage: 16.67, color: '#10B981', expectedReturn: '15-18%' },
  { name: 'Small Cap Equity', value: 15000, percentage: 10, color: '#F59E0B', expectedReturn: '18-22%' },
  { name: 'Debt/Bonds', value: 25000, percentage: 16.67, color: '#6366F1', expectedReturn: '7-9%' },
  { name: 'Gold ETF', value: 15000, percentage: 10, color: '#EAB308', expectedReturn: '8-10%' },
  { name: 'International ETF', value: 15000, percentage: 10, color: '#EC4899', expectedReturn: '10-14%' },
  { name: 'Cryptocurrency', value: 12000, percentage: 8, color: '#8B5CF6', expectedReturn: '20-40%' },
  { name: 'Emergency Fund', value: 8000, percentage: 5.33, color: '#14B8A6', expectedReturn: '4-6%' },
];

const sectorBreakdown = [
  { sector: 'Technology', allocation: 22000, percentage: 14.67 },
  { sector: 'Financial Services', allocation: 18000, percentage: 12 },
  { sector: 'Healthcare', allocation: 15000, percentage: 10 },
  { sector: 'Consumer Goods', allocation: 12000, percentage: 8 },
  { sector: 'Energy', allocation: 10000, percentage: 6.67 },
  { sector: 'Infrastructure', allocation: 10000, percentage: 6.67 },
  { sector: 'Others', allocation: 13000, percentage: 8.67 },
];

const etfRecommendations = [
  {
    name: 'Nifty 50 ETF',
    ticker: 'NIFTYBEES',
    allocation: 20000,
    description: 'Tracks top 50 Indian companies',
    expenseRatio: '0.05%',
    returns: '12-14% annually'
  },
  {
    name: 'Nifty Next 50 ETF',
    ticker: 'JUNIORBEES',
    allocation: 12000,
    description: 'Mid-cap growth opportunities',
    expenseRatio: '0.48%',
    returns: '14-16% annually'
  },
  {
    name: 'Gold BeES',
    ticker: 'GOLDBEES',
    allocation: 15000,
    description: 'Digital gold investment',
    expenseRatio: '1.00%',
    returns: '8-10% annually'
  },
  {
    name: 'Nasdaq 100 ETF',
    ticker: 'NASDQ100',
    allocation: 15000,
    description: 'US tech giants exposure',
    expenseRatio: '0.81%',
    returns: '12-18% annually'
  },
];

const cryptoRecommendations = [
  {
    name: 'Bitcoin (BTC)',
    allocation: 6000,
    percentage: 50,
    description: 'Market leader, digital gold',
    risk: 'Medium-High',
    expectedReturn: '30-50% annually'
  },
  {
    name: 'Ethereum (ETH)',
    allocation: 4000,
    percentage: 33.33,
    description: 'Smart contract platform',
    risk: 'Medium-High',
    expectedReturn: '35-60% annually'
  },
  {
    name: 'Solana (SOL)',
    allocation: 2000,
    percentage: 16.67,
    description: 'High-speed blockchain',
    risk: 'High',
    expectedReturn: '40-80% annually'
  },
];

const projectedReturns = [
  { year: 'Year 1', conservative: 162000, moderate: 171000, aggressive: 180000 },
  { year: 'Year 2', conservative: 175000, moderate: 195000, aggressive: 216000 },
  { year: 'Year 3', conservative: 189000, moderate: 222000, aggressive: 259000 },
  { year: 'Year 5', conservative: 222000, moderate: 288000, aggressive: 373000 },
  { year: 'Year 10', conservative: 327000, moderate: 495000, aggressive: 743000 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Investment Portfolio Strategy
          </h1>
          <p className="text-xl text-gray-300">Smart allocation of ₹1,50,000 for optimal returns</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-blue-500/20 px-6 py-3 rounded-full border border-blue-500/30">
            <DollarSign className="w-6 h-6 text-green-400" />
            <span className="text-2xl font-bold">₹1,50,000</span>
          </div>
        </div>

        {/* Main Allocation Pie Chart */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <PieChartIcon className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Portfolio Allocation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={investmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {investmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="space-y-3">
              {investmentData.map((item) => (
                <div key={item.name} className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                      <span className="font-semibold">{item.name}</span>
                    </div>
                    <span className="text-emerald-400 font-bold">{item.expectedReturn}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>₹{item.value.toLocaleString('en-IN')}</span>
                    <span>{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sector Allocation */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-3xl font-bold mb-6">Sector-wise Distribution</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={sectorBreakdown}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="sector" stroke="#9ca3af" angle={-15} textAnchor="end" height={80} />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`}
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="allocation" fill="#3B82F6" name="Investment Amount (₹)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ETF Recommendations */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold">Recommended ETFs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {etfRecommendations.map((etf) => (
              <div key={etf.ticker} className="bg-gradient-to-br from-blue-500/20 to-emerald-500/20 p-6 rounded-xl border border-blue-500/30">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-blue-300">{etf.name}</h3>
                    <p className="text-sm text-gray-400">{etf.ticker}</p>
                  </div>
                  <span className="bg-emerald-500/30 px-4 py-1 rounded-full text-emerald-300 font-bold">
                    ₹{etf.allocation.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-gray-300 mb-3">{etf.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Expense Ratio:</span>
                    <p className="font-semibold text-yellow-400">{etf.expenseRatio}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Expected Returns:</span>
                    <p className="font-semibold text-emerald-400">{etf.returns}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crypto Recommendations */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <h2 className="text-3xl font-bold">Cryptocurrency Allocation (₹12,000)</h2>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-yellow-400 mb-1">High Risk Asset Class</p>
              <p className="text-sm text-gray-300">Only invest what you can afford to lose. Crypto markets are highly volatile. Consider this as 8% of total portfolio for diversification.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cryptoRecommendations.map((crypto) => (
              <div key={crypto.name} className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-purple-500/30">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-purple-300 mb-1">{crypto.name}</h3>
                  <p className="text-2xl font-bold text-white">₹{crypto.allocation.toLocaleString('en-IN')}</p>
                  <p className="text-sm text-gray-400">{crypto.percentage}% of crypto allocation</p>
                </div>
                <p className="text-gray-300 mb-3 text-sm">{crypto.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk Level:</span>
                    <span className="font-semibold text-red-400">{crypto.risk}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected Return:</span>
                    <span className="font-semibold text-emerald-400">{crypto.expectedReturn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projected Returns */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-3xl font-bold mb-6">Projected Portfolio Growth</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={projectedReturns}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="year" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`}
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="conservative" fill="#6366F1" name="Conservative (8-10%)" />
              <Bar dataKey="moderate" fill="#10B981" name="Moderate (12-15%)" />
              <Bar dataKey="aggressive" fill="#F59E0B" name="Aggressive (18-22%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-3xl font-bold mb-6">Investment Strategy Insights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-400 mb-2">✓ Diversified Approach</h3>
                <p className="text-sm text-gray-300">Portfolio spread across equity, debt, gold, international markets, and crypto for risk mitigation.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-400 mb-2">✓ Growth Focus</h3>
                <p className="text-sm text-gray-300">50% allocation in equity (Large, Mid, Small cap) for long-term wealth creation.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-400 mb-2">✓ International Exposure</h3>
                <p className="text-sm text-gray-300">10% in Nasdaq ETF provides dollar-denominated assets and global tech exposure.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-bold text-blue-400 mb-2">⚡ Safety Net</h3>
                <p className="text-sm text-gray-300">₹8,000 emergency fund in liquid instruments for immediate needs.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-bold text-blue-400 mb-2">⚡ Gold Hedge</h3>
                <p className="text-sm text-gray-300">10% in Gold ETF acts as portfolio stabilizer during market volatility.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-bold text-purple-400 mb-2">⚡ Future-Ready</h3>
                <p className="text-sm text-gray-300">8% crypto allocation for high-risk, high-reward exposure to digital assets.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-500/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="font-bold text-xl mb-3 text-blue-300">Investment Timeline</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• <strong>Short-term (0-1 year):</strong> Maintain emergency fund, start SIP in equity ETFs</li>
              <li>• <strong>Medium-term (1-3 years):</strong> Continue SIPs, review and rebalance quarterly</li>
              <li>• <strong>Long-term (5+ years):</strong> Hold equity positions, benefit from compounding</li>
              <li>• <strong>Rebalancing:</strong> Review portfolio every 6 months and rebalance if any asset exceeds ±5% of target allocation</li>
            </ul>
          </div>
        </div>

        <footer className="text-center mt-12 text-gray-400 text-sm">
          <p>⚠️ This is a suggested portfolio allocation. Past performance does not guarantee future returns.</p>
          <p className="mt-2">Please consult with a SEBI registered financial advisor before making investment decisions.</p>
        </footer>
      </div>
    </div>
  );
}
