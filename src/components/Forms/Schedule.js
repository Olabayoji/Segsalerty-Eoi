import { PopupModal } from "react-calendly";
import React from "react";
class CustomButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button
          className="schedule"
          onClick={() => {
            this.setState({ isOpen: true });
          }}
        >
          Click here to schedule!
        </button>
        <PopupModal
          url="https://calendly.com/segsalertymeeting/non-technical-meeting"
          pageSettings={this.props.pageSettings}
          utm={this.props.utm}
          prefill={this.props.prefill}
          onModalClose={() => this.setState({ isOpen: false })}
          open={this.state.isOpen}
          rootElement={document.getElementById("root")}
        />
      </div>
    );
  }
}

export default CustomButton;
