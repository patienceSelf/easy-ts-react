import { Button } from "antd";
import * as React from "react";
import * as styles from "../../styles/index.scss";

class Test extends React.Component{
  constructor(props: any) {
    super(props);
    this.show = this.show.bind(this);
  }

  show() {
    console.log("click");
  }

  render() {
    return (
      <div className={styles.test}>
        test
        <Button type="dashed" onClick={this.show}>123</Button>
      </div>
    );

  }
}

export default Test;
