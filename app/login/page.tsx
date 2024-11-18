import LoginForm from '@/app/ui/login-form';
import '@/global.css'
export default function LoginPage() {
  return (
      <main className="flex min-h-screen flex-col p-6">
       <div className='hidden items-justify-center min-h-screen w-fit bg-blue-500 h-screen md:block'>
       </div>
       <div className="w-8/12 flex-col items-center rounded-lg">
          <LoginForm/>
       </div>
      </main>

  );
}