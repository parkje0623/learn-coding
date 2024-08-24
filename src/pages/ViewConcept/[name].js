import Head from 'next/head';
import ContentList from '@/components/ContentList';
import { sql } from '@vercel/postgres';

export async function getServerSideProps(context) {
    const { name } = context.params;
    const [id, conceptName] = name.split('-'); // Split the Slug-based Domain

    const { rows } = await sql`SELECT * FROM concept_section WHERE concept_id = ${id} ORDER BY id`;

    return {
        props: {
            sections: rows,
            conceptName,
        },
    };
}

function ViewConceptSyllabus ({ sections, conceptName }) {
    return (
        <>
            <Head>
                <title>Explore {conceptName} Syllabus | Code Learn Hub</title>
                <meta name="description" content="Syllabus for Programming Language" />
            </Head>
            <main>
                <ContentList contents={sections} section={conceptName} />
            </main>
        </>
    )
}

export default ViewConceptSyllabus;
