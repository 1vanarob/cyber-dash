import Logo from '@/app/ui/logo';
import LoginForm from '@/app/ui/login-form';
import '@/global.css'
import Image from 'next/image';
export default function LoginPage() {
  return (

      <main className="flex items-center justify-center md:h-screen">
       <div className='shrink w-6/12 h-full border-black bg-blue-500 max-h-fit'>
       <Image
          src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
       </div>
       <div className="w-6/12 flex-col items-center px-10 rounded-lg">
          <LoginForm/>
       </div>
      </main>

  );
}