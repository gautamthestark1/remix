import React from 'react';
import { useLoaderData } from 'remix';

export const loader = async () => {
  let errResponse;
  try {
    const response = await fetch('https://sample-json.lms-oto.workers.dev');
    errResponse = response;
    const result = await response.json();
    return result;
  } catch (err) {
    return { error: errResponse };
  }
};

const Index = () => {
  const data = useLoaderData();
  return (
    <div>
      <pre>{JSON.stringify(data, 0, 2)}</pre>
    </div>
  );
};

export default Index;
