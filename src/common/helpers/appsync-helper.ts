import { GraphQLOptions } from '@aws-amplify/api-graphql';

export class AppSyncHelper {
  static async adminGetUser(options: GraphQLOptions) {
    options.authToken = process.env.REACT_APP_APPSYNC_ANONYMOUS_TOKEN;
  }
}
