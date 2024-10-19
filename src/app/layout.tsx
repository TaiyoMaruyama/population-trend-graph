'use client';

import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@/components/common/GlobalStyles';
import theme from '@/themes/theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <html lang='ja'>
          <body>{children}</body>
        </html>
      </ThemeProvider>
    </>
  );
}
