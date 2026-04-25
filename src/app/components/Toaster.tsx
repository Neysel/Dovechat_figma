import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        style: {
          background: 'white',
          color: '#1f2937',
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
        },
        className: 'sonner-toast',
        duration: 4000,
      }}
      theme="light"
      richColors
    />
  );
}
