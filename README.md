# Online Bookstore Application

## Overview
This project is an online bookstore application built with React and React Router. The application allows users to browse a collection of books, view detailed information about each book, and manage a shopping cart. The main features include adding books to the cart, updating item quantities, and removing items from the cart. The application also calculates the total price, including tax.

## Features
- **Home Page**
  - Displays a collection of books.
  
- **Books Page**
  - Lists all available books with basic information.
  
- **Book Information Page**
  - Provides detailed information about a specific book.
  - Allows users to add the book to the shopping cart.
  
- **Shopping Cart**
  - Displays all items added to the cart.
  - Allows users to update the quantity of each item.
  - Allows users to remove items from the cart.
  - Shows the subtotal, tax, and total price of items in the cart.

- **Navigation and Footer**
  - Includes a navigation bar that shows the number of items in the cart.
  - A footer for additional information or links.

## Code Structure
- **App Component**: The main component that initializes the router and manages the state for the cart.
- **Pages**: 
  - `Home`: Displays the home page with a list of books.
  - `Books`: Shows all available books.
  - `BookInfo`: Provides details of a specific book and the option to add it to the cart.
  - `Cart`: Manages and displays the shopping cart, including the total price calculation.
- **Components**:
  - `Nav`: Navigation bar that includes the cart item count.
  - `Footer`: Footer component for the application.

## State Management
- The cart state is managed using React's `useState` hook.
- Functions for adding items to the cart, updating item quantities, and removing items are defined in the `App` component.
- The number of items in the cart and the total prices are calculated and passed down as props to relevant components.

## Data Handling
- The book data is imported from a static file (`data.js`).
- The cart is managed locally within the application state.

## Potential Improvements
- Implement user authentication and save cart data to a backend.
- Add more detailed book information and reviews.
- Enhance the UI/UX with better styling and responsive design.

## Live Preview
You can check out the live preview of the application [here](https://my-library-teal.vercel.app).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.