# Common Property Naming Standard

## By Definitions

- Unique Key

```ts
interface IHasUniqueKey {
  key: string; // GUID string
  identifier: string; // any string
}
```

- Display String

```ts
interface IHasName {
  commonName: string; // common name for references
  displayName: string; // name that will be displayed
  title: string; // title header
  description: string; // paragraph/sentence that describe
}
```

## By Examples

- Lookup Model

```ts
interface ILookupModel {
  key: string;
  displayName: string;
}
```

- Node

```ts
interface INode {
  identifer: string;
  displayName: string;
  description: string;
}
```

- Article

```ts
interface IArticle {
  key: string;
  title: string;
  description: string;
}
```
