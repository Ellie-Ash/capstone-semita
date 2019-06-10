import {Chart} from 'react-google-charts';
import React, { Component } from "react"


export default class Progress extends Component {
    state = {
        log: "",
        activity1: "",
        activity2: ""
    }
    

    render() {
        return(
            <React.Fragment>
            <section className="ChartCard">
                {
                        
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart...</div>}
            data={[
                ['Week', 'Sleep', 'Exercise'],
                ['1', [this.state.log.activity], [this.state.log.activity]],
                // ['2', [this.state.sleep], [this.state.exercise]],
                // ['3', [this.state.sleep], [this.state.exercise]],
                // ['4', [this.state.sleep], [this.state.exercise]],
                // ['5', [this.state.sleep], [this.state.exercise]],
            ]}
            options={{
                title: 'My Progress',
                chartArea: { width: '50%' },
                colors: ['pink', 'lightblue', 'lightgreen'],
                hAxis: {
                    title: 'Progress',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Week',
                },
            }}
            />
            
            }
            </section>
            </React.Fragment>
                    )
    }
}