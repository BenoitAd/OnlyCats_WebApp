import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID? process.env.GITHUB_ID:'',
            clientSecret: process.env.GITHUB_SECRET? process.env.GITHUB_SECRET:'',
        })
    ],
})