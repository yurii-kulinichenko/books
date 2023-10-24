import { useMemo } from 'react';

import { useParams } from 'react-router-dom';

import { Spinner } from '@shared/components/spinner';
import { appObserver } from '@shared/utils';

import { AuthorViewModel } from './author.vm';

const AuthorComponent: React.FC = () => {
  const { id } = useParams();

  const $vm = useMemo(() => new AuthorViewModel(id), [id]);

  return (
    <div>
      {$vm.loading && <Spinner />}
      {!$vm.loading && $vm.author && <p>{$vm.author.name}</p>}
    </div>
  );
};

export const Author = appObserver(AuthorComponent);
