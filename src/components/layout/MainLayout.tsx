
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ScrollButton } from '@/components/ui/scroll-button';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default MainLayout;
