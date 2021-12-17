import React from 'react';
import { Form, useActionData, useLoaderData } from 'remix';

export const loader = async () => {
  try {
    const response = await fetch('https://worker.lms-oto.workers.dev');
    // const result = await response.json();
    return response;
  } catch (e) {
    return { catchError: e };
  }
};

export async function action() {
  await fetch('https://worker.lms-oto.workers.dev/increment', {
    method: 'GET'
  });
  return null;
}

export function CatchBoundary() {
  const caught = useCatch();

  return <pre>{JSON.stringify(caught)}</pre>;
}

const Index = () => {
  const loaderData = useLoaderData();
  return (
    <div>
      <pre>{JSON.stringify(loaderData, 0, 2)}</pre>
      <Form method='post'>
        <button>INCREMENT</button>
      </Form>
    </div>
  );
};

export default Index;
