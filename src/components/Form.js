import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      awesomeThing: '',
      date: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('hi');
    this.setState({
      awesomeThing: '',
      date: ''
    });
    console.log('ThiS state', this.state);
    this.props.callbackFromParent(this.state);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      console.log(
        'AWESOME THING',
        this.state.awesomeThing,
        'DATE',
        this.state.date
      )
    );
  }

  render() {
    return (
      <div className="form">
        <div>
          <div className="form-group">
            <form onSubmit={this.handleSubmit} className="form-horizontal">
              <div className="form-group">
                <label>
                  Future event:
                  <input
                    type="text"
                    name="awesomeThing"
                    className="form-control"
                    value={this.state.awesomeThing}
                    onChange={this.handleChange}
                    autoFocus
                  />
                </label>
                <div className="form-group date" id="datetimepicker1">
                  <label>
                    Event date:
                    <input
                      type="text"
                      name="date"
                      value={this.state.date}
                      onBlur={this.handleChange}
                      className="form-control"
                    />
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-th" />
                    </span>
                  </label>
                </div>
                {/* <script type="text/javascript">
                  $(function () {
                    $('#datetimepicker1').datetimepicker()
                  });
                </script> */}
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
