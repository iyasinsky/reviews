import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes';
import Info from '../Info/Info';
import Options from '../Options/Options';
import Stats from '../Stats/Stats';
import Notification from '../Notification/Notification';

const App = () => {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType): void => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const resetVotes = (): void => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = votes.good + votes.neutral + votes.bad;

  const positivePercentage =
    totalFeedback > 0 ? Math.round((votes.good / totalFeedback) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans antialiased">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <Info />
        <Options handleVote={handleVote} />
        {totalFeedback ? (
          <Stats
            votes={votes}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
            resetVotes={resetVotes}
          />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
};

export default App;
