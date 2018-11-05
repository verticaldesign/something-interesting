import React, { Component } from "react";

class Home extends Component {
  state = {
    curPos: 0,
    currEmoji: String.fromCodePoint(`0x1F55B`),
    dir: 1
  };
  emojiClock = () => {
    if (this.state.curPos === undefined) {
      const d = new Date();
      this.setState({ curPos: d.getHours() });
    }
    if (this.state.dir === -1) {
      this.state.curPos === 0
        ? this.setState({ curPos: 11 })
        : this.setState({ curPos: this.state.curPos - 1 });
    } else {
      this.state.curPos === 11
        ? this.setState({ curPos: 0 })
        : this.setState({ curPos: this.state.curPos + 1 });
    }
    const emojiMap = [
      "1F55B",
      "1F550",
      "1F551",
      "1F552",
      "1F553",
      "1F554",
      "1F555",
      "1F556",
      "1F557",
      "1F558",
      "1F559",
      "1F55A"
    ];
    //String.fromCodePoint(`0x${emojiMap[this.state.curPos]}`)
    this.setState({
      currEmoji: String.fromCodePoint(`0x${emojiMap[this.state.curPos]}`)
    });
  };
  componentDidMount() {
    setInterval(() => {
      this.emojiClock();
    }, 1000);
  }

  render() {
    return (
      <div>
        Something splashy to make you want to click on the links at the top...
        <div className="emoji-buttons">
          <button onClick={() => this.setState({ dir: 1 })}>Normal Time</button>
          <button onClick={() => this.setState({ dir: -1 })}>
            Reverse Time
          </button>
        </div>
        <div className="emoji-clock">{this.state.currEmoji}</div>
      </div>
    );
  }
}

export default Home;
