export interface SidebarItem {
    label: string;
    icon: string;
    href: string;
}

export interface SidebarSection {
    title: string;
    items: Array<SidebarItem>;
}

export const superAdminSidebarItems: Array<SidebarSection> = [
    {
        title: 'Dashboard',
        items: [
            {
                label: 'Dashboard',
                icon: 'humbleicons:dashboard',
                href: '/superadmin',
            },
            {
                label: 'Peminjaman Ruangan',
                icon: 'mingcute:school-line',
                href: '/superadmin/peminjaman-ruangan',
            },
            {
                label: 'Peminjaman Alat',
                icon: 'tabler:tools',
                href: '/superadmin/peminjaman-alat',
            },
        ],
    },
    {
        title: 'Resources',
        items: [
            {
                label: 'Modul Praktikum',
                icon: 'material-symbols:book-outline',
                href: '/superadmin/modul-praktikum',
            },
            {
                label: 'Jadwal Praktikum',
                icon: 'uil:schedule',
                href: '/superadmin/jadwal-praktikum',
            },
            {
                label: 'Kategori Modul',
                icon: 'tabler:category-plus',
                href: '/superadmin/kategori-modul',
            },
            {
                label: 'Ruangan',
                icon: 'mingcute:school-line',
                href: '/superadmin/ruangan',
            },
            {
                label: 'Alat Lab',
                icon: 'tabler:tools',
                href: '/superadmin/alat-lab',
            },
            {
                label: 'Kelola Akun',
                icon: 'gg:profile',
                href: '/superadmin/kelola-akun',
            },
            {
                label: 'Kelola Berita',
                icon: 'bx:news',
                href: '/superadmin/berita',
            },
            {
                label: 'Kelola Badge',
                icon: 'material-symbols:badge-outline',
                href: '/superadmin/badge',
            },
        ],
    },
];

export const staffSidebarItems: Array<SidebarSection> = [
    {
        title: 'Dashboard',
        items: [
            {
                label: 'Dashboard',
                icon: 'humbleicons:dashboard',
                href: '/superadmin',
            },
            {
                label: 'Peminjaman Ruangan',
                icon: 'mingcute:school-line',
                href: '/superadmin/peminjaman-ruangan',
            },
            {
                label: 'Peminjaman Alat',
                icon: 'tabler:tools',
                href: '/superadmin/peminjaman-alat',
            },
        ],
    },
    {
        title: 'Resources',
        items: [
            {
                label: 'Ruangan',
                icon: 'mingcute:school-line',
                href: '/superadmin/ruangan',
            },
            {
                label: 'Alat Lab',
                icon: 'tabler:tools',
                href: '/superadmin/alat-lab',
            },
        ],
    },
];
