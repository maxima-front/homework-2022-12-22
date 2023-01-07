class ColorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "Green" };
  }

  changeColor = () => {
    this.setState({ color: "Blue" });
  };

  render() {
    return (
      <>
        <h1>Color is {this.state.color}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </>
    );
  }
}
