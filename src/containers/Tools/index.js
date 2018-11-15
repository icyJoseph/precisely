import React, { Fragment, Component } from "react";
import { Button } from "reactstrap";
import { toggleState, useToggleOnScroll, messageHandler } from "../../utils";
import { BACK_TOP, UPDATE } from "../../constants";

export class Tools extends Component {
  state = { show: false, update: false };

  toggle = toggleState.bind(this, "show");
  showButton = useToggleOnScroll.bind(this, "show");
  updateHandler = messageHandler.bind(this);

  componentDidMount() {
    window.addEventListener("scroll", this.showButton);
    window.addEventListener("message", this.updateHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.showButton);
    window.removeEventListener("message", this.updateHandler);
  }

  scrollToTop = () => window.scrollTo(0, 0);

  update = () => {
    return this.setState({ udpate: false }, () => window.location.reload(true));
  };

  render() {
    const { show, update } = this.state;
    const {
      match: { params }
    } = this.props;

    const isLandingPage = !params.page;
    return (
      <Fragment>
        {update && isLandingPage && (
          <div className="tools">
            <Button
              onClick={this.update}
              outline
              color="info"
              className="update-button"
            >
              {UPDATE}
            </Button>
          </div>
        )}
        {show && (
          <div className="tools">
            <Button
              onClick={this.scrollToTop}
              outline
              color="info"
              className="back-top-button"
            >
              {BACK_TOP}
            </Button>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Tools;
