export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any
}

export type Mutation = {
  __typename?: 'Mutation'
  /** An example field added by the generator */
  testField: Scalars['String']
}

export type Owner = {
  __typename?: 'Owner'
  address: Scalars['String']
  age: Scalars['String']
  createdAt: Scalars['ISO8601DateTime']
  email?: Maybe<Scalars['String']>
  firstName: Scalars['String']
  gender?: Maybe<Scalars['Int']>
  lastName: Scalars['String']
  phoneNumber?: Maybe<Scalars['String']>
  updatedAt: Scalars['ISO8601DateTime']
  uuid: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  currentOwner: Owner
  /** An example field added by the generator */
  testField: Scalars['String']
}
