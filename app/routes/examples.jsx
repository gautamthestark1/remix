import { Outlet, Link } from 'remix';
import { Disclosure } from '@headlessui/react';
import { Fragment } from 'react';

const Examples = () => (
  <div className='bg-primary-base'>
    <header className='h-24' />
    <div className='container flex w-full mx-auto bg-white'>
      <div className='flex-shrink-0 min-h-screen p-4 border-r w-72 border-r-primary-base'>
        <Link to='/examples'>
          <div className='text-2xl font-bold'>Examples</div>
        </Link>
        <ul className='pl-4 mt-4 space-y-2 list-disc list-outside'>
          <li>
            <Disclosure>
              <Link to='setup'>
                <Disclosure.Button>Setup</Disclosure.Button>
              </Link>
              <Disclosure.Panel as={Fragment}>
                <ul className='pl-4 mt-2 space-y-2 list-disc list-outside'>
                  <li>
                    <Link to='setup/eslint-prettier'>ESLint + Prettier</Link>
                  </li>
                  <li>
                    <Link to='setup/tailwind'>Tailwind CSS Integration</Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </Disclosure>
          </li>
          <li>
            <Link to='ui-components'>UI Components</Link>
          </li>
          <li>
            <Disclosure>
              <Link to='routing'>
                <Disclosure.Button>Routing</Disclosure.Button>
              </Link>
              <Disclosure.Panel as={Fragment}>
                <ul className='pl-4 mt-2 space-y-2 list-disc list-outside'>
                  <li>
                    <Link to='routing/nested-routes-with-nested-layouts'>Nested Routes with Nested Layouts</Link>
                  </li>
                  <li>
                    <Link to='routing/resource-routes'>Resource Routes</Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </Disclosure>
          </li>
        </ul>
      </div>
      <div className='p-4'>
        <Outlet />
      </div>
    </div>
  </div>
);

export default Examples;
