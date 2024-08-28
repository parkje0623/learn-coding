import Head from 'next/head';
import ContentList from '@/components/ContentList';
import { sql } from '@vercel/postgres';

export async function getServerSideProps(context) {
    const { name, lesson } = context.params;
    const [conceptId, conceptName] = name.split('-'); // Split the Slug-based Domain
    const [lessonId, lessonName] = lesson.split('-');

    const { rows } = await sql`SELECT id, lesson_number, lesson_name, content, resources 
                                FROM concept_lesson 
                                WHERE concept_id=${conceptId} AND concept_section_id=${lessonId}
                                ORDER BY lesson_number`;

    return {
        props: {
            sections: rows,
            conceptName,
            lessonName
        },
    };
}

function ViewConceptLesson ({ sections, conceptName, lessonName }) {
    return (
        <>
            <Head>
                <title>Learn {lessonName} | Code Learn Hub</title>
                <meta name="description" content="Learning through Lesson" />
            </Head>
            <main>
                <h2>{conceptName} - {lessonName}</h2>
                
                {/* {sections.map(name => <ol><li key={name.id}>{name.lesson_number}. {name.lesson_name}</li><li>{name.content}</li><li>{name.resources ? name.resources : "Resource HERE"}</li></ol>)} */}
            </main>
        </>
    )
}

export default ViewConceptLesson;
