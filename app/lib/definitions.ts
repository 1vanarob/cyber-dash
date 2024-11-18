// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  job_title: string;
  dept: number;
};

export type Organisation = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};


export type Phishing = {
  dept: number;
  phishing_fails: number;
};

export type LatestIncident = {
  dept: number;
  dept_name: string;
  type: string;
  severity: number;
};


export type SessionPayload = {
  id: string;
  job_type: string;
  dept: number;
}
