import React from 'react';

const VerticalTimeline = () => {
  return (
    <div className="timeline bg-red-700 w-full">
      <div className="line"></div>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="year-number">2019</div>
          <div className="timeline-content">
            <h3>Year 2019</h3>
            <p>experience details in 2019</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="year-number">2020</div>
          <div className="timeline-content">
            <h3>Year 2020</h3>
            <p>experience details in 2020</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="year-number">2021</div>
          <div className="timeline-content">
            <h3>Year 2021</h3>
            <p>experience details in 2021</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="year-number">2022</div>
          <div className="timeline-content">
            <h3>Year 2022</h3>
            <p>experience details in 2022</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="year-number">2023</div>
          <div className="timeline-content">
            <h3>Year 2023</h3>
            <p>experience details in 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
