function App() {
  const movies = [
    { title: 'Stranger Things', genre: 'Sci-Fi • Thriller' },
    { title: 'Wednesday', genre: 'Mystery • Comedy' },
    { title: 'The Witcher', genre: 'Fantasy • Action' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-black px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wide text-red-600">NETFLIX</h1>
          <button className="rounded bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-500">
            Sign In
          </button>
        </header>

        <section className="mb-8 rounded-xl border border-zinc-700 bg-zinc-900/70 p-6 shadow-2xl">
          <h2 className="mb-2 text-4xl font-extrabold">Unlimited movies, TV shows, and more.</h2>
          <p className="text-zinc-300">Watch anywhere. Cancel anytime.</p>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold">Trending Now</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {movies.map((movie) => (
              <article
                key={movie.title}
                className="rounded-lg border border-zinc-700 bg-zinc-800 p-4 transition hover:-translate-y-1 hover:border-red-500"
              >
                <div className="mb-3 h-36 rounded bg-gradient-to-br from-red-700/70 to-zinc-700" />
                <h4 className="text-lg font-semibold">{movie.title}</h4>
                <p className="text-sm text-zinc-300">{movie.genre}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
