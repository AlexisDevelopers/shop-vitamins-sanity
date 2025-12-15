# VIU Vitamin Shop 🧴💊

VIU Vitamin Shop is a frontend-focused e-commerce application for vitamins and health supplements. The project is built with Next.js and integrates Sanity CMS for product management and Stripe for payment processing, serving as a solid foundation for a modern headless commerce solution.

## 🌐 Overview

This project demonstrates how to build a scalable e-commerce frontend using a modern React framework and third-party services. It focuses on UI composition, routing, CMS integration, and checkout flow, rather than full backend business logic.

Key goals:

- Clean and modular UI
- Headless CMS integration
- Ready-to-extend e-commerce architecture

## ✨ Features

- Modern e-commerce landing page
- Product listing and product detail pages
- Shopping cart UI
- Checkout flow with Stripe
- CMS-driven products using Sanity
- Authentication pages (Login / Register UI)
- Newsletter subscription section
- Responsive layout for desktop and mobile
- Component-based and reusable architecture

## 🛠️ Tech Stack

### Frontend

- Next.js 12
- React 18
- JavaScript (ES6+)

### CMS & Services

- Sanity CMS
- Stripe (payments)

### UI & Utilities

- Custom CSS
- React Icons
- React Hot Toast

## 📦 Dependencies (Main)

- `next`
- `react`
- `react-dom`
- `@sanity/client`
- `next-sanity-image`
- `stripe`
- `@stripe/stripe-js`
- `react-hot-toast`

## 📁 Project Structure

```
components/
├── Cart.jsx
├── Footer.jsx
├── FooterBanner.jsx
├── HeroBanner.jsx
├── Layout.jsx
├── Login.jsx
├── Menu.jsx
├── Navbar.jsx
├── Newsletter.jsx
├── Product.jsx
└── Register.jsx

pages/
├── api/
├── product/
├── _app.js
├── index.js
└── success.js

context/
lib/
styles/
public/
```

The project follows a component-oriented architecture, keeping UI logic reusable and easy to scale.

## 📦 Prerequisites

Make sure you have the following installed:

```bash
node >= 16
npm >= 8
```

You will also need:

- A Sanity project (for CMS content)
- A Stripe account (for payments)

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/viu-vitamin-shop.git
cd viu-vitamin-shop
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

## ⚙️ Environment Variables

Create a `.env.local` file and configure:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

## 💻 Usage

- Browse available vitamin and supplement products
- View product details
- Add items to the shopping cart
- Complete checkout via Stripe
- Explore CMS-driven content from Sanity

This project focuses on frontend architecture and integrations, not on inventory management or order fulfillment logic.

## 🏗️ Architecture & Technical Decisions

- Next.js Pages Router for routing and SSR
- Sanity CMS for flexible, headless content management
- Stripe for secure payment handling
- Context API for global cart state
- UI-first approach, prioritizing layout, composition, and usability
- Designed as a realistic base for a production e-commerce platform

## 🧪 Tests

No automated tests are currently implemented.

The structure allows easy integration of:

- Jest
- React Testing Library
- Playwright (e2e)

## 🚢 Deployment

The project can be deployed on platforms such as:

- Vercel (recommended for Next.js)
- Netlify

Build for production:

```bash
npm run build
npm run start
```

## 🗺️ Roadmap

- Improved cart persistence
- Authentication logic integration
- Order history
- Admin dashboard
- Enhanced CMS schemas
- Performance optimizations

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Alexis De Los Santos**  
Frontend / Software Engineer

- GitHub: https://github.com/AlexisDevelopers
- LinkedIn: [https://linkedin.com/in/alexisdelossantos](https://www.linkedin.com/in/alexisdelossantos/)
