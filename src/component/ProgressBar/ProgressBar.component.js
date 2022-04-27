import { PureComponent } from "react";

class ProgressBar extends PureComponent {
  render() {
    const { step, onStepOrder, isStepVisible } = this.props;
    const displayProgress = step.idx <= onStepOrder;

    return (
      <>
        <div
          className={`bar ${displayProgress ? "filled-bar" : "empty-bar"}`}
        />

        {isStepVisible && (
          <div className="bar-step">
            <div className={`bar-step-pointer ${displayProgress?'filled-bar-step-pointer':'empty-bar-step-pointer'}`}>
              {displayProgress ? '' : step.idx}
              </div>
            <strong
              className={`bar-step-name ${
                displayProgress ? "filled-bar-step" : "empty-bar-step"
              }`}
            >
                {step.title}
            </strong>
          </div>
        )}
      </>
    );
  }
}

export default ProgressBar;
