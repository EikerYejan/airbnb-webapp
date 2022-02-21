import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'path'

const appDir = process.cwd()
const definitionsFactory = new GraphQLDefinitionsFactory()

definitionsFactory.generate({
  typePaths: [join(appDir, './src/graphql/listings.graphql')],
  path: join(appDir, './src/graphql/graphql.typings.ts'),
  outputAs: 'class',
  emitTypenameField: true,
  customScalarTypeMapping: {
    Date: 'Date',
  },
})
