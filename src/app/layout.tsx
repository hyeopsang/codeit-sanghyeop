import type {Metadata} from 'next';
import './globals.css';
import Header from '../components/header';

export const metadata: Metadata = {
  title: 'do it',
  description: 'todo list web',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
