import Head from 'next/head';
import ContentList from '../components/ContentList';
import { sql } from '@vercel/postgres';

export async function getServerSideProps() {
    try {
        const { rows } = await sql`SELECT id, name, description FROM language`;

        return {
            props: {
                content: rows,
            },
        };
    } catch (error) {
        console.error("Error fetching language data:", error);
        return {
            props: {
                content: [],
                error: "Failed to fetch language data. Please try again later.",
            },
        };
    }
}

function ViewLanguage({ content }) {
    const section = "language";

    return (
        <>
            <Head>
                <title>Explore Languages | Code Learn Hub</title>
                <meta name="description" content="List of Programming Languages" />
            </Head>
            <main>
                <ContentList contents={content} section={section} />
            </main>
        </>
    )
}

export default ViewLanguage;
