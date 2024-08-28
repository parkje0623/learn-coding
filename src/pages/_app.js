import '../styles/global.css'; // Import global CSS
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  // Check if the current page wants to hide the header and footer
  const noHeaderFooter = Component.noHeaderFooter || false;

  return (
    <div className='app-container'>
      {/* To be rendered to every page */}
      <Layout noHeaderFooter={noHeaderFooter}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
