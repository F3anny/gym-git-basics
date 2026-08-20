# Async Joke Fetcher

A tiny vanilla JS app that fetches a random joke from a public API on button click.
Built as a hands-on demo of core async JavaScript concepts: Promises, `async`/`await`,
`fetch()`, and DOM manipulation — no frameworks, no build step.

## Live concepts demonstrated

- **Promises** — `sleep()` wraps `setTimeout` in a native Promise
- **async/await** — `fetchJoke()` and `handleGetJoke()` use it instead of `.then()` chains
- **fetch()** — real network request to `official-joke-api.appspot.com`
- **try / catch / finally** — proper error handling and cleanup (re-enabling the button)
- **DOM manipulation** — updating text content, toggling a disabled state, event listeners
- **Separation of concerns** — fetch logic, render logic, and state are kept in separate functions

## Run it

No build tools needed:

1. Clone the repo
2. Open `index.html` directly in a browser, **or** serve it locally:
   ```bash
   npx serve .
   ```
3. Click **"Get a joke"**

## File structure

```
joke-fetcher/
├── index.html    # markup
├── style.css     # styling
├── script.js     # all JS logic
└── README.md
```

## Possible next steps

- Add a joke "category" dropdown (the API supports filtering)
- Cache the last few jokes in `localStorage` (or in-memory state) to avoid repeats
- Add a loading skeleton instead of a plain "Fetching…" label