// src/app/admin/analytics/sales/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Filter, 
  Download, 
  Calendar, 
  DollarSign, 
  ShoppingBag,
  TrendingUp,
  TrendingDown,
  BarChart
} from 'lucide-react'

interface SalesDataPoint {
  date: string
  revenue: number
  orders: number
  averageOrderValue: number
}

export default function SalesAnalytics() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState('month')
  const [salesData, setSalesData] = useState<SalesDataPoint[]>([])
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: new Date(new Date().setDate(1)).toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0]
  })
  
  // Summary metrics
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [totalOrders, setTotalOrders] = useState(0)
  const [avgOrderValue, setAvgOrderValue] = useState(0)
  const [revenueTrend, setRevenueTrend] = useState(0)
  const [ordersTrend, setOrdersTrend] = useState(0)
  const [aovTrend, setAovTrend] = useState(0)
  
  useEffect(() => {
    const fetchSalesData = async () => {
      setLoading(true)
      
      // In a real app, this would be a Firestore query with date filters
      // For this example, we'll use mock data
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Generate mock data based on time range
      let mockData: SalesDataPoint[] = []
      
      if (timeRange === 'year') {
        // One data point per month for the year
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        mockData = monthNames.map((month, index) => {
          // Generate some realistic looking data with fluctuations
          const baseRevenue = 5000 + Math.random() * 3000
          const baseOrders = 150 + Math.random() * 100
          
          // Add seasonal trends - higher in Q4, lower in Q1
          const seasonalFactor = index < 3 ? 0.8 : 
                                index > 8 ? 1.3 : 1.0
          
          const revenue = baseRevenue * seasonalFactor
          const orders = Math.round(baseOrders * seasonalFactor)
          const aov = revenue / orders
          
          return {
            date: month,
            revenue,
            orders,
            averageOrderValue: aov
          }
        })
        
        // Update date range for year
        const currentYear = new Date().getFullYear()
        setSelectedDateRange({
          start: `${currentYear}-01-01`,
          end: `${currentYear}-12-31`
        })
      }
      else if (timeRange === 'month') {
        // One data point per week for the month
        mockData = [
          { date: 'Week 1', revenue: 1800, orders: 72, averageOrderValue: 25 },
          { date: 'Week 2', revenue: 2200, orders: 88, averageOrderValue: 25 },
          { date: 'Week 3', revenue: 2400, orders: 96, averageOrderValue: 25 },
          { date: 'Week 4', revenue: 2600, orders: 104, averageOrderValue: 25 },
        ]
        
        // Update date range for current month
        const now = new Date()
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0)
        
        setSelectedDateRange({
          start: firstDay.toISOString().split('T')[0],
          end: lastDay.toISOString().split('T')[0]
        })
      }
      else { // week
        // One data point per day for the week
        mockData = [
          { date: 'Mon', revenue: 420, orders: 17, averageOrderValue: 24.71 },
          { date: 'Tue', revenue: 380, orders: 15, averageOrderValue: 25.33 },
          { date: 'Wed', revenue: 450, orders: 18, averageOrderValue: 25.00 },
          { date: 'Thu', revenue: 520, orders: 21, averageOrderValue: 24.76 },
          { date: 'Fri', revenue: 680, orders: 27, averageOrderValue: 25.19 },
          { date: 'Sat', revenue: 750, orders: 30, averageOrderValue: 25.00 },
          { date: 'Sun', revenue: 580, orders: 23, averageOrderValue: 25.22 }
        ]
        
        // Update date range for current week
        const now = new Date()
        const dayOfWeek = now.getDay() // 0 = Sunday, 1 = Monday, ...
        const startDate = new Date(now)
        startDate.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))
        const endDate = new Date(startDate)
        endDate.setDate(startDate.getDate() + 6)
        
        setSelectedDateRange({
          start: startDate.toISOString().split('T')[0],
          end: endDate.toISOString().split('T')[0]
        })
      }
      
      setSalesData(mockData)
      
      // Calculate summary metrics
      const totalRev = mockData.reduce((sum, point) => sum + point.revenue, 0)
      const totalOrd = mockData.reduce((sum, point) => sum + point.orders, 0)
      const aov = totalRev / totalOrd
      
      setTotalRevenue(totalRev)
      setTotalOrders(totalOrd)
      setAvgOrderValue(aov)
      
      // Random trends for demonstration
      setRevenueTrend(timeRange === 'year' ? 15.2 : timeRange === 'month' ? 8.7 : 3.4)
      setOrdersTrend(timeRange === 'year' ? 12.8 : timeRange === 'month' ? 6.3 : 2.1)
      setAovTrend(timeRange === 'year' ? 2.3 : timeRange === 'month' ? 1.5 : 0.7)
      
      setLoading(false)
    }
    
    fetchSalesData()
  }, [timeRange])
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSelectedDateRange(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleFilter = () => {
    // In a real app, this would trigger a new query with the selected date range
    alert(`Filtering data between ${selectedDateRange.start} and ${selectedDateRange.end}`)
    
    // For this example, we'll just reload the mock data
    // We'd normally trigger a new query based on the selected dates
    setTimeRange(timeRange) // Re-trigger the useEffect
  }
  
  const handleExport = (format: string) => {
    // In a real app, this would generate and download the appropriate format
    alert(`Sales data would be exported as ${format.toUpperCase()}`)
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-2">
        <button 
          onClick={() => router.push('/admin/analytics')}
          className="p-2 hover:bg-accentHighlight rounded-full transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-mainText">Sales Analytics</h1>
      </div>
      
      {/* Filter and Controls */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1 flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="text-sm font-medium text-secondaryText whitespace-nowrap">Date Range:</label>
              <div className="flex-1 flex items-center gap-2">
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondaryText" />
                  <input
                    type="date"
                    name="start"
                    value={selectedDateRange.start}
                    onChange={handleDateChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                  />
                </div>
                <span className="text-secondaryText">to</span>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondaryText" />
                  <input
                    type="date"
                    name="end"
                    value={selectedDateRange.end}
                    onChange={handleDateChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleFilter}
                className="px-4 py-2 bg-primaryAction text-white rounded-lg hover:bg-rustOrange transition flex items-center gap-2"
              >
                <Filter size={16} />
                Apply Filters
              </button>
              
              <div className="flex-1 md:flex-none">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => handleExport('csv')}
              className="px-3 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/20 flex items-center gap-1"
            >
              <Download size={16} />
              CSV
            </button>
            <button 
              onClick={() => handleExport('pdf')}
              className="px-3 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/20 flex items-center gap-1"
            >
              <Download size={16} />
              PDF
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Revenue Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-primaryAction/20 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-primaryAction" />
            </div>
            <div className="flex items-center">
              {revenueTrend > 0 ? (
                <span className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +{revenueTrend}%
                </span>
              ) : (
                <span className="text-xs text-red-600 flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  {revenueTrend}%
                </span>
              )}
            </div>
          </div>
          
          <h3 className="text-sm text-secondaryText mb-1">Total Revenue</h3>
          <div className="text-2xl font-bold text-mainText">${totalRevenue.toFixed(2)}</div>
        </div>
        
        {/* Orders Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-secondaryButtonIcon/20 flex items-center justify-center">
              <ShoppingBag className="h-6 w-6 text-secondaryButtonIcon" />
            </div>
            <div className="flex items-center">
              {ordersTrend > 0 ? (
                <span className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +{ordersTrend}%
                </span>
              ) : (
                <span className="text-xs text-red-600 flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  {ordersTrend}%
                </span>
              )}
            </div>
          </div>
          
          <h3 className="text-sm text-secondaryText mb-1">Total Orders</h3>
          <div className="text-2xl font-bold text-mainText">{totalOrders}</div>
        </div>
        
        {/* AOV Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-headerNavigation/20 flex items-center justify-center">
              <BarChart className="h-6 w-6 text-headerNavigation" />
            </div>
            <div className="flex items-center">
              {aovTrend > 0 ? (
                <span className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +{aovTrend}%
                </span>
              ) : (
                <span className="text-xs text-red-600 flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  {aovTrend}%
                </span>
              )}
            </div>
          </div>
          
          <h3 className="text-sm text-secondaryText mb-1">Average Order Value</h3>
          <div className="text-2xl font-bold text-mainText">${avgOrderValue.toFixed(2)}</div>
        </div>
      </motion.div>
      
      {/* Sales Chart */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-mainText">Sales Trends</h2>
          <div className="flex items-center text-xs text-secondaryText">
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-primaryAction rounded-full mr-1"></div>
              <span>Revenue</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-secondaryButtonIcon rounded-full mr-1"></div>
              <span>Orders</span>
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="h-80 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="h-80 relative">
            {/* Chart Container */}
            <div className="absolute inset-0 pt-4 pb-12 pl-12 pr-8">
              {/* Y-axis Line */}
              <div className="absolute left-12 top-0 bottom-12 w-0.5 bg-accentHighlight/30"></div>
              
              {/* X-axis Line */}
              <div className="absolute left-12 right-8 bottom-12 h-0.5 bg-accentHighlight/30"></div>
              
              {/* Y-axis Labels - Revenue */}
              <div className="absolute left-0 top-0 bottom-12 flex flex-col justify-between text-xs text-secondaryText">
                <div>${Math.max(...salesData.map(d => d.revenue))}</div>
                <div>${Math.max(...salesData.map(d => d.revenue)) / 2}</div>
                <div>$0</div>
              </div>
              
              {/* X-axis Labels */}
              <div className="absolute left-12 right-8 bottom-0 flex justify-between">
                {salesData.map((data, index) => (
                  <div key={index} className="text-xs text-secondaryText -ml-3">{data.date}</div>
                ))}
              </div>
              
              {/* Data Points */}
              <div className="absolute left-12 right-8 top-0 bottom-12">
                {/* Revenue Line */}
                <svg className="w-full h-full">
                  <path
                    d={`M ${salesData.map((data, index) => {
                      const x = (index / (salesData.length - 1)) * 100;
                      const y = 100 - ((data.revenue / Math.max(...salesData.map(d => d.revenue))) * 100);
                      return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`;
                    }).join(' ')}`}
                    stroke="#C15A28" // primaryAction
                    strokeWidth="3"
                    fill="none"
                  />
                  
                  {/* Revenue Data Points */}
                  {salesData.map((data, index) => {
                    const x = (index / (salesData.length - 1)) * 100;
                    const y = 100 - ((data.revenue / Math.max(...salesData.map(d => d.revenue))) * 100);
                    return (
                      <circle
                        key={`revenue-${index}`}
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r="4"
                        fill="#C15A28" // primaryAction
                      />
                    );
                  })}
                  
                  {/* Orders Line */}
                  <path
                    d={`M ${salesData.map((data, index) => {
                      const x = (index / (salesData.length - 1)) * 100;
                      const y = 100 - ((data.orders / Math.max(...salesData.map(d => d.orders))) * 100);
                      return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`;
                    }).join(' ')}`}
                    stroke="#FCBD38" // secondaryButtonIcon
                    strokeWidth="3"
                    fill="none"
                  />
                  
                  {/* Orders Data Points */}
                  {salesData.map((data, index) => {
                    const x = (index / (salesData.length - 1)) * 100;
                    const y = 100 - ((data.orders / Math.max(...salesData.map(d => d.orders))) * 100);
                    return (
                      <circle
                        key={`orders-${index}`}
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r="4"
                        fill="#FCBD38" // secondaryButtonIcon
                      />
                    );
                  })}
                </svg>
              </div>
              
              {/* Right Y-axis Labels - Orders */}
              <div className="absolute right-0 top-0 bottom-12 flex flex-col justify-between text-xs text-secondaryText">
                <div>{Math.max(...salesData.map(d => d.orders))}</div>
                <div>{Math.max(...salesData.map(d => d.orders)) / 2}</div>
                <div>0</div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      
      {/* Detailed Sales Data */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-mainText">Detailed Sales Data</h2>
        </div>
        
        {loading ? (
          <div className="p-12 text-center">
            <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-secondaryText">Loading sales data...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-accentHighlight/20">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Period</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Orders</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Avg. Order Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {salesData.map((data, index) => (
                  <tr key={index} className="hover:bg-accentHighlight/10">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-mainText">
                      {data.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-mainText">
                      ${data.revenue.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-mainText">
                      {data.orders}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-mainText">
                      ${data.averageOrderValue.toFixed(2)}
                    </td>
                  </tr>
                ))}
                
                {/* Total Row */}
                <tr className="bg-accentHighlight/30">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-mainText">
                    TOTAL
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right text-mainText">
                    ${totalRevenue.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right text-mainText">
                    {totalOrders}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right text-mainText">
                    ${avgOrderValue.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </div>
  )
}