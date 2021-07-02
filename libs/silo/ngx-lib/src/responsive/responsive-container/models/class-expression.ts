export type ClassExpression =
  | string // "my-class-1 my-class-2 my-class-3"
  | Record<string, boolean | undefined | null> // {foo: true, bar: false}
  | Array<string> // ['foo', 'bar']
  | null
  | undefined;
