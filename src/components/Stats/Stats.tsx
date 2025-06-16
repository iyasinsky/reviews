import type { Votes } from '../../types/votes';

interface StatsProps {
  votes: Votes;
  totalFeedback: number;
  positivePercentage: number;
  resetVotes: () => void;
}

const Stats = ({
  votes,
  totalFeedback,
  positivePercentage,
  resetVotes,
}: StatsProps) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
    <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
      Statistics
    </h2>
    <ul className="space-y-3 text-lg text-gray-700">
      {/* Display individual vote counts */}
      <li className="flex justify-between items-center">
        Good:
        <span className="font-semibold text-green-600">{votes.good}</span>
      </li>
      <li className="flex justify-between items-center">
        Neutral:
        <span className="font-semibold text-yellow-600">{votes.neutral}</span>
      </li>
      <li className="flex justify-between items-center">
        Bad:
        <span className="font-semibold text-red-600">{votes.bad}</span>
      </li>
      {/* Display total feedback */}
      <li className="flex justify-between items-center pt-2 border-t border-gray-200">
        Total:
        <span className="font-bold text-blue-600">{totalFeedback}</span>
      </li>
      {/* Display positive feedback percentage */}
      <li className="flex justify-between items-center">
        Positive feedback:
        <span className="font-bold text-purple-600">{positivePercentage}%</span>
      </li>
    </ul>
    {/* Reset button */}
    <div className="mt-6 text-center">
      <button
        onClick={resetVotes}
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200 ease-in-out cursor-pointer"
      >
        Reset
      </button>
    </div>
  </div>
);

export default Stats;
