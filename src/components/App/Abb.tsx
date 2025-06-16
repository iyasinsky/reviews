import { useState } from 'react';

// Define types for vote categories and the votes state
type VoteType = 'good' | 'neutral' | 'bad';

interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

const App = () => {
  // State to store the counts for each vote type
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Function to handle a vote when a button is clicked
  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes, // Spread previous votes to maintain other counts
      [type]: prevVotes[type] + 1, // Increment the count for the specific vote type
    }));
  };

  // Function to reset all vote counts to zero
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Calculate total feedback given
  const totalFeedback = votes.good + votes.neutral + votes.bad;

  // Calculate the percentage of positive feedback
  // Avoid division by zero if no feedback has been given
  const positivePercentage =
    totalFeedback > 0 ? (votes.good / totalFeedback) * 100 : 0;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans antialiased">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        {/* Main title for the feedback application */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Give Feedback
        </h1>

        {/* Feedback buttons container */}
        <div className="flex justify-center space-x-4 mb-8">
          {/* Good Feedback Button */}
          <button
            onClick={() => handleVote('good')}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
          >
            Good
          </button>
          {/* Neutral Feedback Button */}
          <button
            onClick={() => handleVote('neutral')}
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
          >
            Neutral
          </button>
          {/* Bad Feedback Button */}
          <button
            onClick={() => handleVote('bad')}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
          >
            Bad
          </button>
        </div>

        {/* Conditional rendering for statistics */}
        {totalFeedback > 0 ? (
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
              Statistics
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {/* Display individual vote counts */}
              <li className="flex justify-between items-center">
                Good:{' '}
                <span className="font-semibold text-green-600">
                  {votes.good}
                </span>
              </li>
              <li className="flex justify-between items-center">
                Neutral:{' '}
                <span className="font-semibold text-yellow-600">
                  {votes.neutral}
                </span>
              </li>
              <li className="flex justify-between items-center">
                Bad:{' '}
                <span className="font-semibold text-red-600">{votes.bad}</span>
              </li>
              {/* Display total feedback */}
              <li className="flex justify-between items-center pt-2 border-t border-gray-200">
                Total:{' '}
                <span className="font-bold text-blue-600">{totalFeedback}</span>
              </li>
              {/* Display positive feedback percentage */}
              <li className="flex justify-between items-center">
                Positive feedback:{' '}
                <span className="font-bold text-purple-600">
                  {positivePercentage.toFixed(2)}%
                </span>
              </li>
            </ul>
            {/* Reset button */}
            <div className="mt-6 text-center">
              <button
                onClick={resetVotes}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200 ease-in-out"
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          // Message displayed when no feedback has been given yet
          <p className="text-center text-gray-500 text-lg py-10">
            No feedback given
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
