import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from 'remix';
import PropTypes from 'prop-types';

import tailwindStylesUrl from '~/styles/tailwind.css';
import proseStylesUrl from '~/styles/prose.css';

// https://remix.run/api/app#links
export const links = () => [
  { rel: 'stylesheet', href: tailwindStylesUrl },
  { rel: 'stylesheet', href: proseStylesUrl }
];

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
const App = () => (
  <Document>
    <Outlet />
  </Document>
);

// https://remix.run/docs/en/v1/api/conventions#errorboundary
// export const ErrorBoundary = ({ error }) => (
//   <Document title='Error!'>
//     <div>
//       <h1>There was an error</h1>
//       <p>{error.message}</p>
//       <hr />
//       <p>Hey, developer, you should replace this with what you want your users to see.</p>
//     </div>
//   </Document>
// );

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export const CatchBoundary = () => {
  const caught = useCatch();
  throw new Error(caught.data || caught.statusText);
};

const Document = ({ children, title }) => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      {title ? <title>{title}</title> : null}
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === 'development' && <LiveReload />}
    </body>
  </html>
);

export default App;

Document.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string
};

Document.defaultProps = {
  title: ''
};

// ErrorBoundary.propTypes = {
//   error: PropTypes.instanceOf(Error).isRequired
// };
