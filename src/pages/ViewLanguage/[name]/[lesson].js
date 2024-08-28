import Head from 'next/head';
import fs from 'fs';
import path from 'path';

import Lesson from '@/components/Lesson.js';

export async function getServerSideProps(context) {
    const { name, lesson } = context.params;
    const [languageId, languageName] = name.split('-'); // Split the Slug-based Domain
    const [lessonId, lessonName] = lesson.split('-');

    // Read JSON file
    const filePath = path.join(process.cwd(), 'public', 'lesson_data', 'html.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    // const content = data.lessons.find((lesson) => lesson.contentId == languageId);
    // console.log(content)
    const content = data.lessons.find((section) => section.contentId == lessonId);
    const sections = content ? content.sections : [];

    return {
        props: {
            sections,
            languageName,
            lessonName
        },
    };
}

function ViewLanguageLesson ({ sections, languageName, lessonName }) {
    return (
        <>
            <Head>
                <title>{`Learn ${lessonName} | Code Learn Hub`}</title>
                <meta name="description" content="Learning through Lesson" />
            </Head>
            <main>
                <Lesson sections={sections} contentTitle={languageName} lessonName={lessonName} />
            </main>
        </>
    )
}

export default ViewLanguageLesson;
