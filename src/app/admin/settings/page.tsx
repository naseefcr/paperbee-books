// src/app/admin/settings/page.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Save,
  CreditCard,
  Mail,
  ShoppingBag,
  Globe,
  Palette,
  BookOpen,
  Users,
  Bell
} from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [saving, setSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  
  // General Settings
  const [generalSettings, setGeneralSettings] = useState({
    storeName: 'Paperbee Books',
    storeEmail: 'paperbeebook@gmail.com',
    storePhone: '8590885155',
    currency: 'USD',
    secondaryCurrency: 'INR',
    weightUnit: 'kg',
    dateFormat: 'MM/DD/YYYY',
    enableMultilingual: true
  })
  
  // Payment Settings
  const [paymentSettings, setPaymentSettings] = useState({
    enableStripe: true,
    stripePublishableKey: 'pk_test_sample_key',
    stripeSecretKey: 'sk_test_•••••••••••••••••',
    enablePayPal: false,
    payPalClientId: '',
    payPalSecret: '',
    enableCashOnDelivery: true
  })
  
  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    orderConfirmation: true,
    orderShipped: true,
    orderDelivered: true,
    lowStockAlert: true,
    lowStockThreshold: 5,
    newsletterSignup: true,
    adminEmails: ['john@paperbee.com', 'sarah@paperbee.com'],
    newOrderNotification: true
  })
  
  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setGeneralSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }
  
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setPaymentSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  
  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    
    if (name === 'lowStockThreshold') {
      // Ensure it's a positive number
      const numValue = Math.max(1, parseInt(value) || 1)
      setNotificationSettings(prev => ({
        ...prev,
        [name]: numValue
      }))
    } else {
      setNotificationSettings(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }
  }
  
  const addAdminEmail = () => {
    const newEmail = prompt('Enter email address:')
    if (newEmail && /^\S+@\S+\.\S+$/.test(newEmail)) {
      setNotificationSettings(prev => ({
        ...prev,
        adminEmails: [...prev.adminEmails, newEmail]
      }))
    } else if (newEmail) {
      alert('Please enter a valid email address')
    }
  }
  
  const removeAdminEmail = (email: string) => {
    setNotificationSettings(prev => ({
      ...prev,
      adminEmails: prev.adminEmails.filter(e => e !== email)
    }))
  }
  
  const handleSaveSettings = async () => {
    setSaving(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real app, this would save to Firestore or other backend
    
    setSaving(false)
    setSuccessMessage('Settings saved successfully')
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage(null)
    }, 3000)
  }
  
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-2xl font-bold text-mainText">Settings</h1>
        <button
          onClick={handleSaveSettings}
          disabled={saving}
          className="px-4 py-2 bg-primaryAction text-white rounded-lg hover:bg-rustOrange transition flex items-center gap-2 disabled:opacity-50"
        >
          <Save size={16} />
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </motion.div>
      
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 text-green-800 p-4 rounded-lg"
        >
          {successMessage}
        </motion.div>
      )}
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Settings Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-full md:w-64 bg-white rounded-lg shadow-sm"
        >
          <div className="p-4 border-b">
            <h2 className="font-semibold text-mainText">Settings Menu</h2>
          </div>
          <nav className="p-2">
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setActiveTab('general')}
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition ${
                    activeTab === 'general' 
                      ? 'bg-primaryAction text-white' 
                      : 'hover:bg-accentHighlight/20 text-secondaryText'
                  }`}
                >
                  <Globe className="h-5 w-5 mr-3" />
                  General
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition ${
                    activeTab === 'payment' 
                      ? 'bg-primaryAction text-white' 
                      : 'hover:bg-accentHighlight/20 text-secondaryText'
                  }`}
                >
                  <CreditCard className="h-5 w-5 mr-3" />
                  Payment
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition ${
                    activeTab === 'notifications' 
                      ? 'bg-primaryAction text-white' 
                      : 'hover:bg-accentHighlight/20 text-secondaryText'
                  }`}
                >
                  <Bell className="h-5 w-5 mr-3" />
                  Notifications
                </button>
              </li>
              <li>
                <Link 
                  href="/admin/settings/shipping"
                  className="w-full flex items-center px-4 py-2 rounded-lg transition hover:bg-accentHighlight/20 text-secondaryText"
                >
                  <ShoppingBag className="h-5 w-5 mr-3" />
                  Shipping
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/settings/appearance"
                  className="w-full flex items-center px-4 py-2 rounded-lg transition hover:bg-accentHighlight/20 text-secondaryText"
                >
                  <Palette className="h-5 w-5 mr-3" />
                  Appearance
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/settings/integrations"
                  className="w-full flex items-center px-4 py-2 rounded-lg transition hover:bg-accentHighlight/20 text-secondaryText"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  Integrations
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/settings/inventory"
                  className="w-full flex items-center px-4 py-2 rounded-lg transition hover:bg-accentHighlight/20 text-secondaryText"
                >
                  <BookOpen className="h-5 w-5 mr-3" />
                  Inventory
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/settings/users"
                  className="w-full flex items-center px-4 py-2 rounded-lg transition hover:bg-accentHighlight/20 text-secondaryText"
                >
                  <Users className="h-5 w-5 mr-3" />
                  User Roles
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
        
        {/* Settings Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex-1 bg-white rounded-lg shadow-sm"
        >
          {/* General Settings */}
          {activeTab === 'general' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-mainText mb-6">General Settings</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Store Name
                    </label>
                    <input
                      type="text"
                      name="storeName"
                      value={generalSettings.storeName}
                      onChange={handleGeneralChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Store Email
                    </label>
                    <input
                      type="email"
                      name="storeEmail"
                      value={generalSettings.storeEmail}
                      onChange={handleGeneralChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Store Phone
                    </label>
                    <input
                      type="tel"
                      name="storePhone"
                      value={generalSettings.storePhone}
                      onChange={handleGeneralChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Primary Currency
                    </label>
                    <select
                      name="currency"
                      value={generalSettings.currency}
                      onChange={handleGeneralChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    >
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="INR">INR - Indian Rupee</option>
                      <option value="AED">AED - UAE Dirham</option>
                      <option value="SGD">SGD - Singapore Dollar</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Secondary Currency (Optional)
                    </label>
                    <select
                      name="secondaryCurrency"
                      value={generalSettings.secondaryCurrency}
                      onChange={handleGeneralChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    >
                      <option value="">None</option>
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="INR">INR - Indian Rupee</option>
                      <option value="AED">AED - UAE Dirham</option>
                      <option value="SGD">SGD - Singapore Dollar</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Weight Unit
                    </label>
                    <select
                      name="weightUnit"
                      value={generalSettings.weightUnit}
                      onChange={handleGeneralChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    >
                      <option value="kg">Kilograms (kg)</option>
                      <option value="lb">Pounds (lb)</option>
                      <option value="g">Grams (g)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Date Format
                    </label>
                    <select
                      name="dateFormat"
                      value={generalSettings.dateFormat}
                      onChange={handleGeneralChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enableMultilingual"
                    name="enableMultilingual"
                    checked={generalSettings.enableMultilingual}
                    onChange={(e) => setGeneralSettings(prev => ({
                      ...prev,
                      enableMultilingual: e.target.checked
                    }))}
                    className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                  />
                  <label htmlFor="enableMultilingual" className="ml-2 block text-sm text-secondaryText">
                    Enable multilingual support
                  </label>
                </div>
                
                <div className="pt-4 border-t">
                  <button
                    onClick={handleSaveSettings}
                    disabled={saving}
                    className="px-4 py-2 bg-primaryAction text-white rounded-lg hover:bg-rustOrange transition flex items-center gap-2 disabled:opacity-50 w-full sm:w-auto"
                  >
                    <Save size={16} />
                    {saving ? 'Saving...' : 'Save General Settings'}
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Payment Settings */}
          {activeTab === 'payment' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-mainText mb-6">Payment Settings</h2>
              
              <div className="space-y-6">
                <div className="bg-accentHighlight/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-mainText mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Stripe Integration
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="enableStripe"
                        name="enableStripe"
                        checked={paymentSettings.enableStripe}
                        onChange={handlePaymentChange}
                        className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                      />
                      <label htmlFor="enableStripe" className="ml-2 block text-sm text-secondaryText">
                        Enable Stripe payments
                      </label>
                    </div>
                    
                    {paymentSettings.enableStripe && (
                      <div className="pl-6 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-secondaryText mb-2">
                            Stripe Publishable Key
                          </label>
                          <input
                            type="text"
                            name="stripePublishableKey"
                            value={paymentSettings.stripePublishableKey}
                            onChange={handlePaymentChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-secondaryText mb-2">
                            Stripe Secret Key
                          </label>
                          <input
                            type="password"
                            name="stripeSecretKey"
                            value={paymentSettings.stripeSecretKey}
                            onChange={handlePaymentChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                          />
                          <p className="mt-1 text-xs text-secondaryText">
                            Your API keys are sensitive. Never share them with anyone or include them in client-side code.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-accentHighlight/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-mainText mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    PayPal Integration
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="enablePayPal"
                        name="enablePayPal"
                        checked={paymentSettings.enablePayPal}
                        onChange={handlePaymentChange}
                        className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                      />
                      <label htmlFor="enablePayPal" className="ml-2 block text-sm text-secondaryText">
                        Enable PayPal payments
                      </label>
                    </div>
                    
                    {paymentSettings.enablePayPal && (
                      <div className="pl-6 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-secondaryText mb-2">
                            PayPal Client ID
                          </label>
                          <input
                            type="text"
                            name="payPalClientId"
                            value={paymentSettings.payPalClientId}
                            onChange={handlePaymentChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-secondaryText mb-2">
                            PayPal Secret
                          </label>
                          <input
                            type="password"
                            name="payPalSecret"
                            value={paymentSettings.payPalSecret}
                            onChange={handlePaymentChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-accentHighlight/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-mainText mb-4 flex items-center">
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Other Payment Methods
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="enableCashOnDelivery"
                        name="enableCashOnDelivery"
                        checked={paymentSettings.enableCashOnDelivery}
                        onChange={handlePaymentChange}
                        className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                      />
                      <label htmlFor="enableCashOnDelivery" className="ml-2 block text-sm text-secondaryText">
                        Enable Cash on Delivery (COD)
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <button
                    onClick={handleSaveSettings}
                    disabled={saving}
                    className="px-4 py-2 bg-primaryAction text-white rounded-lg hover:bg-rustOrange transition flex items-center gap-2 disabled:opacity-50 w-full sm:w-auto"
                  >
                    <Save size={16} />
                    {saving ? 'Saving...' : 'Save Payment Settings'}
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Notification Settings */}
          {activeTab === 'notifications' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-mainText mb-6">Notification Settings</h2>
              
              <div className="space-y-6">
                <div className="bg-accentHighlight/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-mainText mb-4">Customer Notifications</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="orderConfirmation"
                        name="orderConfirmation"
                        checked={notificationSettings.orderConfirmation}
                        onChange={handleNotificationChange}
                        className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                      />
                      <label htmlFor="orderConfirmation" className="ml-2 block text-sm text-secondaryText">
                        Send order confirmation emails
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="orderShipped"
                        name="orderShipped"
                        checked={notificationSettings.orderShipped}
                        onChange={handleNotificationChange}
                        className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                      />
                      <label htmlFor="orderShipped" className="ml-2 block text-sm text-secondaryText">
                        Send shipping notifications
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="orderDelivered"
                        name="orderDelivered"
                        checked={notificationSettings.orderDelivered}
                        onChange={handleNotificationChange}
                        className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                      />
                      <label htmlFor="orderDelivered" className="ml-2 block text-sm text-secondaryText">
                        Send delivery confirmation emails
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="newsletterSignup"
                        name="newsletterSignup"
                        checked={notificationSettings.newsletterSignup}
                        onChange={handleNotificationChange}
                        className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                      />
                      <label htmlFor="newsletterSignup" className="ml-2 block text-sm text-secondaryText">
                        Send welcome email for newsletter signups
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accentHighlight/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-mainText mb-4">Admin Notifications</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="newOrderNotification"
                        name="newOrderNotification"
                        checked={notificationSettings.newOrderNotification}
                        onChange={handleNotificationChange}
                        className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                      />
                      <label htmlFor="newOrderNotification" className="ml-2 block text-sm text-secondaryText">
                        Send email notifications for new orders
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="lowStockAlert"
                        name="lowStockAlert"
                        checked={notificationSettings.lowStockAlert}
                        onChange={handleNotificationChange}
                        className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                      />
                      <label htmlFor="lowStockAlert" className="ml-2 block text-sm text-secondaryText">
                        Send email notifications for low stock items
                      </label>
                    </div>
                    
                    {notificationSettings.lowStockAlert && (
                      <div className="pl-6">
                        <label className="block text-sm font-medium text-secondaryText mb-2">
                          Low Stock Threshold
                        </label>
                        <div className="flex items-center">
                          <input
                            type="number"
                            name="lowStockThreshold"
                            value={notificationSettings.lowStockThreshold}
                            onChange={handleNotificationChange}
                            min="1"
                            className="w-20 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                          />
                          <span className="ml-2 text-sm text-secondaryText">items remaining</span>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-medium text-secondaryText mb-2">
                        Admin Email Recipients
                      </label>
                      <div className="space-y-2">
                        {notificationSettings.adminEmails.map((email, index) => (
                          <div key={index} className="flex items-center">
                            <span className="flex-1 px-3 py-2 border rounded-lg bg-accentHighlight/10 text-mainText">
                              {email}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeAdminEmail(email)}
                              className="ml-2 p-2 text-red-600 hover:bg-red-50 rounded"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                        
                        <button
                          type="button"
                          onClick={addAdminEmail}
                          className="px-3 py-2 border border-dashed border-secondaryText rounded-lg text-secondaryText hover:bg-accentHighlight/10 transition w-full"
                        >
                          + Add Email Recipient
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <button
                    onClick={handleSaveSettings}
                    disabled={saving}
                    className="px-4 py-2 bg-primaryAction text-white rounded-lg hover:bg-rustOrange transition flex items-center gap-2 disabled:opacity-50 w-full sm:w-auto"
                  >
                    <Save size={16} />
                    {saving ? 'Saving...' : 'Save Notification Settings'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}