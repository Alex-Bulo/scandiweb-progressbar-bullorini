import {
  BILLING_STEP,
  DETAILS_STEP,
  SHIPPING_STEP,
} from "SourceRoute/Checkout/Checkout.config";
import ProgressBarContainer from "Component/ProgressBar/ProgressBar.container";
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import "./Checkout.override.style.scss";

class Checkout extends SourceCheckout {
  renderProgressBar() {
    const stepsArray = [
      {
        id: SHIPPING_STEP,
        title: "Shipping",
      },
      {
        id: BILLING_STEP,
        title: "Review & Payments",
      },
      { id: DETAILS_STEP, title: "Success" },
    ];

    return (
      <ProgressBarContainer
        progressSteps={stepsArray}
        checkoutStep={this.props.checkoutStep}
      />
    );
  }
}

export default Checkout;
