import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from '@tanstack/react-router';

interface NavItemProps {
    label: string;
    icon: string;
    href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, href }) => {
    return (
        <li>
            <Link
                to={href}
                activeProps={{ className: 'btn-primary' }}
                inactiveProps={{ className: 'btn-ghost' }}
                className='justify-start rounded-md btn btn-block'
            >
                <Icon icon={icon} />
                <span>{label}</span>
            </Link>
        </li>
    );
};

export default NavItem;
