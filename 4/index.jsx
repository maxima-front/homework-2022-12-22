class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    let childComponent = null;

    if (this.state.show) {
      childComponent = <Child />;
    }

    return (
      <>
        {childComponent}
      </>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component Child is unmounted.");
  }

  render() {
    return <h1>Children!</h1>;
  }
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container />);
