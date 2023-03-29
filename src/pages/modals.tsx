import * as React from 'react';

import { ModalError } from '@/components/_my-components/modalErrorComponent';
import { ModalSuccess } from '@/components/_my-components/modalSuccessComponent';

export default function ModalsPage() {
  return (
    <>
      <ModalError />
      <ModalSuccess />
    </>
  );
}
