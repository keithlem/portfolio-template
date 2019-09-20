import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                position: 'center',
                height: '176px',
                background:
                  'url(https://icon-library.net/images/react-icon/react-icon-0.jpg) center / cover'
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>Lorem Ipsum</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: 'fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                position: 'center',
                height: '176px',
                background:
                  'url(https://icon-library.net/images/react-icon/react-icon-0.jpg) center / cover'
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>Lorem Ipsum</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: 'fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                position: 'center',
                height: '176px',
                background:
                  'url(https://icon-library.net/images/react-icon/react-icon-0.jpg) center / cover'
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>Lorem Ipsum</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: 'fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>this is angular</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>this is vue</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>this is nodejs</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1>this is mongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>angular</Tab>
          <Tab>vue</Tab>
          <Tab>node</Tab>
          <Tab>mongo</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
