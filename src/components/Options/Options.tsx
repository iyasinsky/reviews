import css from './Options.module.css';
import type { VoteType } from '../../types/votes';

interface OptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const Options = ({ onVote, onReset, canReset }: OptionsProps) => {
  return (
    <div className={css.container}>
      <button onClick={() => onVote('good')} className={css.button}>
        Good
      </button>
      <button onClick={() => onVote('neutral')} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onVote('bad')} className={css.button}>
        Bad
      </button>
      {canReset && (
        <button
          onClick={() => onReset()}
          className={`${css.button} ${css.reset}`}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
