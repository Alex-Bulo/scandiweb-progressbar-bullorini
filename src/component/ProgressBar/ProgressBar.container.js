import { PureComponent } from "react";
import ProgressBar from "./ProgressBar.component";
import "./ProgressBar.style.scss";

class ProgressBarContainer extends PureComponent {
  constructor(props){
    super(props),
    this.state = {order:1},
    this.getStepOrder = this.getStepOrder.bind(this)
  }

    getStepOrder() {
    let order = 1;

    this.props.progressSteps.forEach((step, idx) => {
      if (step.id === this.props.checkoutStep) {
        order = idx + 1;
      }
    });
    return order;
  }
  componentDidMount(){
      const newOrder = this.getStepOrder()
      this.setState({order:newOrder})
  }

  componentDidUpdate(){
    const newOrder = this.getStepOrder()
    this.setState({order:newOrder})
}

  render() {
    return (
      <div className="ProgressBar">
        {this.props.progressSteps.map((step, idx) => {
          return (
            <ProgressBar
              key={step.id}
              step={{ ...step, idx: idx + 1 }}
              onStepOrder={this.state.order}
              isStepVisible={idx + 1 !== this.props.progressSteps.length}
            />
          );
        })}
      </div>
    );
  }
}

export default ProgressBarContainer;
