import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 - Page Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          background: '#f8fafc'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontSize: '6rem',
              fontWeight: 'bold',
              color: '#cbd5e1',
              margin: '0 0 1rem'
            }}>404</h1>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1e293b',
              margin: '0 0 1rem'
            }}>
              Page Not Found
            </h2>
            <p style={{
              color: '#64748b',
              margin: '0 0 2rem'
            }}>
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link 
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                background: '#3b82f6',
                color: 'white',
                fontWeight: '500',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}