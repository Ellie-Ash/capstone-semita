import React, { Component } from "react"
import "./DailyLog.css"

export default class DailyLog extends Component {
  state = {
    activityTitle: "",
  }

    handleFieldChange = evt => {
      const stateToChange = {};
      stateToChange[evt.target.name] = evt.target.value;
      this.setState(stateToChange);

    };
    
    constructNewLog = evt => {
      evt.preventDefault()
      const no = {
        activityId: this.state.activityId,
        userId: this.state.userId,
        activityTitle: this.state.activityTitle,
        rate: this.state.rate,
      };
      console.log(no)

      this.props
      .loggedActivity(this.state)
      .then(() => this.props.history.push("/progress"));
    };

  render() {
      return (
          <React.Fragment>
            <div className="DailyLog">
          <form
          className="DailyLogForm">
              <label htmlFor="inputActivity">
              {this.state.activityTitle} 
              <input onChange={this.handleFieldChange} 
                    type="radio"
                    value= "1"
                    name="rate"
                    checked={this.state.rate === "1"}
                    autoFocus="" />
                    <input onChange={this.handleFieldChange} 
                    type="radio"
                    value="2"
                    name="rate"
                    checked={this.state.rate === "2"}
                    autoFocus="" />
                    <input onChange={this.handleFieldChange} 
                    type="radio"
                    value="3"
                    name="rate"
                    checked={this.state.rate === "3"}
                    autoFocus="" />
                    <input onChange={this.handleFieldChange} 
                    type="radio"
                    value="4"
                    name="rate"
                    checked={this.state.rate === "4"}
                    autoFocus="" />
              </label>
              <hr></hr>
              <label htmlFor="inputActivity">
                  {/* {this.state.activity2}
                    <input onChange={this.handleFieldChange} 
                    type="radio"
                    value="1"
                    name="activity2"
                    checked={this.state.activity2 === "1"}
                    autoFocus="" />
                    <input onChange={this.handleFieldChange} 
                    type="radio"
                    value="2"
                    name="activity2"
                    checked={this.state.activity2 === "2"}
                    autoFocus="" />
                    <input onChange={this.handleFieldChange} 
                    type="radio"
                    value="3"
                    name="activity2"
                    checked={this.state.activity2 === "3"}
                    autoFocus="" />
                    <input onChange={this.handleFieldChange} 
                    type="radio"
                    value="4"
                    name="activity2"
                    checked={this.state.activity2 === "4"}
                    autoFocus="" /> */}
              </label>

                     <br></br>
              <button type="submit"
              className="btn btn-primary SaveLog"
              onClick={this.constructNewLog}>
                  Save Log
              </button>
          </form>
        </div>
      </React.Fragment>
      )
  }
}