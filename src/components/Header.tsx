import { Link } from '@tanstack/react-router';

export default function Header() {
    return (
        <header className='flex gap-2 justify-between p-2 text-black bg-white'>
            <nav className='flex flex-row'>
                <div className='px-2 font-bold'>
                    <Link to='/'>Home</Link>
                </div>
            </nav>
        </header>
    );
}
