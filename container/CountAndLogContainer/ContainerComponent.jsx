const CountWrapper = React.createClass({
  render(){
    <div>
      <Count {...this.props} />
    </div>
  }
})

const ContainerComponent = React.createClass({
  render(){
    return(
      <Container data={} onChange={function(store){}} onBoot={function(store,data){}} reducer={Reducer} >
        <Log withProps={true} />
        <CountWrapper withProps={true} />
      </Container>      
    )
  }
})