# Recipe Generator

This project is a **Recipe Generator** application built using React. It is designed to allow users to generate, save, and explore recipes using a dynamic and user-friendly interface. The application also includes features like user authentication, a contact form for support, and CRUD operations for managing recipes.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Dynamic Recipe Generator:** Users can generate recipes based on multiple ingredients.
- **CRUD Operations:** Users can add, edit, delete, and view ingredients for recipe generation.
- **Save Recipes:** Users can save their favorite recipes for future reference.
- **Edit and Remove Saved Recipes:** Saved recipes can be edited or removed as per the user's preference.
- **User Authentication:** Login and Register functionality for personalized access.
- **Contact Us:** A contact form to provide support or feedback.
- **Responsive Design:** Works seamlessly across devices.
- **Local Storage:** Used to store user-generated data such as ingredients and saved recipes.

---

## Project Structure

The project structure is as follows:

```
src
├── components
│   ├── Aboutus.js
│   ├── Aboutus.css
│   ├── Contactus.js
│   ├── Footer.js
│   ├── Generate-recipe.js
│   ├── Login.js
│   ├── Login.css
│   ├── Maincontent.js
│   ├── Navbar.js
│   ├── Navbar.css
│   ├── Recipes.js
│   ├── Saved-recipe.js
│   ├── Saved-recipe.css
│
├── App.js
├── App.css
├── index.js
├── index.css
├── package.json
```

### Key Components

1. **Navbar.js:** Handles the navigation bar with links to all the pages.
2. **Aboutus.js:** Displays details about the application.
3. **Contactus.js:** Includes a form for users to contact support.
4. **Generate-recipe.js:** Handles the logic for generating recipes based on user-provided ingredients.
5. **Saved-recipe.js:** Manages saved recipes with options to edit or remove them.
6. **Login.js:** Provides user authentication functionality (Login/Register).
7. **Maincontent.js:** The main landing page content.

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipe-generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd recipe-generator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000/`.

---

## Usage

1. **Navbar:** Navigate between Home, About Us, Recipe Generator, Saved Recipes, Contact Us, and Login/Register.
2. **Recipe Generator:** Add multiple ingredients and generate recipes using the API.
3. **Save Recipes:** Save generated recipes to view them later.
4. **Edit/Remove Recipes:** Manage your saved recipes with full CRUD functionality.
5. **Contact Us:** Use the form to send feedback or queries.
6. **Login/Register:** Authenticate to access personalized features.

---

## Technologies Used

- **Frontend:** React, CSS
- **State Management:** LocalStorage
- **API Integration:**Fetch API(Cohere API)
- **Styling:** CSS Modules

---

## API Integration

The project uses an external API to fetch recipes based on user-provided ingredients. Users can add, edit, delete, and view ingredients, which are sent as parameters to the API for generating relevant recipes.

---

## Screenshots

_Add screenshots of your application here for better understanding._

---

## Contributing

Contributions are welcome! If you have ideas to improve the application, feel free to fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Thank you for checking out the Recipe Generator project! If you have any questions or suggestions, feel free to reach out.
