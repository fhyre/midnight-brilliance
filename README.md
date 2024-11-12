## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables in the `.env` file at the root of the project:

```
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
```

Where `xxx` is to be replaced with the configuration Firebase gives to you.

4. Start the development by running `npm run dev`.

## Limitations

1. Did not have enough time to do transitions.
2. Did not need to use zustand and/or another global state manager as I opted for the Context API.
3. If I had more time, I would have documented more of the code and structured the file tree a lot better.

## Time Spent

About 6 hours, had tinker a lot with styling and finding correct assets.
