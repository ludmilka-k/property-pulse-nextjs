# Property Pulse 
> A highly interactive and user-friendly web application designed to streamline your rental property search.

<code><img src="/public/images/screen.jpg" /></code>

## Features

- [x] **Authentication**: User authentication and authorization  with Google & Next Auth for managing saved searches.
- [x] **API Integration**: Fetch live data from database via RESTful APIs, ensuring up-to-date information.
- [x] **Route protection**: API routes with comprehensive route protection.
- [x] **User profile**: Managing user profile with user listings.
- [x] **Property listing CRUD**: Add, view, edit and delete properties.
- [x] **Image upload (Multiple)**: Image uploads with Cloudinary integration.
- [x] **Property Search**: Easily search for rental properties based on key-words or location.
- [x] **Property Details**: Get detailed information about each property, complete with images, descriptions and contact form.
- [x] **Messages**: Internal messages with "unread" notifications.
- [x] **Bookmarking List**: Save and manage your favorite properties for quick access and easy comparison.
- [x] **Interactive Map**: View property locations on an interactive map.
- [x] **Photoswipe**: Lightbox images gallery.
- [x] **Responsive Design (Tailwind)**: Optimized for desktop, tablet, and mobile devices. 
- [x] **Server-Side Rendering (SSR)**: Leverage Next.js features to provide fast page load times.
- [x] **User-Friendly**: Custom 404 page, Loading spinners, Toast notifications, Pagination, Sharing to social media.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Cloudinary](https://cloudinary.com/)
- [Photoswipe](https://photoswipe.com/)
- [Mapbox](https://www.mapbox.com/)
- [React Map GL](https://visgl.github.io/react-map-gl/)
- [React Geocode](https://www.npmjs.com/package/react-geocode)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Share](https://www.npmjs.com/package/react-share)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

## Getting Started

### Prerequisites
Get or Sign up at:
1. Node.js (v18 or higher).
2. MongoDB Atlas account and a cluster.
3. Cloudinary account.
4. Google console account.
5. Mapbox account.

### `.env` file
Rename the `env.example` file to `.env` and set up the environment variables:
- MONGODB_URI=your_mongodb_database_url
- GOOGLE_CLIENT_ID= your_google_client_id
- GOOGLE_CLIENT_SECRET= your_google_client_secret
- NEXTAUTH_SECRET=your_nextauth_secret (generate command: `openssl rand -base64 32`)
- CLOUDINARY_CLOUD_NAME=your_cloudinary_name
- CLOUDINARY_API_KEY=your_cloudinary_api_key
- CLOUDINARY_API_SECRET=your_cloudinary_api_secret
- NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY=your_mapbox_api_key

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```
Open your browser at [http://localhost:3000](http://localhost:3000) to see the app in action.