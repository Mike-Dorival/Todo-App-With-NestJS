export interface Todo {
  id: number;
  title: string;
  done: boolean;
  description?: string; // le ? veut dire qu'il n'est pas obligatoire de remplir ce champs
}
