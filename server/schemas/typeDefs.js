const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
 }

 type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
 }

 type Auth{
    token:ID!
    user:User
 }

 type Query {
    me: User
 }

 type Mutation{
    addUser(username:String!,password:String!):Auth
    login(email:String!,password:String!): Auth
    addBook(userId:ID!,book:BookInput!):User
    removeBook(userId:ID!,bookId:String!):User
 }

 input BookInput{
    authors:[String]
    description: String
    bookId: String
    image: String
    link:String
    title:String
 }
`;

module.exports = typeDefs;