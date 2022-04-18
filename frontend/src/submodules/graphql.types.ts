/**
 * https://icare-dev.kibe.la/notes/8063
 * @module type/graphql-types
 */

// 配列型から個々の要素の型を抽出する。 Typescript2.8+ で標準に組み込まれる
declare type Unpacked<T> = T extends (infer U)[] ? U : T

// https://github.com/krzkaczor/ts-essentials
/* eslint-disable @typescript-eslint/ban-types */
declare type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | undefined
  | null
declare type Builtin = Primitive | Function | Date | Error | RegExp
declare type DeepRequired<T> = T extends Builtin
  ? NonNullable<T>
  : T extends Map<infer K, infer V>
  ? Map<DeepRequired<K>, DeepRequired<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepRequired<K>, DeepRequired<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepRequired<K>, DeepRequired<V>>
  : T extends Set<infer U>
  ? Set<DeepRequired<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepRequired<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepRequired<U>>
  : T extends Promise<infer U>
  ? Promise<DeepRequired<U>>
  : T extends {}
  ? { [K in keyof T]-?: DeepRequired<T[K]> }
  : NonNullable<T>
/* eslint-enable @typescript-eslint/ban-types */

// __typename を使うので以下のルールは無効にしている
/* eslint-disable @typescript-eslint/naming-convention */

/**
 * GQueryField や GQueryArrayField で取り出した型を正規化する
 *
 * ```
 * type T = GQueryArrayField<GeneratedQuery, 'fieldname'>
 * type QueryArrayFieldType = GQueryType<T, '__typename'>
 * ```
 *
 * Q: graphql-codegen で生成された型、もしくはそのパーシャル
 * T: 取り出したいフィールドの __typename
 */

// 使いやすさ優先で型引数を指定するために以下のルールは無効にする
// eslint-disable-next-line no-use-before-define
export type GQueryType<Q extends { __typename?: T }, T> = DeepRequired<Q>

/**
 * graphql-codegen で生成された型から特定のフィールドを取り出す<br>
 * Optional のまま使いたい場合や、さらにネストされた型を取り出したい場合に利用してください
 * フィールドが配列の場合には unknown が返る
 * ```
 * type QueryField = GQueryField<GeneratedQuery, 'fieldname'>
 * ```
 *
 * Q: graphql-codegen で生成された型、もしくはそのパーシャル
 * P: 取り出したいフィールドの key名
 */
export type GQueryField<Q, F extends keyof Q> = Q[F] extends unknown[]
  ? unknown
  : NonNullable<Q[F]> extends unknown[]
  ? unknown
  : NonNullable<Q[F]>

/**
 * graphql-codegen で生成された型から特定のフィールドを正規化して取り出す<br>
 * __typename が一致しない場合やフィールドが配列の場合には unknown が返る
 *
 * ```
 * type QueryFieldType = GQueryFieldType<GeneratedQuery, 'fieldname', '__typename'>
 * ```
 *
 * Q: graphql-codegen で生成された型、もしくはそのパーシャル
 * P: 取り出したいフィールドの key名
 * T: 取り出したいフィールドの __typename
 */
export type GQueryFieldType<Q, F extends keyof Q, T> = GQueryField<
  Q,
  F
> extends { __typename?: T }
  ? GQueryType<GQueryField<Q, F>, T>
  : unknown

/**
 * graphql-codegen で生成された型からリスト型の特定のフィールドを取り出す<br>
 * Optional のまま使いたい場合や、さらにネストされた型を取り出したい場合に利用してください<br>
 * フィールドが配列ではない場合には unknown が返る
 *
 * ```
 * type QueryArrayField = GQueryArrayField<GeneratedQuery, 'fieldname'>
 * ```
 *
 * Q: graphql-codegen で生成された型、もしくはそのパーシャル
 * P: 取り出したいフィールドの key名
 */
export type GQueryArrayField<Q, F extends keyof Q> = Q[F] extends unknown[]
  ? Unpacked<Q[F]>
  : NonNullable<Q[F]> extends unknown[]
  ? Unpacked<NonNullable<Q[F]>>
  : unknown

/**
 * graphql-codegen で生成された型からリスト型の特定のフィールドを正規化して取り出す<br>
 * __typename が一致しない場合やフィールドが配列ではない場合には unknown が返る
 *
 * ```
 * type QueryArrayFieldType = GQueryArrayFieldType<GeneratedQuery, 'fieldname', '__typename'>
 * ```
 *
 * Q: graphql-codegen で生成された型、もしくはそのパーシャル
 * P: 取り出したいフィールドの key名
 * T: 取り出したいフィールドの __typename
 */
export type GQueryArrayFieldType<Q, F extends keyof Q, T> = GQueryArrayField<
  Q,
  F
> extends { __typename?: T }
  ? GQueryType<GQueryArrayField<Q, F>, T>
  : unknown
