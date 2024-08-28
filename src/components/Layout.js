import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, noHeaderFooter = false }) {
  return (
    <>
        {!noHeaderFooter && <Header />}
        <main>
            {children}
        </main>
      {!noHeaderFooter && <Footer />}
    </>
  );
}