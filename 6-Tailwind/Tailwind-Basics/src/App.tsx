import React from "react";

const App = () => {
  return (
    <>
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-bold">Styled Lists with Tailwind</h2>

        {/* Disc List */}
        <ul className="list-disc pl-5 text-gray-700">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>

        {/* Decimal List */}
        <ol className="list-decimal pl-5 text-gray-700">
          <li>First step</li>
          <li>Second step</li>
          <li>Third step</li>
        </ol>

        {/* None List */}
        <ul className="list-none text-gray-700">
          <li>• Custom bullet 1</li>
          <li>• Custom bullet 2</li>
          <li>• Custom bullet 3</li>
        </ul>
      </div>

      <br />
      <br />
      <br />

      <p className="text-blue-600 dark:text-sky-400 text-center">
        The quick brown fox...
      </p>

      <p className="...">
        Oh I gotta get on that
        <a
          className="underline hover:text-blue-600 dark:hover:text-blue-400"
          href="https://en.wikipedia.org/wiki/Internet"
        >
          internet
        </a>
        , I'm late on everything!
      </p>

      <p>
        Higher resolution means more than just a better-quality image. With a
        Retina 6K display,{" "}
        <a className="text-blue-600 after:content-['_↗']" href="...">
          Pro Display XDR
        </a>{" "}
        gives you nearly 40 percent more screen real estate than a 5K display.
      </p>
    </>
  );
};

export default App;
