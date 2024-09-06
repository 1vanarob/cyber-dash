import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchPhishing, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';

 
export default async function Page() {
  const phishing = await fetchPhishing();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfIncidents,
      avgSecurity,
      avgIncidentSeverity,
  } = await fetchCardData();
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {<Card title="Total Incidents" value={numberOfIncidents} type="collected" /> }
        {<Card title="Average Security Security" value={avgSecurity} type="invoices" />}
        { <Card
          title="Average Incient Severity"
          value={avgIncidentSeverity}
          type="customers"
        /> }
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      </div>
    </main>
  );
}