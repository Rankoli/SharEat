import React from 'react';
import {startSetWeeklyOrder} from '../actions/weeklyOrder';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import widgets being used in this component
import NumberWidgetContainer from '../components/NumberWidgetContainer';
// import ListWidgetContainer from '../components/ListWidgetContainer'; import
// GraphWidgetContainer from '../components/GraphWidgetContainer'; Add in

import NumberDisplay from '../components/NumberDisplay'
import Widget from '../components/Widget';
import NumberWidget from '../components/NumberWidget';
// styles
import '../styles/App.css';

export class DevDashboardPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      error: this.props.errorMassege
    };
  };

  componentDidMount() {
    this
      .props
      .startSetWeeklyOrder();
  };

  render() {

    return (
      <div>
      <Header/>

        <div className="App">
          {/* Add Widgets to display */}

          <Widget heading="Open Ticket Total">
            <NumberDisplay max={9} value={5}/>
          </Widget>

          <NumberWidgetContainer
            href="http://localhost:3001/tickets/open"
            heading="Open Ticket Total">
            <NumberWidget heading="Open Ticket Total" max={9} value={5}/>
          </NumberWidgetContainer>

        </div>

        <Footer/>
      </div>
    )
  }
}

// const DevDashboardPage = () => ();



// <NumberDisplay min={1} max={90} value={5}> <NumberWidget heading="Open Ticket
// Total" min={1} max={9} value={5} loading={true} colspan={2} rowspan={2} />
// </NumberDisplay>

const mapDispatchToProps = (dispatch) => ({
  startSetWeeklyOrder: () => dispatch(startSetWeeklyOrder())
});

const mapStateToProps = (state) => ({errorMassege: state.weeklyOrder.msg});

export default connect(mapStateToProps, mapDispatchToProps)(DevDashboardPage);