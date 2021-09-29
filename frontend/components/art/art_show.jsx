import React from "react";

class ArtShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("i mounted")
    this.props.fetchArt(this.props.match.params.artId);
  }

  render() {
    console.log("i rendered")
    // let art = this.props.entities.arts[this.props.match.params.artId]
    console.log(this.props);
    return (
      <div>
        Art Show
        {/* {art ? art.title : "Art Show"} */}
      </div>
    )
  }
}

export default ArtShow