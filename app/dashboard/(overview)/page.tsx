import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchPhishing, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import { cookies } from 'next/headers';
import adminDashboard from '@/app/ui/dashboard/admindash';
import userDashboard from '@/app/ui/dashboard/userdash';



export default async function Page() {
  const phishing = await fetchPhishing();
  const role = cookies().get('role')?.value
  
  if (role=='manager'){
    return adminDashboard();
  }
  return userDashboard();
  


}