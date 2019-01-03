import * as React from "react";
import { Component } from "react";

class Home extends Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h3>Welcome to Anita J Hawkins' Gallery.</h3>
        <p></p>
        <p>Anita Jospehine Hawkins lives in Poole and uses the local environment to inspire her artistic creations.
          On this site, you can browse through her Art and Crafts and find more information on each piece.</p>
        <h3>Paintings</h3>
        <p>Anita has been an artist since she was sixteen and uses oils, watercolours,
          acrylics and many other materials to create her paintings. The subject of her pictures range from the harbour
          and scenes on the <a href="https://jurassiccoast.org/">
          jurassic coast</a> to the beautiful Dorset landscapes.</p>
          <h3>Assemblages</h3>
          <p>Anita crafts memorable assemblages that capture the essence of Poole in the way they look
            and from the materials they are made from. Using local materials from beaches such as
            drift wood, shells, rope and sea washed glass, they make the ideal gift.
          </p>
      </div>
    );
  }
}

export default Home;
