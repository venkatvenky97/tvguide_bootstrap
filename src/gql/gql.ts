/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery NewFilms($input: NewFilmsInput!) {\n    newFilms(input: $input) {\n      count\n      schedules {\n        id\n        title\n        startAt\n        channel {\n          title\n          logoURL\n        }\n        asset {\n          imageURL\n        }\n      }\n    }\n  }\n": types.NewFilmsDocument,
    "\nquery NewOnTV($input: NewOnTVInput!) {\n    newOnTV(input: $input) {\n      count\n      schedules {\n        id\n        title\n        startAt\n        channel {\n            title\n            logoURL\n          }\n        asset {\n          imageURL\n          number\n          series {\n            imageURL\n          }\n          season {\n            imageURL\n            number\n          }\n        }\n      }\n    }\n  }\n": types.NewOnTvDocument,
    "\n  query User {\n    user {\n      id\n      email\n      profileCreated\n      username\n      platformId\n      regionId\n    }\n  }\n": types.UserDocument,
    "\nmutation SignUpWithEmail($input: SignUpWithEmailInput!) {\n    signUpWithEmail(input: $input) {\n      id\n      email\n      profileCreated\n      username\n      platformId\n      regionId\n    }\n  }\n": types.SignUpWithEmailDocument,
    "\nmutation UpdateProfile($input: UpdateProfileInput!) {\n  updateProfile(input: $input) {\n    id\n    email\n    profileCreated\n    username\n    platformId\n    regionId\n  }\n}\n": types.UpdateProfileDocument,
    "\n  query Platforms {\n    platforms {\n        id\n        title\n    }\n  }\n": types.PlatformsDocument,
    "\nquery Regions($input: RegionsInput!) {\n    regions(input: $input) {\n      id\n      title\n    }\n  }\n": types.RegionsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery NewFilms($input: NewFilmsInput!) {\n    newFilms(input: $input) {\n      count\n      schedules {\n        id\n        title\n        startAt\n        channel {\n          title\n          logoURL\n        }\n        asset {\n          imageURL\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery NewFilms($input: NewFilmsInput!) {\n    newFilms(input: $input) {\n      count\n      schedules {\n        id\n        title\n        startAt\n        channel {\n          title\n          logoURL\n        }\n        asset {\n          imageURL\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery NewOnTV($input: NewOnTVInput!) {\n    newOnTV(input: $input) {\n      count\n      schedules {\n        id\n        title\n        startAt\n        channel {\n            title\n            logoURL\n          }\n        asset {\n          imageURL\n          number\n          series {\n            imageURL\n          }\n          season {\n            imageURL\n            number\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery NewOnTV($input: NewOnTVInput!) {\n    newOnTV(input: $input) {\n      count\n      schedules {\n        id\n        title\n        startAt\n        channel {\n            title\n            logoURL\n          }\n        asset {\n          imageURL\n          number\n          series {\n            imageURL\n          }\n          season {\n            imageURL\n            number\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query User {\n    user {\n      id\n      email\n      profileCreated\n      username\n      platformId\n      regionId\n    }\n  }\n"): (typeof documents)["\n  query User {\n    user {\n      id\n      email\n      profileCreated\n      username\n      platformId\n      regionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation SignUpWithEmail($input: SignUpWithEmailInput!) {\n    signUpWithEmail(input: $input) {\n      id\n      email\n      profileCreated\n      username\n      platformId\n      regionId\n    }\n  }\n"): (typeof documents)["\nmutation SignUpWithEmail($input: SignUpWithEmailInput!) {\n    signUpWithEmail(input: $input) {\n      id\n      email\n      profileCreated\n      username\n      platformId\n      regionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation UpdateProfile($input: UpdateProfileInput!) {\n  updateProfile(input: $input) {\n    id\n    email\n    profileCreated\n    username\n    platformId\n    regionId\n  }\n}\n"): (typeof documents)["\nmutation UpdateProfile($input: UpdateProfileInput!) {\n  updateProfile(input: $input) {\n    id\n    email\n    profileCreated\n    username\n    platformId\n    regionId\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Platforms {\n    platforms {\n        id\n        title\n    }\n  }\n"): (typeof documents)["\n  query Platforms {\n    platforms {\n        id\n        title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery Regions($input: RegionsInput!) {\n    regions(input: $input) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\nquery Regions($input: RegionsInput!) {\n    regions(input: $input) {\n      id\n      title\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;