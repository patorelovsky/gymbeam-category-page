# GymBeam Category Page - React Component

## Objective

The objective of this project is to create a React component for the GymBeam Category Page. This component will display a list of products from the "Sports Nutrition" category, consuming data from a provided REST API. Basic filtering functionality should also be implemented.

## Description

1. The Category Page component will display a list of products of the "Sports Nutrition" category.
2. Each product in the list will display:
   - Product Name
   - Price (with currency)
   - Review rating
   - Thumbnail
3. Basic filtering functionality will be implemented to filter products.
4. Pagination and sorting will not be implemented for simplicity.
5. The design of the component is not crucial for this case study.
6. Product data will be obtained from the provided REST API endpoint.

## Tech Stack

- React
- Next.js
- SCSS for styling
- SCSS modules for scoped styles
- TypeScript for type safety
- React Testing Library for unit testing
- Jest for test execution

## REST API Endpoint

- Use the provided REST API endpoint to fetch product data.
- URL: `https://gymbeam.sk/rest/V1/gb/catalog/products?category_ids[]=2416`
- Use `content-type: application/json;` in the header for JSON response.
- For filtering products, append the desired filter parameters to the URL:
  - Example for gender segmentation filter: `&gender_segmentation[]=5308`
  - The number `5308` represents the filtered value.
  - Obtain a complete list of all available filters from the API Response.

## Instructions to Run, Debug, and Build

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. To run the project locally:
   - Run `npm run dev` to start the development server.
   - Open your browser and navigate to `http://localhost:3000` to view the project.
4. To debug the project:
   - Utilize Chrome DevTools or VS Code debugger for client-side debugging.
5. To build the project for production:
   - Run `npm run build` to generate a production build.
   - Deploy the build artifacts to your hosting environment.
