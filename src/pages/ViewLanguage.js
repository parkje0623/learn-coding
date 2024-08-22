import Head from 'next/head';
import ContentList from '../components/ContentList';

function ViewLanguage() {
    return (
        <>
            <Head>
                <title>Explore Languages | Code Learn Hub</title>
                <meta name="description" content="List of Programming Languages" />
            </Head>
            <main>
                <ContentList table="language" />
            </main>
        </>
    )
}

export default ViewLanguage;
