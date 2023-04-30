import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers:[
        //Google Provider
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        })
    ], 
    secret:process.env.SECRET,
    callback:{
        async jwt({token}){
            token.userRole = "user"
            return token
        },
    },
})
