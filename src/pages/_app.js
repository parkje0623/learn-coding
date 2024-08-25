import '../styles/global.css'; // Import global CSS
import Header from '../components/Header'; // Import a header component
import Footer from '../components/Footer'; // Import a footer component

function MyApp({ Component, pageProps }) {
  return (
    <div className='app-container'>
      <Header /> {/* Render header on every page */}
      <main>
        <Component {...pageProps} /> {/* Render the page component */}
      </main>
      <Footer /> {/* Render footer on every page */}
    </div>
  );
}

export default MyApp;
