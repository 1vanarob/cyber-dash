'use client';
import {
  UserGroupIcon,
  HomeIcon,
  ComputerDesktopIcon,
  ServerIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Organisational',
    href: '/dashboard/organisational',
    icon: ServerIcon,
  },
  { name: 'Technical', href: '/dashboard/technical', icon: ComputerDesktopIcon },
  {name: 'Social', href: '/dashboard/social',icon:UserGroupIcon},
  
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <main className='flex-col justify-items-between'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
      <div>
      <Link 
      key={"Profile"} 
      href={"/dashboard/profile"}
      className={clsx(
        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
        {
          'bg-sky-100 text-blue-600': pathname === "/dashboard/profile",
        },
      )}
      >
        <UserIcon className="w-6" />
        <p className="hidden md:block">Profile</p>
      </Link>
      </div>
     
    </main>
  );
}