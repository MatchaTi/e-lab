import { createFileRoute } from '@tanstack/react-router';
import BorrowARoomForm from '@/components/forms/BorrowARoomForm';

export const Route = createFileRoute('/peminjaman-ruangan')({
    component: RouteComponent,
});

function RouteComponent() {
    return <BorrowARoomForm />;
}
