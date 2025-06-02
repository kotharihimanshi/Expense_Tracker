//   app/_app.js
import { ThemeProvider } from 'next-themes'; //  Import ThemeProvider
import { ClerkProvider } from '@clerk/nextjs';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default MyApp;