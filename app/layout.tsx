import './globals.css';
import '../styles/tailwind.css';
import Header from '../src/components/ui/Header';
import Footer from '../src/components/ui/Footer';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-sand text-ink">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
