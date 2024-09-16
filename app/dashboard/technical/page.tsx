import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestIncidents from '@/app/ui/dashboard/latest-incidents';
import { fetchPhishing, fetchLatestIncidents } from '@/app/lib/data';
export default async function Page() {
    const phishing = await fetchPhishing();
    const latestIncidents = await fetchLatestIncidents();
    return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>
        Technical Analysis
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {<RevenueChart revenue={phishing}  />}
        {<LatestIncidents latestIncidents={latestIncidents} /> }
      </div>
    </main>
  );
}