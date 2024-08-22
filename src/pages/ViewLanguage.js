import Head from 'next/head';
import ContentList from '../components/ContentList';

function ViewLanguage() {
    const retrieve_language = "SELECT id, name, description FROM language";
    return (
        <>
            <Head>
                <title>Explore Languages | Code Learn Hub</title>
                <meta name="description" content="List of Programming Languages" />
            </Head>
            <main>
                <ContentList sql_command={retrieve_language} />
            </main>
        </>
    )
}

export default ViewLanguage;
