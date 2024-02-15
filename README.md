# Polysurance Sales App

Task : Write a function that calculates the Total sales before discount, Total sales after discount, Total amount of money lost via Discount Codes, and finally the average discount per customer for the day as a percentage.

### This is a simple Express.js application that calculates sales information and exposes it through an API endpoint.

## Prerequisites

Before running the application, ensure that you have the following installed:

Node.js (v14 or later)
npm (Node Package Manager)

## Installation

Clone the repository to your local machine:

## git clone <repository-url>

Navigate to the project directory:

cd <project-directory>

## Install dependencies:

### npm install

## Running the Application

npm start

## API Endpoint

GET /sales
This endpoint calculates sales information and returns the results.

## Response

The response contains the following sales information:

totalSalesBeforeDiscount: Total sales before applying any discounts.
totalSalesAfterDiscount: Total sales after applying discounts.
totalDiscountAmount: Total amount of money lost via discount codes.
averageDiscount: Average discount per customer for the day as a percentage.

### Example

GET http://localhost:3000/sales
{
"totalSalesBeforeDiscount": 500,
"totalSalesAfterDiscount": 450,
"totalDiscountAmount": 50,
"averageDiscount": 10
}

## Prepared By

Jahid Al Mamun
rjs.jahid22@gmail.com
