import React from "react";
import ArtIndexItemContainer from "./art_index_item_container";

class ArtIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArts();
  }

  render() {
    let {arts} = this.props
    return (
      <div className="art-index-grid">
        {arts.map(art => <ArtIndexItemContainer key={art.id} art={art}/>)}
      </div>
    )
  }
}

export default ArtIndex;