import NextAuth from "next-auth/next";
import { SupabaseAdapter } from "@next-auth/supabase-adapter"
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID? process.env.GITHUB_ID:'',
            clientSecret: process.env.GITHUB_SECRET? process.env.GITHUB_SECRET:'',
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID? process.env.GOOGLE_CLIENT_ID:'',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET? process.env.GOOGLE_CLIENT_SECRET:'',
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_API_KEY? process.env.TWITTER_API_KEY:'',
            clientSecret: process.env.TWITTER_API_KEY_SECRET? process.env.TWITTER_API_KEY_SECRET:'',
        }),
    ],
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL? process.env.NEXT_PUBLIC_SUPABASE_URL:'',
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY? process.env.SUPABASE_SERVICE_ROLE_KEY:'',
      }),
      // ...
})
