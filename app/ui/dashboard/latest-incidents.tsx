import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { LatestIncident } from '@/app/lib/definitions';
export default async function LatestIncidents({
  latestIncidents,
}: {
  latestIncidents: LatestIncident[];
}) {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={` mb-4 text-xl md:text-2xl`}>
        Latest Security Incidents
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: Uncomment this code in Chapter 7 */}

        {<div className="bg-white px-6">
          {latestIncidents.map((incident, i) => {
            return (
              <div
                key={incident.dept}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {incident.dept_name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {incident.type}
                    </p>
                  </div>
                </div>
                <p
                  className={` truncate text-sm font-medium md:text-base`}
                >
                  {incident.severity}
                </p>
              </div>
            );
          })}
        </div> }
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
