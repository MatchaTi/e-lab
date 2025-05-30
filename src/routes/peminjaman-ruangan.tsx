import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/peminjaman-ruangan')({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Peminjaman Ruangan</div>;
}
