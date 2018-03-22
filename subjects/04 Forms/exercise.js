////////////////////////////////////////////////////////////////////////////////
// Exercise
//
// - When the checkbox is checked:
//   - Fill in the shipping fields with the values from billing
//   - Disable the shipping fields so they are not directly editable
//   - Keep the shipping fields up to date as billing fields change
//   - Hint: you can get the checkbox value from `event.target.checked`
// - When the form submits, console.log the values
//
// Got extra time?
//
// - If there are more than two characters in the "state" field, let the user
//   know they should use the two-character abbreviation
// - If the user types something into shipping, then checks the checkbox, then
//   unchecks the checkbox, ensure the field has the information from
//   before clicking the checkbox the first time
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";
import serializeForm from "form-serialize";

class CheckoutForm extends React.Component {

  state = {
    billingName: 'Steve',
    billingState: 'NY',
    shippingSameAsBilling: false,
    shippingName: 'Ashley',
    shippingState: 'NJ',
  }

  handleChange() {
    this.setState({
      shippingSameAsBilling: !this.state.shippingSameAsBilling
    })
    console.log(this.state.shippingSameAsBilling)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.name)
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <form>
          <fieldset>
            <legend>Billing Address</legend>
            <p>
              <label>
                Billing Name: 
                  <input 
                    type="text" 
                    name="billingName"
                    onChange={(event) => this.handleInputChange(event)}  />
              </label>
            </p>
            <p>
              <label>
                Billing State: 
                    <input 
                      type="text" size="2" name="billingState"
                      onChange={(event) => this.handleInputChange(event)} />
              </label>
            </p>
          </fieldset>

          <br />

          <fieldset>
            <label>
              <input type="checkbox" onChange={() => this.handleChange()} /> Same as billing
            </label>
            <legend>Shipping Address</legend>
            <p>
              <label>
                Shipping Name: 
                  <input 
                    type="text" 
                    name="shippingName" 
                    value={this.state.shippingSameAsBilling ? this.state.billingName : this.state.shippingName }  
                    readOnly={this.state.shippingSameAsBilling}
                  />
              </label>
            </p>
            <p>
              <label>
                Shipping State: <input type="text" size="2" name="shippingState"
                value={this.state.shippingSameAsBilling ? this.state.billingState : this.state.shippingState }
                readOnly={this.state.shippingSameAsBilling} />
              </label>
            </p>
          </fieldset>

          <p>
            <button>Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<CheckoutForm />, document.getElementById("app"));
