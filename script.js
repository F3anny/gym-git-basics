/**
 * Async Joke Fetcher
 * Demonstrates: Promises, async/await, fetch(), DOM manipulation,
 * error handling, and basic state management — no frameworks.
 */

const JOKE_API_URL = "https://official-joke-api.appspot.com/random_joke";

// ---- DOM references ----
const jokeBtn = document.getElementById("jokeBtn");
const result = document.getElementById("result");
const countEl = document.getElementById("count");

// ---- Simple state ----
let fetchCount = 0;

/**
 * A small reusable delay helper, built on a native Promise.
 * Useful anywhere you need to "wait" inside an async function.
 * @param {number} ms
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetches a random joke from the API.
 * Wrapped in its own function so it's easy to test/reuse
 * separately from the DOM logic below.
 * @returns {Promise<{setup: string, punchline: string}>}
 */
async function fetchJoke() {
  const response = await fetch(JOKE_API_URL);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

/**
 * Renders a joke (or an error) into the result panel.
 * Keeping render logic separate from fetch logic makes both easier to change.
 */
function renderJoke(joke) {
  result.innerHTML = `
    <p class="setup">${joke.setup}</p>
    <p class="punchline">${joke.punchline}</p>
  `;
}

function renderError(message) {
  result.innerHTML = `<p class="error-text">⚠️ ${message}</p>`;
}

function setLoading(isLoading) {
  jokeBtn.disabled = isLoading;
  jokeBtn.textContent = isLoading ? "Fetching…" : "Get a joke";
}

/**
 * Main handler: ties DOM events to the async fetch, with a small
 * artificial delay so the loading state is actually visible.
 */
async function handleGetJoke() {
  setLoading(true);

  try {
    await sleep(400); // let the "Fetching…" state register visually
    const joke = await fetchJoke();
    renderJoke(joke);

    fetchCount += 1;
    countEl.textContent = fetchCount;
  } catch (error) {
    renderError("Couldn't fetch a joke right now. Try again.");
    console.error("fetchJoke failed:", error);
  } finally {
    setLoading(false);
  }
}

jokeBtn.addEventListener("click", handleGetJoke);