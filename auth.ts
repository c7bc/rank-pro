import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Client Access',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // In production, validate against your database
        // This is the structure - implement your own validation logic
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Example: Validate against a database or external service
        // const user = await db.user.findUnique({ where: { email: credentials.email } })
        // if (user && await bcrypt.compare(credentials.password, user.password)) {
        //   return { id: user.id, email: user.email, name: user.name }
        // }

        // Placeholder - replace with actual authentication
        return null
      },
    }),
  ],
  pages: {
    signIn: '/client-access',
    error: '/client-access',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
})
