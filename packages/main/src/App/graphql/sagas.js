import { runSagas } from 'apollo-link-saga';
import sagas from 'pages/auth/code/gql/sagas';

runSagas([...sagas]);
