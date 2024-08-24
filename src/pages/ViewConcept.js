import Head from 'next/head';
import ContentList from '../components/ContentList';
import { sql } from '@vercel/postgres';

export async function getServerSideProps() {
    try {
        const { rows } = await sql`SELECT id, name, description FROM concepts`;
        return {
            props: {
                content: rows,
            },
        };
    } catch (error) {
        console.error("Error fetching concept data:", error);
        return {
            props: {
                content: [],
                error: "Failed to fetch concept data. Please try again later.",
            },
        };
    }
}

function ViewConcept({ content }) {
    const section = "concept";

    return (
        <>
            <Head>
                <title>Explore Concepts | Code Learn Hub</title>
                <meta name="description" content="List of Computer Science Concepts" />
            </Head>
            <main>
                <ContentList contents={content} section={section} />
            </main>
        </>
    )
}

export default ViewConcept;
