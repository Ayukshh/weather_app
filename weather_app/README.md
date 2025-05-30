# Weather App

A modern weather application built with **React** and **Vite**. This project demonstrates advanced React patterns, efficient state management, and seamless integration with third-party APIs for real-time weather data.

## Features
s
- 🌤️ **Live Weather Data:** Fetches current weather information from a public API.
- 🔍 **City Search:** Search for weather by city name with instant updates.
- 📱 **Responsive Design:** Optimized for both desktop and mobile devices.
- ⚡ **Fast Refresh:** Instant updates during development with Vite HMR.
- 🧩 **Component-Based Architecture:** Modular, reusable React components.
- 🌈 **Styled with CSS Modules:** Scoped and maintainable styles.
- 🛠️ **ESLint Integration:** Enforced code quality and consistency.

## Advanced Syntax and Features Used

### 1. React Hooks
- **useState** and **useEffect** for state and side-effect management.
- **Custom Hooks** for encapsulating reusable logic (e.g., API fetching).

### 2. Async/Await and Fetch API
- Asynchronous data fetching with error handling and loading states.

### 3. Conditional Rendering
- Dynamic UI updates based on API responses and user input.

### 4. PropTypes/TypeScript (if applicable)
- Type checking for component props to ensure reliability.

### 5. Environment Variables
- Securely storing API keys using `.env` files and Vite's import.meta.env.

### 6. CSS Modules
- Locally scoped CSS to prevent style conflicts.

### 7. Linting and Formatting
- ESLint for code linting and Prettier for consistent formatting.

### 8. Vite Features
- Lightning-fast development server and optimized production builds.
- Hot Module Replacement (HMR) for instant feedback.

## Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Set up environment variables:**
    - Create a `.env` file and add your weather API key:
      ```
      VITE_WEATHER_API_KEY=your_api_key_here
      ```

3. **Run the development server:**
    ```bash
    npm run dev
    ```

4. **Build for production:**
    ```bash
    npm run build
    ```

## Project Structure

```
src/
  components/      # Reusable React components
  hooks/           # Custom React hooks
  styles/          # CSS Modules
  App.jsx          # Main app component
  main.jsx         # Entry point
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

## License

This project is licensed under the MIT License.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
