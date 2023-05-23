import RegisterModal from '../components/modals/RegisterModal';
import Navbar from '../components/navbar/Navbar';
import ToasterProvider from '../providers/ToasterProvider';
import './global.css';
import { Nunito } from 'next/font/google';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
