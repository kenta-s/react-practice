import React from 'react';
import ReactDOM from 'react-dom';

class SegmentType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'a'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
  }

  render() {
    return (
        <div className="radio">
          <input type="radio" name="segment_type" value="a" onChange={this.handleChange} />a
          <input type="radio" name="segment_type" value="b" onChange={this.handleChange} />b
          <input type="radio" name="segment_type" value="c" onChange={this.handleChange} />c
        </div>
    );
  }
}

class SegmentSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
  }

  render() {
    return (
      <div id="segment">
        <label>
          segment:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value=""></option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      </div>
    );
  }
}

export default class SegmentWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      segmentOptions: [["a", "A"], ["b", "B"]]
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
        <form>
          <SegmentType />
          <SegmentSelect segmentOptions={this.state.segmentOptions} />
        </form>
      </div>
    );
  }
}
