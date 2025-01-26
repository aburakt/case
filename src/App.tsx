import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from "@vercel/analytics/react";
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataProvider';
import AppRoutes from './routes/AppRoutes';
import GlobalStyles from './styles/globalStyles';
import { lightTheme } from './styles/theme';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={lightTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <DataProvider>
            <Analytics />
            <GlobalStyles />
            <AppRoutes />
          </DataProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
};

export default App;
