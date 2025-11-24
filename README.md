# Commodities Management System

A comprehensive Commodities Management System built with Next.js, React, and Tailwind CSS. This application features role-based access control, product management, and a dashboard for managers.

## Features

- **Role-Based Access Control (RBAC)**: Distinct roles for Managers and Store Keepers.
- **Dashboard**: Exclusive view for Managers with sales statistics and charts.
- **Product Management**: Full CRUD capabilities for managing product inventory.
- **Dark Mode**: Built-in light and dark theme support.
- **Responsive Design**: Optimized for all device sizes.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Charts**: Recharts

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open Application**:
    Navigate to [https://slooze-frontend-lyart.vercel.app](https://slooze-frontend-lyart.vercel.app).

## User Credentials

Use the following credentials to log in and test different roles:

### Manager Role
*Access to Dashboard, Product Management (Add/Edit/Delete)*
- **Username**: `manager`
- **Password**: `password`

### Store Keeper Role
*Access to Product Management (Add/Edit only), No Dashboard access*
- **Username**: `keeper`
- **Password**: `password`
- **Username**: `store_keeper`
- **Password**: `password`

## Project Structure

- `src/app`: Next.js App Router pages.
- `src/components`: Reusable UI components (Layout, Auth, Dashboard).
- `src/context`: Global state management (Auth, Theme, Product).
- `src/lib`: Utility functions.

## Created By Abhideep Ghosh
