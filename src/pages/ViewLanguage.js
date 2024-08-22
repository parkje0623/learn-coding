import Head from 'next/head';
import ContentList from '../components/ContentList';
import { sql } from "@vercel/postgres";

export async function getServerSideProps() {
    const tableName = 'language'; // or dynamically set this value
    const { rows } = await sql`SELECT id, name, description FROM ${tableName}`;

    return {
        props: {
            content: rows,
        },
    };
}

function ViewLanguage() {
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
