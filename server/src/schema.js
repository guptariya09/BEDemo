import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        launches: [Employees]!
        launch(id: ID!): Launch
        # Queries for the current user
        me: User
        employees: [Employees]!
    }

    type Employees {
        id: Int!
        username: String
        password: String
        firstName: String
        lastName: String
        address: String
        city:String
        state:String
        country:String
        designation:String
        dateOfJoining:String
        isActive:String
        createdAt:String
        updatedAt:String
    }

    type Launch {
        id: ID!
        site: String
        mission: Mission
        rocket: Rocket
        isBooked: Boolean!
    }

    type Rocket {
        id: ID!
        name: String
        type: String
    }
      
    type User {
        id: ID!
        email: String!
        trips: [Launch]!
    }
    
    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }
    
    enum PatchSize {
        SMALL
        LARGE
    }

    type Mutation {
        # if false, booking trips failed -- check errors
        bookTrips(launchIds: [ID]!): TripUpdateResponse!
      
        # if false, cancellation failed -- check errors
        cancelTrip(launchId: ID!): TripUpdateResponse!
      
        login(email: String): String # login token
    }

    type TripUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
    }

`;