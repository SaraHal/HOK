import React from 'react';
import { connect } from 'react-redux'
import ldsh from 'lodash'

// This function takes a component...
export default function withLoader(WrappedComponent, loadData, dataPath) {
  // ...and returns another component...
  class DataLoader extends React.Component {
    componentDidMount() {
      this.props.loadData(this.props.match.params);
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.match.params !== nextProps.match.params) {
        this.props.loadData(nextProps.match.params);
      }
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };

  return connect(state => ldsh.get(state, dataPath), { loadData })(DataLoader);
}