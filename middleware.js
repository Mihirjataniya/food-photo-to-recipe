import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin", // Redirect to sign-in page if not authenticated
  },
});

export const config = {
  matcher: ["/upload", "/recipe/:path*"], // Protect these routes
};
