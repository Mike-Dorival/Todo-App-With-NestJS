export class CreateTodoDto {
  readonly title: string;
  readonly done: boolean;
  readonly description?: string; // le ? veut dire qu'il n'est pas obligatoire de remplir ce champs
}

// tslint:disable-next-line: max-line-length
/* Mais d'abord (si vous utilisez TypeScript), nous devons déterminer le schéma DTO (Data Transfer Object). Un DTO est un objet qui définit la façon dont les données seront envoyées sur le réseau. Nous pourrions déterminer le schéma DTO en utilisant des interfaces TypeScript ou des classes simples. Fait intéressant, nous vous recommandons d'utiliser des classes ici. Pourquoi? Les classes font partie de la norme JavaScript ES6 et sont donc conservées en tant qu'entités réelles dans le JavaScript compilé. En revanche, étant donné que les interfaces TypeScript sont supprimées lors de la transpilation, Nest ne peut pas s'y référer lors de l'exécution. Ceci est important car des fonctionnalités telles que Pipes offrent des possibilités supplémentaires lorsqu'elles ont accès au métatype de la variable lors de l'exécution. */
