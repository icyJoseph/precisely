import React, { Component } from "react";
import { Button } from "reactstrap";
import { toggleState, useToggleOnScroll } from "../../utils";
import { BACK_TOP } from "../../constants";

export class Tools extends Component {
  state = { show: false };

  toggle = toggleState.bind(this, "show");
  showButton = useToggleOnScroll.bind(this, "show");

  componentDidMount() {
    window.addEventListener("scroll", this.showButton);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.showButton);
  }

  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    const { show } = this.state;
    return (
      show && (
        <div className="tools">
          <Button
            onClick={this.scrollToTop}
            outline
            color="info"
            className="button-tools"
          >
            {BACK_TOP}
          </Button>
        </div>
      )
    );
  }
}

export default Tools;
