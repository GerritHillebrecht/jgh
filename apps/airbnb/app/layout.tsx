import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import Navbar from './components/navbar/Navbar';
import ToasterProvider from './providers/ToasterProvider';
import './global.css';
import { Nunito } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
// import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const currentUser = await getCurrentUser();
  // console.log('currentUser in Layout', currentUser);

  return (
    <html lang="en">
      <body className={font.className}>
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={null} />
        <ToasterProvider />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
