import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

class Courses extends React.Component  {
  constructor(props) {
    super(props);
  }
    render () {
      let courseData = this.props;
      console.log(courseData);
    return (
      <div>
      {/* {courseData.map(value => { */}
      <div>
        <Card>
          <CardBody >
          {/* <CardImg top width="10vw" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
            <CardTitle>n</CardTitle>
            <CardSubtitle>GitHub repos</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      </div>
    {/* })}; */}
    </div>
    )
  }
}

export default Courses;