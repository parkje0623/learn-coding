

function ContentList(table) {
    const [rows, setRow] = useState([]);

    useEffect(() => {
        fetch(`/api/fetch/${table}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setRow(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [table])

    return (
        <div className='content-list'>
            { rows.length > 0 
                ? <ul>
                    {rows.map(row => (
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
