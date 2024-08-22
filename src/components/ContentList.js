function ContentList({ content }) {
    return (
        <div className='content-list'>
            { content
                ? <ul>
                    {content.map(row => (
                        <li key={row.id}>
                            <h3>{row.name}</h3>
                            <p>{row.description}</p>
                        </li>
                    ))}
                </ul>
                : <h2>No Contents Available...</h2>
            }
        </div>
    );
}

export default ContentList;
