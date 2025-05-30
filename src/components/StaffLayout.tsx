import { Icon } from '@iconify/react/dist/iconify.js';
import Sidebar from './Sidebar';
import { getCurrentDate } from '@/utils/date';

interface StaffLayoutProps {
    children: React.ReactNode;
}

export default function StaffLayout({ children }: StaffLayoutProps) {
    // TODO: Implement authentication logic
    //
    return (
        <div className='flex flex-col w-full font-medium lg:flex-row drawer'>
            <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />

            <div className='flex sticky top-0 flex-none gap-4 items-center p-4 lg:hidden bg-base-100'>
                <label htmlFor='my-drawer-3' aria-label='open sidebar' className='cursor-pointer'>
                    <Icon icon='ci:hamburger-md' />
                </label>
                <h2 className='font-semibold'>E-Lab</h2>
            </div>

            {/* desktop */}
            <div className='hidden sticky top-0 h-screen lg:block'>
                <Sidebar role='superadmin' />
            </div>

            {/* content */}
            <main className='p-4 w-full lg:p-10'>
                <section className='flex justify-between items-center mb-10 w-full'>
                    <div className='space-y-3'>
                        {/* TODO: Implement authentication logic */}
                        <h1 className='font-semibold'>Selamat Datang, Matcha</h1>
                        <p>{getCurrentDate()}</p>
                    </div>
                    <form>
                        <button className='btn btn-error'>
                            <Icon icon='material-symbols:logout-rounded' />
                            <span>Logout</span>
                        </button>
                    </form>
                </section>
                {children}
            </main>

            {/* mobile */}
            <div className='drawer-side'>
                <label htmlFor='my-drawer-3' aria-label='close sidebar' className='drawer-overlay'></label>
                <Sidebar role='superadmin' />
            </div>
        </div>
    );
}
