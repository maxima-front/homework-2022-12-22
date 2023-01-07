class ColorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "Green" };
  }

  render() {
    return <h1>Color is {this.state.color}</h1>;
  }
}
