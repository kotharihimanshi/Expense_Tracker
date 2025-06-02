'use client';

import { ClerkProvider } from '@clerk/nextjs';

export default function ClientProvider({ children }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
