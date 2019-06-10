import React, { Component } from "react"
import DbCalls from "./../DbCalls"

export default class CrudLog extends Component {

    state = {
        activityTitle: ""
      };
    
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };
    
    
      constructNewActivity = evt => {
        evt.preventDefault();
          const activity = {
            activityTitle: this.state.activityTitle,
            activitesId: this.props.match.params.activitiesId
          };
    
          this.props
            .addGoal(activity)
            .then(() => this.setState({activity: ""}))
            .then(() => this.props.history.push("/home"));
               
          };

    componentDidMount() {
      DbCalls.getGoal(this.props.match.params.activitiesId)
      .then(activities => {
        this.setState({
          activityTitle: activities.activityTitle,
        });
      });
    };


    render() {
        return (
            <React.Fragment>
            <form className="CrudLog">
          <div className="form-group">
          <label htmlFor="NewActivity">
                    New 
                </label>
                <br></br>
            <input
              type="text"
              required
              className="ActivityField"
              onChange={this.handleFieldChange}
              id="activity"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewActivity}
            className="btn btn-primary">
            Save
          </button>
          </form>
        </React.Fragment>
        )
    }
}