import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import Header from './Header';
import Skills from './Skills';
import NewSkillForm from './NewSkillForm';

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
      <div className="px-4">
        <Header />
          <Skills />
        <NewSkillForm />
      </div>
    </ApolloProvider>
  );
};

export default App;
