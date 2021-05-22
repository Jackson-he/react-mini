import React from '../react';

class App extends React {
  render() {
    // <div class="hi">world peace</div>
    return React.createElement("div", {
      class: "hi"
    }, "world peace");
  }
}

export default App;