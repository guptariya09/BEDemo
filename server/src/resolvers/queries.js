import * as employeeQuery from './queries/employeeQuery'

export const resolver_query = () => {
    return {
        launches: employeeQuery.allEmployees(),
        employees: employeeQuery.allEmployees(),
        launch: (_, { id }, { dataSources }) =>
          dataSources.launchAPI.getLaunchById({ launchId: id }),
        me: async (_, __, { dataSources }) =>
          dataSources.userAPI.findOrCreateUser(),
        
    }
}