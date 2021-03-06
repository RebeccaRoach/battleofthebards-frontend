import React from 'react';

const StartPage = ({startGame, buttonDisabled}) => {

  const disabledAttribute = () => {
    const disabled = "disabled";
    return buttonDisabled ? { disabled } : {}
  }

  return (
    <div className="start-page">
      <div className="game-text">
        <header className="game-header">
          <h2 className="game-title">Battle of the Bards</h2>
          <h4 className="game-description">may the most poetic prevail...</h4>
        </header>
        <div className="directions">
          <p>Good day to you, most clever guest!</p>
          <p>3 poems herein make your noble quest</p>
          <p>With each comes a challenge, 3 clues ―</p>
          <p>Trusty guides, but only 6 can be used.</p>
          <p>Points you receive for questions correct;</p>
          <p>Your honor and wit here you must protect!</p>
          <p>Click the button at right to begin...</p>
          <p>May the Bard with the highest score win.</p>
        </div>
      </div>
      <div className="start-button-div">
        <button class="pizazz-btn" {...disabledAttribute()} onClick={startGame}>Start Game</button>
      </div>
    </div>
  );
}

export default StartPage;
