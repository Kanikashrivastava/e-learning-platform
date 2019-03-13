import React, { Component } from 'react';
import Courses from './courses';
import axios from 'axios';

const Course_URL =   'http://saral.navgurukul.org/api/courses';
class Helper extends Component {
    constructor(props){
        super(props);
        this.state = {
            coursesData: ''
        }
    }


    componentDidMount = async () => {
        let CourseUrlResponse = await axios.get(Course_URL);
        // console.log(CourseUrlResponse.data.availableCourses);
        this.setState({
            coursesData: CourseUrlResponse.data.availableCourses
        });
    }
    render() {
        return (
            <div>
                <Courses coursesData={this.state.coursesData}/>
            </div>
        )
    }
}

export default Helper;