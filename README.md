# Expo Managed Boilerplate

This is a boilerplate for Expo-managed React Native applications, providing essential configurations and commonly used libraries to streamline development.

## Features
- **React Navigation**: Seamless navigation with stack-based routing.
- **Redux Toolkit**: State management with best practices.
- **Axios**: Simplified HTTP requests.
- **Environment Variables**: Secure configuration with dotenv.
- **Expo Utilities**: Enhanced support for fonts, and splash screens.
- **Reanimated & Gesture Handler**: Smooth animations and gesture-based interactions.
- **Safe Area Context & Screens**: Improved layout handling for modern devices.
- **Size Matters**: Responsive and scalable UI.
- **SVG Support**: Easily transform and use SVG assets.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/boiler-plate-expo.git
   cd boiler-plate-expo
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Start the development server:
   ```sh
   npx expo start
   ```

## Project Structure
```
boiler-plate-expo/
│── src/
│   ├── assets/        # Contains SVG images and font files
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom Hooks
│   ├── navigation/    # Navigation setup
│   ├── features/      # Slices for Redux Toolkit
│   ├── screens/       # App screens
│   ├── constants/     # Constants Files
│── .env               # Environment variables (use .env.example as a template)
│── index.tsx          # Entry point of the application
│── package.json       # Project dependencies
│── README.md          # Project documentation
```

## Dependencies
```json
{
  "@react-navigation/native": "^7.0.14",
  "@react-navigation/stack": "^7.1.1",
  "@reduxjs/toolkit": "^2.5.1",
  "axios": "^1.7.9",
  "dotenv": "^16.4.7",
  "expo": "~52.0.37",
  "expo-constants": "~17.0.7",
  "expo-font": "~13.0.4",
  "expo-splash-screen": "~0.29.22",
  "expo-status-bar": "~2.0.1",
  "react": "18.3.1",
  "react-native": "0.76.7",
  "react-native-gesture-handler": "~2.20.2",
  "react-native-get-random-values": "~1.11.0",
  "react-native-reanimated": "~3.16.1",
  "react-native-safe-area-context": "4.12.0",
  "react-native-screens": "~4.4.0",
  "react-native-size-matters": "^0.4.2",
  "react-native-svg-transformer": "^1.5.0",
  "react-redux": "^9.2.0"
}
```

## Contributing
Feel free to submit issues or pull requests to improve this boilerplate.

## License
This project is licensed under the MIT License.

