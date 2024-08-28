import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa'; 
import Link from 'next/link';
import '../styles/lesson.css';

function Lesson({ sections, contentTitle, lessonName }) {
    const router = useRouter();

    const handleBack = () => {
        router.back(); 
    };

    return (
        <div>
            <div className='content-list-back'>
                <button onClick={handleBack} className="back-button">
                    <FaArrowLeft />
                    <strong>Back</strong>
                </button>
            </div>
            <div className='lesson-container'>
                <h2 className='lesson-title'>
                    {contentTitle} - {lessonName}
                </h2>
                <ol className='lesson-list'>
                    {sections.map((section, indexed) => (
                        <li className='lesson-list-item' key={indexed}>
                            <h3 className='lesson-list-item-title'>
                                {section.lessonNumber}. {section.lessonName}
                            </h3>
                            {(section.content || []).map((detail, index) => (
                                <div className='lesson-list-subtopic-container' key={index}>
                                    <h4 className='lesson-list-subtopic-title'>
                                        {detail.subtopic}
                                    </h4>
                                    <div className='lesson-list-subtopic-detail'>
                                        {detail.description.split('\n').map((newline, idx) => (
                                            <div className='lesson-list-subtopic-detail-newline' key={idx}>
                                                {newline.split(';').map((point, idx2) => (
                                                    <div className='lesson-list-subtopic-detail-bullet-point' key={idx2}>
                                                        {idx2 === 0 ? (
                                                            // If it's the first part, just render the text
                                                            <p className='detail-not-bullet-point'>
                                                                {point.trim()}
                                                            </p>
                                                        ) : (
                                                            // If not the first part, render as list items
                                                            <ul className='detail-bullet-point-container'>
                                                                <li className='detail-bullet-point' key={idx2+'unique'}>
                                                                    {point.trim()}
                                                                </li>
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                    <div className='lesson-list-subtopic-example'>
                                        {detail.resource &&
                                            <Link className='lesson-list-subtopic-resource' 
                                                href={`/Preview?fileName=${detail.resource}`} 
                                                target='_blank'>
                                                View Example
                                            </Link>
                                        }
                                    </div>
                                </div>
                            ))}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Lesson;
