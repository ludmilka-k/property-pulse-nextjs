import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
   providers: [
       GoogleProvider({
           clientId: process.env.GOOGLE_CLIENT_ID,
           clientSecret: process.env.GOOGLE_CLIENT_SECRET,
           authorization: {
               params: {
                   prompt: "consent",
                   access_type: "offline",
                   response_type: "code"
               }
           }
       })
   ],
    callbacks: {
       // Invoked on successful signIn
        async signIn ({profile}) {
            // 1. Connect to database
            // 2. Check if user exists
            // 3. If not, then add user to database
            // 4. Return true to allow singIn

        },
        // Modifies the session object
        async session({session}) {
            // 1. GET user from database
            // 2. Assign user ID to the session
            // 3. Return session
        },
    }
}