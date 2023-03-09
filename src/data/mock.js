import { v4 as uuid } from 'uuid';

const itemsFromBackend = [
  { id: uuid(), content: 'Javascript' },
  { id: uuid(), content: 'React' },
  { id: uuid(), content: 'PHP' },
];

export const status = {
  [uuid()]: {
    name: 'Pendiente',
    color: '#EAE6FF',
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: 'Finalizado',
    color: '#E3FCEF',
    items: [],
  },
};
