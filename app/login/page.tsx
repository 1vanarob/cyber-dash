import LoginForm from '@/app/ui/login-form';
import '@/global.css'
import Image from 'next/image';
export default function LoginPage() {
  return (
      <main className="flex min-h-screen flex-col p-6">
       <div className='hidden items-justify-center min-h-screen w-fit bg-blue-500 h-screen md:block'>
       <Image
          src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
       </div>
       <div className="w-8/12 flex-col items-center rounded-lg">
          <LoginForm/>
       </div>
      </main>

  );
}