import * as queryDefs from './definitions/query'

export const Query=`
# all query type definitions
type Query {
    ${queryDefs.employeeDefinition}
}
`