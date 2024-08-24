import Head from 'next/head';
import ContentList from '@/components/ContentList';
import { sql } from '@vercel/postgres';

export async function getServerSideProps(context) {
    const { name } = context.params;
    const [id, languageName] = name.split('-'); // Split the Slug-based Domain

    const { rows } = await sql`SELECT * FROM language_section WHERE language_id = ${id} ORDER BY id`;

    return {
        props: {
            sections: rows,
            languageName,
        },
    };
}

function ViewLanguageSyllabus ({ sections, languageName }) {
    return (
        <>
            <Head>
                <title>Explore {languageName} Syllabus | Code Learn Hub</title>
                <meta name="description" content="Syllabus for Programming Language" />
            </Head>
            <main>
                <ContentList contents={sections} section={languageName} />
            </main>
        </>
    )
}

export default ViewLanguageSyllabus;
