// src/app/admin/analytics/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart4, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  Filter, 
  Download,
  Printer,
  Share2
} from 'lucide-react'

interface SalesData {
  period: string
  revenue: number
  orders: number
}

interface CategorySales {
  category: string
  sales: number
  percentage: number
}

interface TopBook {
  id: string
  title: string
  sales: number
  revenue: number
}

interface BookLanguage {
  language: string
  count: number
  percentage: number
}

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('month')
  const [salesData, setSalesData] = useState<SalesData[]>([])
  const [categorySales, setCategorySales] = useState<CategorySales[]>([])
  const [topBooks, setTopBooks] = useState<TopBook[]>([])
  const [languages, setLanguages] = useState<BookLanguage[]>([])
  const [loading, setLoading] = useState(true)
  
  // Total metrics
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [totalOrders, setTotalOrders] = useState(0)
  const [revenueTrend, setRevenueTrend] = useState(0)
  const [ordersTrend, setOrdersTrend] = useState(0)
  
  useEffect(() => {
    const fetchAnalyticsData = async () => {
      setLoading(true)
      
      // In a real app, fetch data from Firebase/API based on timeRange
      // For this example, we'll use mock data
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1200))
      
      // --- MOCK DATA ---
      
      // Sales Data by Time period
      const mockSalesData: SalesData[] = timeRange === 'year' 
        ? [
            { period: 'Jan', revenue: 1200, orders: 48 },
            { period: 'Feb', revenue: 1400, orders: 56 },
            { period: 'Mar', revenue: 1100, orders: 44 },
            { period: 'Apr', revenue: 1600, orders: 64 },
            { period: 'May', revenue: 1800, orders: 72 },
            { period: 'Jun', revenue: 2100, orders: 84 },
            { period: 'Jul', revenue: 1900, orders: 76 },
            { period: 'Aug', revenue: 2200, orders: 88 },
            { period: 'Sep', revenue: 2400, orders: 96 },
            { period: 'Oct', revenue: 2600, orders: 104 },
            { period: 'Nov', revenue: 2800, orders: 112 },
            { period: 'Dec', revenue: 3000, orders: 120 }
          ]
        : timeRange === 'week' 
        ? [
            { period: 'Mon', revenue: 420, orders: 17 },
            { period: 'Tue', revenue: 380, orders: 15 },
            { period: 'Wed', revenue: 450, orders: 18 },
            { period: 'Thu', revenue: 520, orders: 21 },
            { period: 'Fri', revenue: 680, orders: 27 },
            { period: 'Sat', revenue: 750, orders: 30 },
            { period: 'Sun', revenue: 580, orders: 23 }
          ]
        : [ // month
            { period: '1-7', revenue: 1800, orders: 72 },
            { period: '8-14', revenue: 2200, orders: 88 },
            { period: '15-21', revenue: 2400, orders: 96 },
            { period: '22-31', revenue: 2600, orders: 104 }
          ]
      
      // Category Sales
      const mockCategorySales: CategorySales[] = [
        { category: 'Storybook', sales: 245, percentage: 42 },
        { category: 'Educational', sales: 180, percentage: 31 },
        { category: 'Poetry', sales: 85, percentage: 15 },
        { category: 'Activity', sales: 70, percentage: 12 }
      ]
      
      // Top Selling Books
      const mockTopBooks: TopBook[] = [
        { id: 'book1', title: 'The Magical Forest', sales: 48, revenue: 623.52 },
        { id: 'book2', title: 'Ocean Adventures', sales: 42, revenue: 629.58 },
        { id: 'book3', title: 'Counting Stars', sales: 39, revenue: 390.00 },
        { id: 'book4', title: 'Animal Friends', sales: 36, revenue: 431.64 },
        { id: 'book5', title: 'Learning Numbers', sales: 33, revenue: 296.67 }
      ]
      
      // Languages
      const mockLanguages: BookLanguage[] = [
        { language: 'English', count: 65, percentage: 38 },
        { language: 'Arabic', count: 45, percentage: 26 },
        { language: 'Japanese', count: 25, percentage: 15 },
        { language: 'Malayalam', count: 20, percentage: 12 },
        { language: 'Kannada', count: 15, percentage: 9 }
      ]
      
      // Calculate totals and trends
      const totalRev = mockSalesData.reduce((sum, period) => sum + period.revenue, 0)
      const totalOrd = mockSalesData.reduce((sum, period) => sum + period.orders, 0)
      
      // Set state with mock data
      setSalesData(mockSalesData)
      setCategorySales(mockCategorySales)
      setTopBooks(mockTopBooks)
      setLanguages(mockLanguages)
      setTotalRevenue(totalRev)
      setTotalOrders(totalOrd)
      
      // Random trends for demonstration
      setRevenueTrend(timeRange === 'year' ? 15.2 : timeRange === 'month' ? 8.7 : 3.4)
      setOrdersTrend(timeRange === 'year' ? 12.8 : timeRange === 'month' ? 6.3 : 2.1)
      
      setLoading(false)
    }
    
    fetchAnalyticsData()
  }, [timeRange])
  
  const handleExport = (format: 'pdf' | 'csv' | 'png') => {
    // In a real app, this would generate and download appropriate format
    alert(`Analytics would be exported as ${format.toUpperCase()}`)
  }
  
  const handlePrint = () => {
    window.print()
  }
  
  return (
    <div className="space-y-6 no-print">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
      >
        <h1 className="text-2xl font-bold text-mainText">Analytics Dashboard</h1>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-secondaryText" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => handleExport('pdf')}
              className="px-3 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/20 flex items-center gap-1"
              title="Export as PDF"
            >
              <Download size={16} />
              <span className="hidden sm:inline">PDF</span>
            </button>
            <button 
              onClick={() => handleExport('csv')}
              className="px-3 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/20 flex items-center gap-1"
              title="Export as CSV"
            >
              <Download size={16} />
              <span className="hidden sm:inline">CSV</span>
            </button>
            <button 
              onClick={handlePrint}
              className="px-3 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/20 flex items-center gap-1"
              title="Print Report"
            >
              <Printer size={16} />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Revenue Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-mainText">Total Revenue</h2>
            <BarChart4 className="h-6 w-6 text-secondaryText" />
          </div>
          
          <div className="flex items-end justify-between">
            <div>
              <div className="text-3xl font-bold text-mainText">${totalRevenue.toFixed(2)}</div>
              <div className="flex items-center mt-1">
                {revenueTrend > 0 ? (
                  <>
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">+{revenueTrend}% {timeRange === 'year' ? 'this year' : timeRange === 'month' ? 'this month' : 'this week'}</span>
                  </>
                ) : (
                  <>
                    <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                    <span className="text-sm text-red-600">{revenueTrend}% {timeRange === 'year' ? 'this year' : timeRange === 'month' ? 'this month' : 'this week'}</span>
                  </>
                )}
              </div>
            </div>
            
            {/* Simplified Bar Chart */}
            <div className="flex items-end h-16 gap-1">
              {salesData.slice(-5).map((data, index) => (
                <div 
                  key={index}
                  className="w-6 bg-primaryAction bg-opacity-80 rounded-t" 
                  style={{ 
                    height: `${(data.revenue / Math.max(...salesData.map(d => d.revenue)) * 100)}%`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Orders Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-mainText">Total Orders</h2>
            <LineChart className="h-6 w-6 text-secondaryText" />
          </div>
          
          <div className="flex items-end justify-between">
            <div>
              <div className="text-3xl font-bold text-mainText">{totalOrders}</div>
              <div className="flex items-center mt-1">
                {ordersTrend > 0 ? (
                  <>
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">+{ordersTrend}% {timeRange === 'year' ? 'this year' : timeRange === 'month' ? 'this month' : 'this week'}</span>
                  </>
                ) : (
                  <>
                    <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                    <span className="text-sm text-red-600">{ordersTrend}% {timeRange === 'year' ? 'this year' : timeRange === 'month' ? 'this month' : 'this week'}</span>
                  </>
                )}
              </div>
            </div>
            
            {/* Simplified Line Chart */}
            <div className="flex items-end h-16 gap-1">
              {salesData.slice(-5).map((data, index, array) => {
                const currentHeight = (data.orders / Math.max(...salesData.map(d => d.orders)) * 100);
                const prevHeight = index > 0 
                  ? (array[index-1].orders / Math.max(...salesData.map(d => d.orders)) * 100)
                  : currentHeight;
                
                return (
                  <div key={index} className="w-6 flex items-end justify-center">
                    <div 
                      className="w-1.5 bg-secondaryButtonIcon rounded-full"
                      style={{ height: `${currentHeight}%` }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
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
          <h2 className="text-lg font-semibold text-mainText">Sales Overview</h2>
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
          <div className="h-64 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="h-64 flex items-end relative">
            {/* X-axis Line */}
            <div className="absolute left-0 right-0 bottom-8 h-0.5 bg-accentHighlight/30"></div>
            
            {/* Y-axis Labels - Revenue */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-secondaryText">
              <div>${Math.max(...salesData.map(d => d.revenue))}</div>
              <div>${Math.max(...salesData.map(d => d.revenue)) / 2}</div>
              <div>$0</div>
            </div>
            
            {/* Data columns */}
            <div className="flex-1 flex justify-around items-end h-full pl-12 pb-12">
              {salesData.map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Revenue Bar */}
                  <div 
                    className="w-8 bg-primaryAction bg-opacity-80 rounded-t mb-1 transition-all duration-500"
                    style={{ 
                      height: `${(data.revenue / Math.max(...salesData.map(d => d.revenue)) * 100) * 0.8}%`,
                    }}
                  ></div>
                  
                  {/* Orders Bar */}
                  <div 
                    className="w-8 bg-secondaryButtonIcon bg-opacity-80 rounded-t transition-all duration-500"
                    style={{ 
                      height: `${(data.orders / Math.max(...salesData.map(d => d.orders)) * 100) * 0.4}%`,
                    }}
                  ></div>
                  
                  {/* X-axis Label */}
                  <div className="mt-2 text-xs text-secondaryText whitespace-nowrap">{data.period}</div>
                </div>
              ))}
            </div>
            
            {/* Y-axis Labels - Orders (right side) */}
            <div className="absolute right-0 top-0 bottom-8 flex flex-col justify-between text-xs text-secondaryText">
              <div>{Math.max(...salesData.map(d => d.orders))}</div>
              <div>{Math.max(...salesData.map(d => d.orders)) / 2}</div>
              <div>0</div>
            </div>
          </div>
        )}
      </motion.div>
      
      {/* Category Distribution and Top Books */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-mainText">Category Distribution</h2>
            <PieChart className="h-5 w-5 text-secondaryText" />
          </div>
          
          {loading ? (
            <div className="h-48 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              {categorySales.map((category, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-mainText">{category.category}</span>
                    <span className="text-sm text-secondaryText">{category.sales} sales ({category.percentage}%)</span>
                  </div>
                  <div className="w-full bg-accentHighlight/30 rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full" 
                      style={{ 
                        width: `${category.percentage}%`,
                        backgroundColor: index === 0 ? '#1D4E6F' :  // headerNavigation
                                        index === 1 ? '#C15A28' :  // primaryAction 
                                        index === 2 ? '#FCBD38' :  // secondaryButtonIcon
                                        '#9DCFD9'                  // accentHighlight
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
        
        {/* Top Selling Books */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-mainText">Top Selling Books</h2>
            <div className="flex items-center text-xs text-secondaryText bg-accentHighlight/20 px-2 py-1 rounded">
              {timeRange === 'year' ? 'Yearly' : timeRange === 'month' ? 'Monthly' : 'Weekly'} Bestsellers
            </div>
          </div>
          
          {loading ? (
            <div className="h-48 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {topBooks.map((book, index) => (
                <div key={book.id} className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accentHighlight/50 text-mainText text-xs font-medium mr-3">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-mainText">{book.title}</div>
                    <div className="text-xs text-secondaryText">{book.sales} copies sold • ${book.revenue.toFixed(2)} revenue</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Language Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-mainText">Language Distribution</h2>
          <div className="text-xs text-secondaryText flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-headerNavigation"></span>
            Current Inventory
          </div>
        </div>
        
        {loading ? (
          <div className="h-48 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {languages.map((lang, index) => (
              <div key={lang.language} className="flex flex-col items-center">
                <div className="relative w-full h-32 flex flex-col items-center justify-end">
                  <div 
                    className="absolute bottom-0 w-16 bg-headerNavigation opacity-80 rounded-t transition-all duration-500"
                    style={{ height: `${lang.percentage * 2.5}%` }}
                  ></div>
                  <div className="absolute bottom-0 mb-2 text-xs font-semibold text-white">
                    {lang.percentage}%
                  </div>
                </div>
                <div className="mt-2 text-sm font-medium text-mainText">{lang.language}</div>
                <div className="text-xs text-secondaryText">{lang.count} books</div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}