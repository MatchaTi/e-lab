import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/superadmin/ruangan/tambah-ruangan')({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/superadmin/ruangan/tambah-ruangan"!</div>;
}
