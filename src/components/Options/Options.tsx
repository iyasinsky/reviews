import type { VoteType } from '../../types/votes';

interface OptionsProps {
  handleVote: (type: VoteType) => void;
}

const Options = ({ handleVote }: OptionsProps) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => handleVote('good')}
        className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-200 ease-in-out cursor-pointer"
      >
        Good
      </button>

      <button
        onClick={() => handleVote('neutral')}
        className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition duration-200 ease-in-out cursor-pointer"
      >
        Neutral
      </button>

      <button
        onClick={() => handleVote('bad')}
        className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out cursor-pointer"
      >
        Bad
      </button>
    </div>
  );
};

export default Options;
