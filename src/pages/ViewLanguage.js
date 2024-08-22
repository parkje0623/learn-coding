import Head from 'next/head';
import ContentList from '../components/ContentList';
import { sql } from '@vercel/postgres';

export async function getServerSideProps() {
    const { rows } = await sql`SELECT id, name, description FROM language`;

    return {
        props: {
            content: rows,
        },
    };
}

function ViewLanguage({ content }) {
    return (
        <>
            <Head>
                <title>Explore Languages | Code Learn Hub</title>
                <meta name="description" content="List of Programming Languages" />
            </Head>
            <main>
                <ContentList content={content} />
            </main>
        </>
    )
}

export default ViewLanguage;
