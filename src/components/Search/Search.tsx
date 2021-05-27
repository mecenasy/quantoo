import React, { ChangeEventHandler, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { getReposRequest } from '../../store/repos/actions';
import * as P from './Parts';

const Form: FC = () => {
   const dispatch = useDispatch();

   const onChange: ChangeEventHandler<HTMLInputElement> = useDebouncedCallback((e) => {
      dispatch(getReposRequest(e.target.value));
   }, 500);

   return (
      <P.Border>
         <P.SearchTitle>Nazwa repo: </P.SearchTitle>
         <P.Input onChange={onChange} />
      </P.Border>
   )
};

export default Form;
