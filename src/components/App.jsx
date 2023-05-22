import React, { useState, useCallback } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistic } from './Statistic/Statistic';
import { Layout } from './App.styled';
import Section from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = useCallback(option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  }, []);

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return Math.round((good / countTotalFeedback()) * 100);
  };

  // useEffect(() => {
  //   const total = countTotalFeedback();
  //   const positivePercentage = countPositiveFeedbackPercentage();
  // }, [state]);

  const { good, neutral, bad } = state;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeavefeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </Layout>
  );
};
