import React, { useState } from 'react';
import FeedbackOptions from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import SectionTitle from './SectionTitle/SectionTitle';
import NotificationMesssage from './Notifications/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {good, neutral, bad};

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const totalFeedback = countTotalFeedback();
  
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / totalFeedback) * 100);
  };

  return (
    <>
      <SectionTitle>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </SectionTitle>

      <SectionTitle>
        <h2>Statistics</h2>

        {totalFeedback !== 0 ? (
          <Statistics
            value={options}
            countTotalFeedback={countTotalFeedback}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <NotificationMesssage />
        )}
      </SectionTitle>
    </>
  );
};



// import { Component } from 'react';
// import FeedbackOptions from './Buttons/Buttons';
// import Statistics from './Statistics/Statistics';
// import SectionTitle from './SectionTitle/SectionTitle';
// import NotificationMesssage from './Notifications/Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     return Math.round((this.state.good / total) * 100);
//   };

//   render() {
//     const totalFeedback = this.countTotalFeedback();
//     return (
//       <>
//         <SectionTitle>
//           <h2>Please leave feedback</h2>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </SectionTitle>

//         <SectionTitle>
//           <h2>Statistics</h2>

//           {totalFeedback !== 0 ? (
//             <Statistics
//               value={this.state}
//               countTotalFeedback={this.countTotalFeedback}
//               countPositiveFeedbackPercentage={
//                 this.countPositiveFeedbackPercentage
//               }
//             />
//           ) : (
//             <NotificationMesssage />
//           )}
//         </SectionTitle>
//       </>
//     );
//   }
// }
