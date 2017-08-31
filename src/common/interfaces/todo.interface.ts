import { Endpoint } from './endpoint.interface';

import { Entity } from './entity.interface';
export interface Todo extends Entity {
  title: string;
  description: string;
  isChecked?: boolean;
}

export const todoEndpoint: Endpoint = {
  name: 'todo'
};
