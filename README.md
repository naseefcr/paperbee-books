# PaperBee Books - Online Bookstore

![PaperBee Books Logo](public/logo.png)

A modern, responsive e-commerce platform for PaperBee Books, a multilingual children's book publishing company. This Next.js application provides an intuitive shopping experience for users to browse, search, and purchase children's books in multiple languages.

## 📚 About PaperBee Books

PaperBee Books is a global publishing company dedicated to making quality children's literature accessible in multiple languages. We believe that books open doors to imagination, curiosity, and understanding. Our mission is to promote literacy and creativity through engaging content published in a wide range of languages.

## 🚀 Features

- **Multilingual Support**: Full internationalization with support for English, Arabic, Japanese, Malayalam, and Kannada
- **Responsive Design**: Optimized user experience across desktop, tablet, and mobile devices
- **Product Catalog**: Browse books with advanced filtering by language, category, and more
- **Shopping Cart**: User-friendly cart management with quantity adjustments
- **Checkout Process**: Streamlined, multi-step checkout flow
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Firebase Integration**: Real-time database and authentication

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Payment Processing**: Stripe
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation

## 🏗️ Project Structure

```
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # Reusable UI components
│   ├── lib/             # Utility functions and shared code
│   │   ├── context/     # React context providers
│   │   ├── firebase.ts  # Firebase configuration
│   │   └── translations.ts # i18n translations
│   └── pages/
│       └── api/         # API routes for Firebase interactions
├── tailwind.config.ts   # Tailwind CSS configuration
└── next.config.mjs      # Next.js configuration
```

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn
- Firebase account (for Firestore database)
- Stripe account (for payment processing)

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/paperbee-books.git
cd paperbee-books
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory with the following variables:

```
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

Visit [http://localhost:3000](http://localhost:3000) to see the application running.

## 🔥 Firebase Setup

1. Create a new Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Firestore Database and Authentication services
3. Create a web app in your Firebase project settings
4. Copy the Firebase configuration to your `.env.local` file
5. Set up Firestore collections for books and other data

## 📱 Features Implementation

### Book Catalog

The book catalog uses Firestore to store and retrieve book data. Books have properties like title, author, price, language, and category. The catalog includes:

- Grid and list view options
- Filtering by language and category
- Sorting options (newest, price, popularity)
- Search functionality

### Multilingual Support

The app uses a custom `LanguageContext` to provide translations across the application. The language can be changed from the header, and the app supports RTL languages like Arabic.

### Shopping Cart

The shopping cart functionality allows users to:

- Add books to cart
- Update quantities
- Remove items
- View order summary with subtotal, shipping, and total

### Checkout Process

The checkout process is divided into multiple steps:

1. Customer information
2. Shipping address
3. Payment details

## 🚢 Deployment

This application can be deployed using Vercel:

```bash
npm run build
# or
vercel
```

For more information on deploying Next.js applications, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any inquiries about the project, please contact:

- Email: paperbeebook@gmail.com
- Phone: 8590885155
- Address: Paperbee books, near Scout bhavan, Anangoor Vidyanagar po, Kasaragod, Kerala, India 671123

---

Made with ❤️ by the PaperBee Books Team