import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
        ['http://tvgui-tvgui-1tv3elndl7z1r-533858730.eu-west-2.elb.amazonaws.com/graphql']: {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "2ccb96dd-a4da-402f-b8d0-dc23f87e6655"
            }
        }
    }
  ],
  documents: ["src/pages/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
        preset: 'client',
        plugins: [],
    }
  }
}

export default config