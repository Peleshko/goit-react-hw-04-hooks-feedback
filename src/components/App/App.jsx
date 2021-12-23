import React, { useState } from 'react';
import Feedbacks from '../Feedbacks';
import Statistics from '../Statistics';
import Notification from '../Notification';
import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);

  const handleClickBtn = btnName => {
    if (btnName === 'good') {
      setGood(prevGood => prevGood + 1);
    }
    if (btnName === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    }
    if (btnName === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Please, leave yours feedback</h1>
      <Feedbacks
        options={['good', 'neutral', 'bad']}
        onLeaveFb={handleClickBtn}
      />
      {total > 0 && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      )}
      {!total > 0 && <Notification message="There is no feedback" />}
    </div>
  );
}
