# Nextnotes 🚀

Welcome to Nextnotes, my personal coding playground for mastering Next.js! 🎉

## Overview

Nextnotes is a project aimed at helping me master Next.js through hands-on practice. This repository serves as my virtual workspace where I can experiment with Next.js concepts and build cool projects.

## Feature

- **Note Creation**: Create and store notes in a MySQL database.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Docker installed (for MySQL)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/rpdjf/nextnotes
   ```
2. Change into the project directory

   ```bash
   cd nextnotes
   ```
3. Install npm dependecies

   ```bash
   npm i
   ```
4. Start the MySQL server with Docker Compose (for test only)

   ```bash
   docker-compose -f ./compose-mysql-4test.yaml up -d
   ```
5. Start the application

   ```bash
   npm start
   ```

   since the app is still in dev process, you may want to use dev build instead 👌
   ```bash
   npm run dev
   ```
The server will be running at 127.0.0.1:3000
