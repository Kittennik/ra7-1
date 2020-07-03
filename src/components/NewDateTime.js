import React from 'react';
import moment from 'moment';

export default function NewDateTime(Component) {
  return class extends React.Component {
    render() {
      const data = moment(this.props.date);
      return <Component date={data.fromNow()}/>;
    }
  };
}
