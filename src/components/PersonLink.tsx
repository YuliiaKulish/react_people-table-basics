import { FC } from 'react';
import { Person } from '../types';

type Props = {
  name: string | null;
  people: Person[];
};

export const PersonLink: FC<Props> = ({ name, people }) => {
  if (!name) {
    return <span>-</span>;
  }

  const person = people.find(p => p.name === name);

  if (!person) {
    return <span>{name}</span>;
  }

  return (
    <a
      href={`#/people/${person.slug}`}
      className={person.sex === 'f' ? 'has-text-danger' : ''}
    >
      {person.name}
    </a>
  );
};
