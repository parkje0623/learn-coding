import { useRouter } from 'next/router';
import '../styles/contentlist.css';
import { FaArrowLeft } from 'react-icons/fa'; 

const ContentList = ({ contents, section }) => {
    const router = useRouter();

    const handleBack = () => {
        // Go back to previous page
        router.back(); 
    };

    const handleClick = (id, name) => {
        if (section == "language") {
            router.push(`/ViewLanguage/${id}-${encodeURIComponent(name)}`);
        } else if (section == "concept") {
            router.push(`/ViewConcept/${id}-${encodeURIComponent(name)}`);
        } else {
            const curr_loc = window.location.pathname;
            router.push(`${curr_loc}/${id}-${encodeURIComponent(name)}`);
        }
    };

    return (
        <div className='content-list'>
            <div className='content-list-back'>
                <button onClick={handleBack} className="back-button">
                    <FaArrowLeft />
                    <strong>Back</strong>
                </button>
            </div>
            <div className='content-list-body'>
                { contents.length > 0 
                    ? <ul>
                        {contents.map(content => (
                            <li key={content.id}>
                                <div className='content-list-body-info'>
                                    <h3>{content.name}</h3>
                                    <p>{content.description}</p>
                                </div>
                                <div className='content-list-body-button'>
                                    <button onClick={() => handleClick(content.id, content.name)}>
                                        Learn {content.name}
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    : <h2>No Content Available...</h2>
                }
            </div>
        </div>
    );
}

export default ContentList;
