import React, { Component } from "react"
import { Route } from 'react-router-dom'
import DailyLog from "./dailyLog/DailyLog.js"
import DbCalls from "./DbCalls"
import Progress from "./progress/Progress"
import CrudLog from "./crudLog/CrudLog"

export default class AppViews extends Component {
    state = {
        activity: []
    };

    
    loggedActivity = (activity) => 
    DbCalls.postNewItem(activity)
    .then(() => DbCalls.getAllItems())
    .then(activity => 
        this.setState({
            activity: activity
        })
    );

    addActivity = (activity) =>
        DbCalls.postNewItem(activity)
        .then(() => DbCalls.getAllItems())
        .then(activity =>
            this.setState({
            activity: activity
        })
    );


    addGoal = (activity) =>
        DbCalls.postNewGoal(activity)
        .then(() => DbCalls.getAllGoals())
        .then(activity => 
            this.setState({
                activity: activity
            }))

    componentDidMount() {
        console.log("didmount");
        const newState = {}


        DbCalls.getAllItems()
            .then(activities => newState.activities = activities)

            .then(() => DbCalls.getAllGoals())
            .then(activities => newState.activities = activities)
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path = "/home"
                render = {(props) => { 
                            return <DailyLog {
                                ...props
                            }
                            activity = {this.state.activity}
                            loggedActivity ={this.loggedActivity}/>
                    }
                }/>
                <Route exact path = "/progress"
                render = {(props) => { 
                            return <Progress {
                                ...props
                            }/>
                    }
                }/>
                <Route exact path = "/goals"
                render = {(props) => {
                    return <CrudLog {
                        ...props
                    }
                    activity = {this.state.activity}
                    addGoal = {this.addGoal}
                    />
                }
            }/>
            </React.Fragment>
        )
    }
}