import '../styles/global.css'; // Import global CSS
import Header from '../components/Header'; // Import a header component
import Footer from '../components/Footer'; // Import a footer component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header /> {/* Render header on every page */}
      <Component {...pageProps} /> {/* Render the page component */}
      <Footer /> {/* Render footer on every page */}
    </>
  );
}

export default MyApp;
