import { createFileRoute } from '@tanstack/react-router';
import StaffLayout from '@/components/StaffLayout';
import MasterDataHeader from '@/components/MasterDataHeader';

export const Route = createFileRoute('/superadmin/ruangan/')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <MasterDataHeader
                    title='List Ruangan'
                    description='Halaman untuk menampilkan list ruangan pada sistem.'
                    createHref='/superadmin/ruangan/tambah-ruangan'
                />
                {/* TODO: Change this to a table component MasterDataTable*/}
                <div>Table</div>
            </main>
        </StaffLayout>
    );
}
