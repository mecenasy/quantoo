import React, { FC, useContext } from 'react';
import { createPortal } from 'react-dom';
import { Field, Form } from 'react-final-form';
import { AddCommentContext } from './AddCommentContext';
import getOrCreateReactPortalsDiv from './helper';
import * as P from './Parts';
import { FormData } from './types';

const AddCommentModal: FC = () => {
   const portalsElement = getOrCreateReactPortalsDiv();

   const { onSubmit, show } = useContext(AddCommentContext);

   return show ? createPortal((
      <P.Portal>
         <P.Border>
            <Form<FormData>
               onSubmit={onSubmit}
            >
               {({ handleSubmit }) => (
                  <P.Form onSubmit={handleSubmit}>
                     <p>Autor:</p>
                     <Field
                        name="author"
                        type="text"
                        component={'input'}
                     />
                     <p>Komentarz:</p>
                     <Field
                        name="comment"
                        type="text"
                        component={'textarea'}
                     />
                     <button type="submit">Zapisz</button>
                  </P.Form>
               )}
            </Form>
         </P.Border>
      </P.Portal>
   ), portalsElement) : null;
};

export default AddCommentModal;

