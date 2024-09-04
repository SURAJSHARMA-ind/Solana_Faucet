# Solana Faucet

This repository contains a simple Solana faucet application built using the [Wallet Adapter](https://github.com/anza-xyz/wallet-adapter) for connecting Solana wallets to the application. The faucet allows users to request a small amount of SOL from the faucet to their connected wallet for testing purposes.

## Features

- **Wallet Connection:** Supports connection to various Solana wallets using the Wallet Adapter.
- **Faucet Functionality:** Allows users to receive a specified amount of SOL to their connected wallet.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Solana wallet (e.g., Phantom, Sollet)

## Getting Started

To get a local copy of the project up and running, follow these simple steps.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SURAJSHARMA-ind/Web3-projects.git
   ```

   2 **Navigate to the project directory:**

   ```bash
   cd solana-faucet
   ```

   3 **Install the dependencies:**

   ```
   npm install
   ```

### Configuration

- Set up environment variables:
- Create a .env file in the root directory and add the following variables:

```
VITE_API_KEY = Enter your api key here
```

### Start the development server:

```
npm start
```


