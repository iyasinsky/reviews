import type { Votes } from '../../types/votes';
import css from './Stats.module.css';

interface StatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

const Stats = ({ votes, totalVotes, positiveRate }: StatsProps) => {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
};

export default Stats;
