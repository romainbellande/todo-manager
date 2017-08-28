import { Endpoint } from './endpoint.interface';

export interface Todo {
  _id: string;
  title: string;
  description: string;
  isEditMod?: boolean;
}

export const todoEndpoint: Endpoint = {
  name: 'todo'
};
