import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { PostProvider } from './context/PostContext';
import './index.css';
import GlobalStyles from './styles/globalStyles';
import { lightTheme } from './styles/theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <PostProvider>
            <GlobalStyles />
            <App />
          </PostProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

