import Link from 'next/link';
import '../styles/header.css';

function Header() {
    return (
        <header>
            <h1><Link href="/">Code Learn Hub</Link></h1>
            <nav>
                <ul>
                    <li className="dropdown">
                        <Dropdown label="Language" options={['Python', 'HTML', 'CSS', 'JavaScript', 'React']} />
                    </li>
                    <li className="dropdown">
                        <Dropdown label="Concept" options={['Database', 'Algorithms', 'Data Structures']} />
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
                    <li key={option}>{option}</li>
                ))}
            </ul>
        </div>
    )
}

export default Header;
