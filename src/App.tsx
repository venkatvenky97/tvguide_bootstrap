import { Amplify } from 'aws-amplify';
import RouterPage from './pages/RouterPage';

const amplifyConfig = require(`./config/amplify/${process.env.NODE_ENV}.json`);
Amplify.configure(amplifyConfig);

function App() {

  return (
    <div>
      <RouterPage />
    </div>
  );
}

export default App;
