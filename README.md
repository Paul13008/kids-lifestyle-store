# Kids Lifestyle Store

Welcome to the Kids Lifestyle Store project! This is an e-commerce website dedicated to providing a delightful shopping experience for children's clothing and lifestyle accessories for adults. Our product range includes fun and stylish items such as fanny packs, tote bags, and shopping bags.

## Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring a seamless experience on both desktop and mobile devices.
- **Animated Components**: Utilizing Framer Motion, the site incorporates engaging animations to enhance user interaction and experience.
- **Product Listings**: Browse through a variety of products with detailed descriptions and images.
- **Shopping Cart**: Easily add items to your cart and view your selections in a dedicated sidebar.
- **Checkout Process**: A streamlined checkout process for a hassle-free shopping experience.

## Project Structure

The project is organized as follows:

```
kids-lifestyle-store
├── app
│   ├── layout.tsx
│   ├── head.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── products
│   │   ├── page.tsx
│   │   └── [slug]
│   │       └── page.tsx
│   ├── cart
│   │   └── page.tsx
│   └── checkout
│       └── page.tsx
├── src
│   ├── components
│   │   ├── background
│   │   │   └── Noise.tsx
│   │   ├── ui
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── CartSidebar.tsx
│   │   │   └── AnimatedButton.tsx
│   │   └── animations
│   │       └── motionVariants.ts
│   ├── hooks
│   │   └── useCart.ts
│   ├── lib
│   │   ├── commerce.ts
│   │   └── fetcher.ts
│   ├── store
│   │   └── cartStore.ts
│   └── types
│       └── index.ts
├── styles
│   └── tailwind.css
├── public
│   └── robots.txt
├── .eslintrc.json
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd kids-lifestyle-store
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.