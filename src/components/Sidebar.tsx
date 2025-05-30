import NavItem from './NavItem';
import type { SidebarSection } from '@/constant/sidebarItems';
import { staffSidebarItems, superAdminSidebarItems } from '@/constant/sidebarItems';

interface SidebarProps {
    role: 'superadmin' | 'staff' | 'koor';
}

export default function Sidebar({ role }: SidebarProps) {
    let sidebarItems: Array<SidebarSection>;

    switch (role) {
        case 'superadmin':
            sidebarItems = superAdminSidebarItems;
            break;
        case 'staff':
            sidebarItems = staffSidebarItems;
            break;
        case 'koor':
            sidebarItems = staffSidebarItems;
            break;
        default:
            sidebarItems = [];
    }

    return (
        <nav className='p-6 space-y-10 w-full h-full bg-base-100 max-w-[285px] min-w-[285px]'>
            <section className='flex gap-4 items-center'>
                <div className='rounded-full bg-primary h-15 w-15'></div>
                <h1 className='font-semibold'>E-Lab</h1>
            </section>

            <ul className='space-y-10'>
                {sidebarItems.map((item, index) => (
                    <li key={index} className='space-y-4'>
                        <h2 className='font-semibold'>{item.title}</h2>
                        <ul className='space-y-2'>
                            {item.items.map((subItem, subIndex) => (
                                <NavItem key={subIndex} label={subItem.label} icon={subItem.icon} href={subItem.href} />
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
