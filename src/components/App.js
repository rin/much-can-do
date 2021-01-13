import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import Header from './Header';
import NewSkillForm from './NewSkillForm';
import SkillCircles from './SkillCircles';

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
        <SkillCircles />
        <NewSkillForm />
      </div>
    </ApolloProvider>
  );
};

export default App;
