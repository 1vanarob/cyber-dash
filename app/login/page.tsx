
import LoginForm from '@/app/ui/login-form';
import '@/global.css'
import Image from 'next/image';
export default function LoginPage() {
  return (
      <main className="flex h-full items-center justify-center sm:h-screen">
       <div className='hidden p-10 w-fit bg-blue-500 h-full md:block md:w-6/12'>
       <div className='flex-col items-center p-15 rounded-lg bg-blue-500 h-fit'>
       <Image
          src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden justify-self-center md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      </div>
       </div>
       <div className="w-8/12 flex-col items-center px-15 rounded-lg sm:w-6/12">
          <LoginForm/>
       </div>
      </main>

  );
}