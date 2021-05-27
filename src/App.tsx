import React from 'react';
import { Provider } from 'react-redux';
import AddCommentModal from './components/AddComment/AddComment';
import { AddCommentProvider } from './components/AddComment/AddCommentContext';
import Form from './components/Search/Search';
import { RepoProvider } from './components/RepoItem/RepoContext';
import RepoItemsList from './components/RepoItem/RepoItemsList';
import Title from './components/Title/Title';
import { store } from './store/configureStore';
import { ListType } from './store/repos/constants';
import Container from './components/Container/Container';

const App = () => {
   return (
      <Container>
         <Provider store={store}>
            <Title title={'GitHub client'} />
            <Form />
            <RepoProvider listType={ListType.Founded} >
               <RepoItemsList
                  title={'Lista wyników:'}
               />
            </RepoProvider>
            <AddCommentProvider>

               <RepoProvider listType={ListType.Recorded} >
                  <RepoItemsList
                     title={'Twoje zapisane repozytoria:'}
                  />
               </RepoProvider>
               <AddCommentModal />
            </AddCommentProvider>
         </Provider>
      </Container>
   );
}

export default App;
