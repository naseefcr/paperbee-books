// src/app/admin/settings/integrations/page.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Save, 
  Mail, 
  Link as LinkIcon, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Smartphone, 
  BarChart 
} from 'lucide-react'

export default function IntegrationsPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  
  // Email Integration Settings
  const [emailSettings, setEmailSettings] = useState({
    provider: 'smtp',
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUsername: 'paperbeebook@gmail.com',
    smtpPassword: '••••••••••••••',
    fromEmail: 'paperbeebook@gmail.com',
    fromName: 'Paperbee Books',
    enableMailchimp: true,
    mailchimpApiKey: 'abc123••••••••••••••',
    mailchimpListId: '123456'
  })
  
  // Social Media Integration Settings
  const [socialSettings, setSOcialSettings] = useState({
    facebookEnabled: true,
    facebookAppId: '123456789',
    facebookPageUrl: 'https://facebook.com/paperbeebooks',
    twitterEnabled: true,
    twitterHandle: '@paperbeebooks',
    instagramEnabled: true,
    instagramHandle: '@paperbeebooks',
    youtubeEnabled: false,
    youtubeUrl: ''
  })
  
  // Analytics Integration Settings
  const [analyticsSettings, setAnalyticsSettings] = useState({
    googleAnalyticsEnabled: true,
    googleAnalyticsId: 'UA-123456-7',
    facebookPixelEnabled: true,
    facebookPixelId: '123456789',
    hotjarEnabled: false,
    hotjarId: ''
  })
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setEmailSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }
  
  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setSOcialSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  
  const handleAnalyticsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setAnalyticsSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  
  const handleSaveSettings = async () => {
    setSaving(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real app, this would save to Firestore or other backend
    
    setSaving(false)
    setSuccessMessage('Integration settings saved successfully')
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage(null)
    }, 3000)
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-2">
        <button 
          onClick={() => router.push('/admin/settings')}
          className="p-2 hover:bg-accentHighlight rounded-full transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-mainText">Integrations</h1>
      </div>
      
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 text-green-800 p-4 rounded-lg"
        >
          {successMessage}
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-mainText">Email Service Integration</h2>
          <p className="text-sm text-secondaryText">Configure your email settings for notifications and campaigns.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                Email Provider
              </label>
              <select
                name="provider"
                value={emailSettings.provider}
                onChange={handleEmailChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              >
                <option value="smtp">SMTP Server</option>
                <option value="sendgrid">SendGrid</option>
                <option value="mailgun">Mailgun</option>
                <option value="aws-ses">Amazon SES</option>
              </select>
            </div>
          </div>
          
          {emailSettings.provider === 'smtp' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    SMTP Host
                  </label>
                  <input
                    type="text"
                    name="smtpHost"
                    value={emailSettings.smtpHost}
                    onChange={handleEmailChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    SMTP Port
                  </label>
                  <input
                    type="text"
                    name="smtpPort"
                    value={emailSettings.smtpPort}
                    onChange={handleEmailChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    SMTP Username
                  </label>
                  <input
                    type="text"
                    name="smtpUsername"
                    value={emailSettings.smtpUsername}
                    onChange={handleEmailChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    SMTP Password
                  </label>
                  <input
                    type="password"
                    name="smtpPassword"
                    value={emailSettings.smtpPassword}
                    onChange={handleEmailChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                  />
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t">
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                From Email
              </label>
              <input
                type="email"
                name="fromEmail"
                value={emailSettings.fromEmail}
                onChange={handleEmailChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                From Name
              </label>
              <input
                type="text"
                name="fromName"
                value={emailSettings.fromName}
                onChange={handleEmailChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              />
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <h3 className="font-semibold text-mainText mb-4">Mailchimp Integration</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="enableMailchimp"
                  name="enableMailchimp"
                  checked={emailSettings.enableMailchimp}
                  onChange={(e) => setEmailSettings(prev => ({
                    ...prev,
                    enableMailchimp: e.target.checked
                  }))}
                  className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                />
                <label htmlFor="enableMailchimp" className="ml-2 block text-sm text-secondaryText">
                  Enable Mailchimp for newsletters and marketing emails
                </label>
              </div>
              
              {emailSettings.enableMailchimp && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-6">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Mailchimp API Key
                    </label>
                    <input
                      type="password"
                      name="mailchimpApiKey"
                      value={emailSettings.mailchimpApiKey}
                      onChange={handleEmailChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Mailchimp List ID
                    </label>
                    <input
                      type="text"
                      name="mailchimpListId"
                      value={emailSettings.mailchimpListId}
                      onChange={handleEmailChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-mainText">Social Media Integration</h2>
          <p className="text-sm text-secondaryText">Connect your social media accounts for sharing and login features.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="bg-accentHighlight/10 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Facebook className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-mainText">Facebook</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="facebookEnabled"
                  name="facebookEnabled"
                  checked={socialSettings.facebookEnabled}
                  onChange={handleSocialChange}
                  className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                />
                <label htmlFor="facebookEnabled" className="ml-2 block text-sm text-secondaryText">
                  Enable Facebook integration
                </label>
              </div>
              
              {socialSettings.facebookEnabled && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-6">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Facebook App ID
                    </label>
                    <input
                      type="text"
                      name="facebookAppId"
                      value={socialSettings.facebookAppId}
                      onChange={handleSocialChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Facebook Page URL
                    </label>
                    <input
                      type="text"
                      name="facebookPageUrl"
                      value={socialSettings.facebookPageUrl}
                      onChange={handleSocialChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-accentHighlight/10 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Twitter className="h-5 w-5 text-blue-400 mr-2" />
              <h3 className="font-semibold text-mainText">Twitter</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="twitterEnabled"
                  name="twitterEnabled"
                  checked={socialSettings.twitterEnabled}
                  onChange={handleSocialChange}
                  className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                />
                <label htmlFor="twitterEnabled" className="ml-2 block text-sm text-secondaryText">
                  Enable Twitter integration
                </label>
              </div>
              
              {socialSettings.twitterEnabled && (
                <div className="pl-6">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Twitter Handle
                    </label>
                    <input
                      type="text"
                      name="twitterHandle"
                      value={socialSettings.twitterHandle}
                      onChange={handleSocialChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-accentHighlight/10 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Instagram className="h-5 w-5 text-pink-600 mr-2" />
              <h3 className="font-semibold text-mainText">Instagram</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="instagramEnabled"
                  name="instagramEnabled"
                  checked={socialSettings.instagramEnabled}
                  onChange={handleSocialChange}
                  className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                />
                <label htmlFor="instagramEnabled" className="ml-2 block text-sm text-secondaryText">
                  Enable Instagram integration
                </label>
              </div>
              
              {socialSettings.instagramEnabled && (
                <div className="pl-6">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Instagram Handle
                    </label>
                    <input
                      type="text"
                      name="instagramHandle"
                      value={socialSettings.instagramHandle}
                      onChange={handleSocialChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-accentHighlight/10 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Youtube className="h-5 w-5 text-red-600 mr-2" />
              <h3 className="font-semibold text-mainText">YouTube</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="youtubeEnabled"
                  name="youtubeEnabled"
                  checked={socialSettings.youtubeEnabled}
                  onChange={handleSocialChange}
                  className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                />
                <label htmlFor="youtubeEnabled" className="ml-2 block text-sm text-secondaryText">
                  Enable YouTube integration
                </label>
              </div>
              
              {socialSettings.youtubeEnabled && (
                <div className="pl-6">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      YouTube Channel URL
                    </label>
                    <input
                      type="text"
                      name="youtubeUrl"
                      value={socialSettings.youtubeUrl}
                      onChange={handleSocialChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-mainText">Analytics & Tracking</h2>
          <p className="text-sm text-secondaryText">Configure analytics tools to track user behavior and sales performance.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="bg-accentHighlight/10 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <BarChart className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-mainText">Google Analytics</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="googleAnalyticsEnabled"
                  name="googleAnalyticsEnabled"
                  checked={analyticsSettings.googleAnalyticsEnabled}
                  onChange={handleAnalyticsChange}
                  className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                />
                <label htmlFor="googleAnalyticsEnabled" className="ml-2 block text-sm text-secondaryText">
                  Enable Google Analytics tracking
                </label>
              </div>
              
              {analyticsSettings.googleAnalyticsEnabled && (
                <div className="pl-6">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Google Analytics ID (UA-XXXXX-X)
                    </label>
                    <input
                      type="text"
                      name="googleAnalyticsId"
                      value={analyticsSettings.googleAnalyticsId}
                      onChange={handleAnalyticsChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-accentHighlight/10 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Facebook className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-mainText">Facebook Pixel</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="facebookPixelEnabled"
                  name="facebookPixelEnabled"
                  checked={analyticsSettings.facebookPixelEnabled}
                  onChange={handleAnalyticsChange}
                  className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                />
                <label htmlFor="facebookPixelEnabled" className="ml-2 block text-sm text-secondaryText">
                  Enable Facebook Pixel tracking
                </label>
              </div>
              
              {analyticsSettings.facebookPixelEnabled && (
                <div className="pl-6">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Facebook Pixel ID
                    </label>
                    <input
                      type="text"
                      name="facebookPixelId"
                      value={analyticsSettings.facebookPixelId}
                      onChange={handleAnalyticsChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-accentHighlight/10 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <LinkIcon className="h-5 w-5 text-red-500 mr-2" />
              <h3 className="font-semibold text-mainText">Hotjar</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hotjarEnabled"
                  name="hotjarEnabled"
                  checked={analyticsSettings.hotjarEnabled}
                  onChange={handleAnalyticsChange}
                  className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                />
                <label htmlFor="hotjarEnabled" className="ml-2 block text-sm text-secondaryText">
                  Enable Hotjar tracking for heatmaps and recordings
                </label>
              </div>
              
              {analyticsSettings.hotjarEnabled && (
                <div className="pl-6">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Hotjar Site ID
                    </label>
                    <input
                      type="text"
                      name="hotjarId"
                      value={analyticsSettings.hotjarId}
                      onChange={handleAnalyticsChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="flex justify-end">
        <button
          onClick={handleSaveSettings}
          disabled={saving}
          className="px-4 py-2 bg-primaryAction text-white rounded-lg hover:bg-rustOrange transition flex items-center gap-2 disabled:opacity-50"
        >
          <Save size={16} />
          {saving ? 'Saving...' : 'Save All Integration Settings'}
        </button>
      </div>
    </div>
  )
}