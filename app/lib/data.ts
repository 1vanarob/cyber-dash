import { sql } from '@vercel/postgres';
import {
  LatestIncident,
  Phishing,
} from './definitions';

export async function fetchPhishing() {
  try {
    const data = await sql<Phishing>`SELECT * FROM Organisational`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestIncidents() {
  try {
    const data = await sql<LatestIncident>`
      SELECT department.dept, department.dept_name, technical.type, technical.severity
      FROM technical
      JOIN department ON department.dept = technical.dept
      ORDER BY technical.severity DESC`;

    const latestIncidents = data.rows.map((invoice) => ({
      ...invoice,
    }));
    return latestIncidents;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invcidents.');
  }
}

export async function fetchCardData() {
  try {
    const incidentCountPromise = sql`SELECT COUNT(*) FROM technical`;
    const secCulturePromise = sql`SELECT AVG(sec_culture) FROM organisational`;
    const severityPromise = sql`SELECT
         AVG(severity) FROM technical`;

    const data = await Promise.all([
      incidentCountPromise,
      secCulturePromise,
      severityPromise,
    ]);

    const numberOfIncidents = Number(data[0].rows[0].count ?? '0');
    const avgSecurity = Number(data[1].rows[0].count ?? '0');
    const avgIncidentSeverity = Number(data[2].rows[0].count ?? '0');
    

    return {
      numberOfIncidents,
      avgSecurity,
      avgIncidentSeverity,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

