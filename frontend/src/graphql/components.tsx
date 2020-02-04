/* eslint-disable */
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateScoreInput = {
  readonly author: Scalars['String'];
  readonly elapsedTime: Scalars['String'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

export type CreateScorePayload = {
  readonly __typename?: 'createScorePayload';
  readonly score: Maybe<Score>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

export type DeleteScoreInput = {
  readonly id: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

export type DeleteScorePayload = {
  readonly __typename?: 'deleteScorePayload';
  readonly score: Maybe<Score>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly deleteScore: Maybe<DeleteScorePayload>;
  readonly updateScore: Maybe<UpdateScorePayload>;
  readonly createScore: Maybe<CreateScorePayload>;
};

export type MutationDeleteScoreArgs = {
  input: DeleteScoreInput;
};

export type MutationUpdateScoreArgs = {
  input: UpdateScoreInput;
};

export type MutationCreateScoreArgs = {
  input: CreateScoreInput;
};

export type Node = {
  readonly id: Scalars['ID'];
};

export type Query = {
  readonly __typename?: 'Query';
  readonly node: Maybe<Node>;
  readonly score: Maybe<Score>;
  readonly scores: Maybe<ScoreConnection>;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type QueryScoreArgs = {
  id: Scalars['ID'];
};

export type QueryScoresArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
};

export type Score = Node & {
  readonly __typename?: 'Score';
  readonly id: Scalars['ID'];
  readonly author: Scalars['String'];
  readonly elapsedTime: Scalars['String'];
};

export type ScoreConnection = {
  readonly __typename?: 'ScoreConnection';
  readonly edges: Maybe<ReadonlyArray<Maybe<ScoreEdge>>>;
  readonly pageInfo: ScorePageInfo;
  readonly totalCount: Scalars['Int'];
};

export type ScoreEdge = {
  readonly __typename?: 'ScoreEdge';
  readonly node: Maybe<Score>;
  readonly cursor: Scalars['String'];
};

export type ScorePageInfo = {
  readonly __typename?: 'ScorePageInfo';
  readonly endCursor: Maybe<Scalars['String']>;
  readonly startCursor: Maybe<Scalars['String']>;
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
};

export type UpdateScoreInput = {
  readonly id: Scalars['ID'];
  readonly author: Maybe<Scalars['String']>;
  readonly elapsedTime: Maybe<Scalars['String']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

export type UpdateScorePayload = {
  readonly __typename?: 'updateScorePayload';
  readonly score: Maybe<Score>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

export type ScoreQueryVariables = {
  id: Scalars['ID'];
};

export type ScoreQuery = { readonly __typename?: 'Query' } & {
  readonly score: Maybe<
    { readonly __typename?: 'Score' } & Pick<Score, 'author' | 'elapsedTime'>
  >;
};

export type TopScoresQueryVariables = {};

export type TopScoresQuery = { readonly __typename?: 'Query' } & {
  readonly scores: Maybe<
    { readonly __typename?: 'ScoreConnection' } & {
      readonly edges: Maybe<
        ReadonlyArray<
          Maybe<
            { readonly __typename?: 'ScoreEdge' } & {
              readonly node: Maybe<
                { readonly __typename?: 'Score' } & Pick<
                  Score,
                  'author' | 'elapsedTime'
                >
              >;
            }
          >
        >
      >;
    }
  >;
};

export const ScoreDocument = gql`
  query Score($id: ID!) {
    score(id: $id) {
      author
      elapsedTime
    }
  }
`;
export type ScoreComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<ScoreQuery, ScoreQueryVariables>,
  'query'
> &
  ({ variables: ScoreQueryVariables; skip?: boolean } | { skip: boolean });

export const ScoreComponent = (props: ScoreComponentProps) => (
  <ApolloReactComponents.Query<ScoreQuery, ScoreQueryVariables>
    query={ScoreDocument}
    {...props}
  />
);

export type ScoreProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  ScoreQuery,
  ScoreQueryVariables
> &
  TChildProps;
export function withScore<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ScoreQuery,
    ScoreQueryVariables,
    ScoreProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    ScoreQuery,
    ScoreQueryVariables,
    ScoreProps<TChildProps>
  >(ScoreDocument, {
    alias: 'score',
    ...operationOptions,
  });
}

/**
 * __useScoreQuery__
 *
 * To run a query within a React component, call `useScoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useScoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScoreQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useScoreQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ScoreQuery,
    ScoreQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ScoreQuery, ScoreQueryVariables>(
    ScoreDocument,
    baseOptions
  );
}
export function useScoreLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ScoreQuery,
    ScoreQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ScoreQuery, ScoreQueryVariables>(
    ScoreDocument,
    baseOptions
  );
}
export type ScoreQueryHookResult = ReturnType<typeof useScoreQuery>;
export type ScoreLazyQueryHookResult = ReturnType<typeof useScoreLazyQuery>;
export type ScoreQueryResult = ApolloReactCommon.QueryResult<
  ScoreQuery,
  ScoreQueryVariables
>;
export const TopScoresDocument = gql`
  query TopScores {
    scores(first: 10) {
      edges {
        node {
          ... on Score {
            author
            elapsedTime
          }
        }
      }
    }
  }
`;
export type TopScoresComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    TopScoresQuery,
    TopScoresQueryVariables
  >,
  'query'
>;

export const TopScoresComponent = (props: TopScoresComponentProps) => (
  <ApolloReactComponents.Query<TopScoresQuery, TopScoresQueryVariables>
    query={TopScoresDocument}
    {...props}
  />
);

export type TopScoresProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  TopScoresQuery,
  TopScoresQueryVariables
> &
  TChildProps;
export function withTopScores<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    TopScoresQuery,
    TopScoresQueryVariables,
    TopScoresProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    TopScoresQuery,
    TopScoresQueryVariables,
    TopScoresProps<TChildProps>
  >(TopScoresDocument, {
    alias: 'topScores',
    ...operationOptions,
  });
}

/**
 * __useTopScoresQuery__
 *
 * To run a query within a React component, call `useTopScoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopScoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopScoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useTopScoresQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    TopScoresQuery,
    TopScoresQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<TopScoresQuery, TopScoresQueryVariables>(
    TopScoresDocument,
    baseOptions
  );
}
export function useTopScoresLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    TopScoresQuery,
    TopScoresQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<TopScoresQuery, TopScoresQueryVariables>(
    TopScoresDocument,
    baseOptions
  );
}
export type TopScoresQueryHookResult = ReturnType<typeof useTopScoresQuery>;
export type TopScoresLazyQueryHookResult = ReturnType<
  typeof useTopScoresLazyQuery
>;
export type TopScoresQueryResult = ApolloReactCommon.QueryResult<
  TopScoresQuery,
  TopScoresQueryVariables
>;
