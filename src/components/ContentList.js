import { useRouter } from 'next/router';

const ContentList = ({ contents, section }) => {
    const router = useRouter();

    const handleClick = (id, name) => {
        console.log(section);
        if (section == "language") {
            router.push(`/ViewLanguage/${id}-${encodeURIComponent(name)}`);
        } else if (section == "concept") {
            router.push(`/ViewConcept/${id}-${encodeURIComponent(name)}`);
        } else {
            const curr_loc = window.location.pathname;
            router.push(`${curr_loc}/${id}-${encodeURIComponent(name)}`);
        }
    }

    return (
        <div className='content-list'>
            { contents.length > 0 
                ? <ul>
                    {contents.map(content => (
                        <li key={content.id}>
                            <h3>{content.name}</h3>
                            <p>{content.description}</p>
                            <button onClick={() => handleClick(content.id, content.name)}>
                                Learn {content.name}
                            </button>
                        </li>
                    ))}
                </ul>
                : <h2>No Content Available...</h2>
            }
        </div>
    );
}

export default ContentList;
