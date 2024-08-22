// head of the page
import Head from 'next/head';

// Components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ContentButton from '../components/ContentButton';

// Style
import '../styles/global.css';
import '../styles/home.css';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Code Learn Hub</title>
        <meta name="description" content="Welcome to the home page" />
      </Head>
      <Header />
      <main>
        <div className="home-container">
              <h2>Welcome to Code Learn Hub</h2>
              <p>Explore and enhance your coding skills with interactive lessons and concepts.</p>
              <div className="home-container-buttons">
                  <ContentButton to="/ViewLanguage" label="Programming Fundamentals" />
                  <ContentButton to="/ViewConcept" label="Computer Science Concepts" />
              </div>
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
