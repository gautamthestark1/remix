import React from 'react';
import { Form, redirect, useLoaderData } from 'remix';

export const loader = async () => {
  const response = await fetch('https://sample-json.lms-oto.workers.dev');
  const result = await response.json();
  return result;
};

export async function action() {
  fetch('https://worker.lms-oto.workers.dev/increment', {
    method: 'post'
  });
  return redirect('/');
}

const Index = () => {
  const data = useLoaderData();
  return (
    <div>
      <pre>{JSON.stringify(data, 0, 2)}</pre>
      <Form method='post'>
        <button type='submit'>INCREMENT</button>
      </Form>
    </div>
  );
};

export default Index;
