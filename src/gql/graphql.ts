/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Asset = {
  __typename?: 'Asset';
  attributes: Array<Scalars['String']>;
  categories: Array<Scalars['String']>;
  certification: Scalars['JSON'];
  id: Scalars['String'];
  imageURL?: Maybe<Scalars['String']>;
  meta: Scalars['JSON'];
  number?: Maybe<Scalars['Int']>;
  productionYear?: Maybe<Scalars['Int']>;
  runtime?: Maybe<Scalars['Int']>;
  season?: Maybe<Season>;
  seasonId?: Maybe<Scalars['String']>;
  series?: Maybe<Series>;
  seriesId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
};

export type Channel = {
  __typename?: 'Channel';
  id: Scalars['String'];
  logoURL?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type ChannelsByRegionInput = {
  platformId: Scalars['String'];
  regionId: Scalars['String'];
  searchText?: InputMaybe<Scalars['String']>;
};

export enum Gender {
  F = 'F',
  M = 'M'
}

export type Mutation = {
  __typename?: 'Mutation';
  signUpWithEmail: User;
  updateProfile: User;
  updateUserChannels: Array<Channel>;
};


export type MutationSignUpWithEmailArgs = {
  input: SignUpWithEmailInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateUserChannelsArgs = {
  input: UpdateUserChannelsInput;
};

export type NewFilms = {
  __typename?: 'NewFilms';
  count: Scalars['Int'];
  schedules: Array<Schedule>;
};

export type NewFilmsInput = {
  pagination: PaginationInput;
};

export type NewOnTv = {
  __typename?: 'NewOnTV';
  count: Scalars['Int'];
  schedules: Array<Schedule>;
};

export type NewOnTvInput = {
  pagination: PaginationInput;
};

export type PaginationInput = {
  skip: Scalars['Int'];
  take: Scalars['Int'];
};

export type Platform = {
  __typename?: 'Platform';
  id: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  channels: Array<Channel>;
  channelsByRegion: Array<Channel>;
  newFilms: NewFilms;
  newOnTV: NewOnTv;
  platforms: Array<Platform>;
  regions: Array<Region>;
  sum: Sum;
  user: User;
  usernameExists: Scalars['Boolean'];
};


export type QueryChannelsByRegionArgs = {
  input: ChannelsByRegionInput;
};


export type QueryNewFilmsArgs = {
  input: NewFilmsInput;
};


export type QueryNewOnTvArgs = {
  input: NewOnTvInput;
};


export type QueryRegionsArgs = {
  input: RegionsInput;
};


export type QuerySumArgs = {
  input: SumInput;
};


export type QueryUsernameExistsArgs = {
  input: UsernameExistsInput;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['String'];
  title: Scalars['String'];
};

export type RegionsInput = {
  platformId: Scalars['String'];
};

export type Schedule = {
  __typename?: 'Schedule';
  asset: Asset;
  assetId: Scalars['String'];
  attributes: Array<Scalars['String']>;
  certification: Scalars['JSON'];
  channel: Channel;
  channelId: Scalars['String'];
  endAt: Scalars['DateTime'];
  id: Scalars['String'];
  meta: Scalars['JSON'];
  startAt: Scalars['DateTime'];
  summaryLong?: Maybe<Scalars['String']>;
  summaryMedium?: Maybe<Scalars['String']>;
  summaryShort?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Season = {
  __typename?: 'Season';
  id: Scalars['String'];
  imageURL?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type Series = {
  __typename?: 'Series';
  id: Scalars['String'];
  imageURL?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type SignUpWithEmailInput = {
  email: Scalars['String'];
};

export type Sum = {
  __typename?: 'Sum';
  sum: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type SumInput = {
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type UpdateProfileInput = {
  amazon: Scalars['Boolean'];
  birthDate: Scalars['Date'];
  gender: Gender;
  netflix: Scalars['Boolean'];
  platformId: Scalars['String'];
  regionId: Scalars['String'];
  username: Scalars['String'];
};

export type UpdateUserChannelsInput = {
  channelIds: Array<Scalars['String']>;
  platformId: Scalars['String'];
  regionId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['String'];
  platformId?: Maybe<Scalars['String']>;
  profileCreated: Scalars['Boolean'];
  regionId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UsernameExistsInput = {
  username: Scalars['String'];
};

export type NewFilmsQueryVariables = Exact<{
  input: NewFilmsInput;
}>;


export type NewFilmsQuery = { __typename?: 'Query', newFilms: { __typename?: 'NewFilms', count: number, schedules: Array<{ __typename?: 'Schedule', id: string, title: string, startAt: any, channel: { __typename?: 'Channel', title: string, logoURL?: string | null }, asset: { __typename?: 'Asset', imageURL?: string | null } }> } };

export type NewOnTvQueryVariables = Exact<{
  input: NewOnTvInput;
}>;


export type NewOnTvQuery = { __typename?: 'Query', newOnTV: { __typename?: 'NewOnTV', count: number, schedules: Array<{ __typename?: 'Schedule', id: string, title: string, startAt: any, channel: { __typename?: 'Channel', title: string, logoURL?: string | null }, asset: { __typename?: 'Asset', imageURL?: string | null, number?: number | null, series?: { __typename?: 'Series', imageURL?: string | null } | null, season?: { __typename?: 'Season', imageURL?: string | null, number?: number | null } | null } }> } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, email: string, profileCreated: boolean, username?: string | null, platformId?: string | null, regionId?: string | null } };

export type SignUpWithEmailMutationVariables = Exact<{
  input: SignUpWithEmailInput;
}>;


export type SignUpWithEmailMutation = { __typename?: 'Mutation', signUpWithEmail: { __typename?: 'User', id: string, email: string, profileCreated: boolean, username?: string | null, platformId?: string | null, regionId?: string | null } };

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'User', id: string, email: string, profileCreated: boolean, username?: string | null, platformId?: string | null, regionId?: string | null } };

export type PlatformsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlatformsQuery = { __typename?: 'Query', platforms: Array<{ __typename?: 'Platform', id: string, title: string }> };

export type RegionsQueryVariables = Exact<{
  input: RegionsInput;
}>;


export type RegionsQuery = { __typename?: 'Query', regions: Array<{ __typename?: 'Region', id: string, title: string }> };


export const NewFilmsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewFilms"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewFilmsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newFilms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"schedules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logoURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageURL"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewFilmsQuery, NewFilmsQueryVariables>;
export const NewOnTvDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewOnTV"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewOnTVInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newOnTV"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"schedules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logoURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"season"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewOnTvQuery, NewOnTvQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileCreated"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"regionId"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const SignUpWithEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpWithEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpWithEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpWithEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileCreated"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"regionId"}}]}}]}}]} as unknown as DocumentNode<SignUpWithEmailMutation, SignUpWithEmailMutationVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileCreated"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"regionId"}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const PlatformsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Platforms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platforms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<PlatformsQuery, PlatformsQueryVariables>;
export const RegionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Regions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<RegionsQuery, RegionsQueryVariables>;