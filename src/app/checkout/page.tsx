/* eslint-disable @typescript-eslint/no-unused-vars */
// app/checkout/page.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Lock, MapPin, User, Mail, Phone, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface CheckoutForm {
  // Customer Info
  firstName: string
  lastName: string
  email: string
  phone: string
  
  // Shipping Address
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  
  // Payment
  cardNumber: string
  expiryDate: string
  cvv: string
  cardName: string
}

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [form, setForm] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  })

  const steps = [
    { number: 1, title: 'Customer Info', icon: User },
    { number: 2, title: 'Shipping', icon: MapPin },
    { number: 3, title: 'Payment', icon: CreditCard },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1)
    }
  }

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle checkout submission
    console.log('Order submitted:', form)
  }

  return (
    <div className="min-h-screen bg-pageBackground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/cart" className="inline-flex items-center text-secondaryText hover:text-primaryAction mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-2xl font-bold text-mainText">Checkout</h1>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition ${
                    step.number === activeStep
                      ? 'border-primaryAction bg-primaryAction text-white'
                      : step.number < activeStep
                      ? 'border-secondaryButtonIcon bg-secondaryButtonIcon text-mainText'
                      : 'border-accentHighlight bg-pageBackground text-secondaryText'
                  }`}
                >
                  <step.icon className="h-5 w-5" />
                </div>
                <span className={`mt-2 text-sm ${
                  step.number === activeStep ? 'text-primaryAction font-medium' : 'text-secondaryText'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
            {/* Connecting line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-accentHighlight -z-10">
              <div 
                className="h-full bg-secondaryButtonIcon transition-all duration-300" 
                style={{ width: `${((activeStep - 1) / 2) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-pageBackground rounded-lg shadow-sm p-6">
          {/* Step 1: Customer Information */}
          {activeStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-lg font-semibold text-mainText mb-6">Customer Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Shipping Address */}
          {activeStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-lg font-semibold text-mainText mb-6">Shipping Address</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder="Street address"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={form.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    Country
                  </label>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  >
                    <option value="India">India</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Payment Information */}
          {activeStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-lg font-semibold text-mainText mb-6">Payment Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={form.cardName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={form.cvv}
                      onChange={handleChange}
                      required
                      placeholder="123"
                      maxLength={3}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={form.expiryDate}
                    onChange={handleChange}
                    required
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center text-sm text-secondaryText">
                <Lock className="h-4 w-4 mr-2 text-secondaryButtonIcon" />
                Your payment information is secure and encrypted
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              disabled={activeStep === 1}
              className={`px-6 py-3 rounded-lg transition ${
                activeStep === 1
                  ? 'bg-accentHighlight/50 text-secondaryText/50 cursor-not-allowed'
                  : 'bg-pageBackground border border-accentHighlight text-mainText hover:bg-accentHighlight'
              }`}
            >
              Back
            </button>
            {activeStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-primaryAction text-white px-6 py-3 rounded-lg hover:bg-rustOrange transition"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-secondaryButtonIcon text-mainText px-8 py-3 rounded-lg hover:bg-goldenYellow transition flex items-center gap-2"
              >
                <Lock className="h-5 w-5" />
                Place Order
              </button>
            )}
          </div>
        </form>

        {/* Order Summary */}
        <div className="mt-8 bg-pageBackground rounded-lg shadow-sm p-6">
          <h3 className="font-semibold text-mainText mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-secondaryText">Subtotal (2 items)</span>
              <span className="text-mainText">$27.98</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondaryText">Shipping</span>
              <span className="text-mainText">$5.99</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-mainText">
              <span>Total</span>
              <span className="text-primaryAction">$33.97</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
