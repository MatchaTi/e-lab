import { createFileRoute } from '@tanstack/react-router';
import MasterDataHeader from '@/components/MasterDataHeader';
import StaffLayout from '@/components/StaffLayout';

export const Route = createFileRoute('/superadmin/kategori-modul/')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <MasterDataHeader
                    title='List Kategori Modul'
                    description='Halaman untuk menampilkan list kategori modul pada sistem.'
                    createHref='/superadmin/kategori-modul/tambah-kategori-modul'
                />
                {/* TODO: Change this to a table component MasterDataTable*/}
                <div>Table</div>
            </main>
        </StaffLayout>
    );
}
