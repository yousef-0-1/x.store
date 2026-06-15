# X.STORE — Modern E-Commerce Platform

[Live Demo Link](https://x-store-psi.vercel.app/)

## Key Engineering Implementations
* Global State Architecture: Implemented [Zustand/Redux/Context] to manage persistent cart state and user sessions across routes without prop-drilling.
* Performance Optimization: Utilized [dynamic imports/lazy loading/image optimization] to maintain high performance and low core web vitals.
* Robust Error Handling: Integrated global error boundaries and guarded routes to elegantly handle unauthenticated checkout attempts and API failures.

## Tech Stack
* Frontend: React, TailwindCSS, [TypeScript/ES6 JavaScript]
* Routing & State: React Router DOM, [Your State Library]
* Hosting: Vercel (Continuous Deployment via GitHub Actions)
