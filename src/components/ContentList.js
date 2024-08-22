import { sql } from "@vercel/postgres";

export default async function ContentList(sql_command) {
    const { rows } = await sql`${sql_command}`;

    return (
        <div className='content-list'>
            { rows
                ? <ul>
                    {rows.map(row => (
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
};

