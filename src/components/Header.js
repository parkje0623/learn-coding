import Link from 'next/link';
import '../styles/header.css';

function Header() {
    return (
        <header>
            <h1><Link href="/">Code Learn Hub</Link></h1>
            <nav>
                <ul>
                    <li className="dropdown">
                        <Dropdown label="Language" options={[
                            { name: 'Python', path: '/ViewLanguage/1-Python'},
                            { name: 'HTML', path: '/ViewLanguage/2-HTML'},
                            { name: 'CSS', path: '/ViewLanguage/3-CSS'},
                            { name: 'JavaScript', path: '/ViewLanguage/4-JavaScript'},
                            { name: 'React', path: '/ViewLanguage/5-React'}
                        ]} />
                    </li>
                    <li className="dropdown">
                        <Dropdown label="Concept" options={[
                            { name: 'Database', path: '/ViewConcept/1-Database'},
                            { name: 'Algorithms', path: '/ViewConcept/2-Algorithms'},
                            { name: 'Data Structures', path: '/ViewConcept/3-Data Structures'}
                        ]} />
                    </li>
                    <li>
                        <Link href="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function Dropdown({label, options}) {
    return (
        <div className="dropdown">
            <span className="common-font dropdown-label">{label}</span>
            <ul>
                {options.map(option => (
                    <li key={option.name}>
                        <Link href={option.path}>
                            {option.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header;
