/* eslint-disable */
import { Scalar, CustomScalar } from '@nestjs/graphql'
import { Kind, ValueNode } from 'graphql'

// TODO: fix typings

@Scalar('Date')
export class DateScalar implements CustomScalar<string, Date> {
  description = 'Date custom scalar type'

  // @ts-ignore
  parseValue(value: string) {
    return new Date(value)
  }

  // @ts-ignore
  serialize(value: Date) {
    return value.toISOString()
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value)
    }
    return null
  }
}
