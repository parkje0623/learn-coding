const ContentList = ({ content }) => {
    return (
        <div className='content-list'>
            { content.length > 0 
                ? <ul>
                    {content.map(row => (
                        <li key={row.id}>
                            <h3>{row.name}</h3>
                            <p>{row.description}</p>
                        </li>
                    ))}
                </ul>
                : <h2>No Content Available...</h2>
            }
        </div>
    );
}

export default ContentList;
