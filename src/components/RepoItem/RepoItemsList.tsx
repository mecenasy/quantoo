import React, { FC, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/constants';
import { getReposList } from '../../store/repos/selectors';
import RepoItem from './RepoItem';
import * as P from './Parts';
import { RepoContext } from './RepoContext';

interface RepoItemsListProps {
   title: string;
}

const RepoItemsList: FC<RepoItemsListProps> = ({
   title,
}) => {
   const { listType } = useContext(RepoContext);
   
   const repoList = useSelector<ApplicationState, number[]>(
      (state) => getReposList(state, listType)
   );

   return (
      <P.Border>
         <P.SubTitle >{title}</P.SubTitle>
         {repoList.map((id) => (
            <RepoItem
               key={id}
               repoId={id}
            />
         ))}
      </P.Border>
   )
};

export default RepoItemsList;
