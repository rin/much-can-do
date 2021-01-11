import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

import Header from './Header';

const App = () => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000',
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">You can do things?</span>
              <span className="block text-indigo-600">Let everyone know.</span>
            </h2>
            <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Add a Skill
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
