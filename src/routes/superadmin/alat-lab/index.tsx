import { createFileRoute } from '@tanstack/react-router';
import MasterDataHeader from '@/components/MasterDataHeader';
import StaffLayout from '@/components/StaffLayout';

export const Route = createFileRoute('/superadmin/alat-lab/')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <MasterDataHeader
                    title='List Alat Lab'
                    description='Halaman untuk menampilkan list alat lab pada sistem.'
                    createHref='/superadmin/alat-lab/tambah-alat-lab'
                />
                {/* TODO: Change this to a table component MasterDataTable*/}
                <div>Table</div>
            </main>
        </StaffLayout>
    );
}
