import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class Todo {
  @Field()
  id: number;

  @Field()
  title: String;

  @Field()
  description: String;

  @Field()
  status: Boolean;
}


@InputType()
export class TodoInput implements Partial<Todo> {
  @Field()
  title: string;

  @Field()
  description: String;
}