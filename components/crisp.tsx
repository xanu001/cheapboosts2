import { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount () {
    Crisp.configure("b002d410-cc76-4fea-8995-5d022f22b63e");
  }

  render () {
    return null;
  }
}

export default CrispChat;
