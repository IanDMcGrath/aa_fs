import React from "react";
import FilterBarContainer from "../filter/filter_bar_container";
import ArtIndexItemContainer from "./art_index_item_container";

class ArtIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderFiltered = this.renderFiltered.bind(this);
    this.renderAll = this.renderAll.bind(this);
  }

  componentDidMount() {
    this.props.fetchArts();
  }

  renderAll(arts) {
    return (
      arts.map(art => <ArtIndexItemContainer key={art.id} art={art}/>)
    );
  }

  renderFiltered(filter, arts) {
    if (!filter.artIds || !(Object.keys(filter.artIds).length > 0)) {return null;}
    console.log('filtering!');
    return (
      Object.values(filter.artIds).map(artId =>
        (arts[artId.id] ? <ArtIndexItemContainer key={arts[artId.id].id} art={arts[artId.id - 1]}/>: null)
      )
    );
  }

  render() {
    let { arts, filter } = this.props
    if (!arts) {return null};
    let isFiltered = Boolean(filter.artIds);
    return (
      <div className="art-index">
        <FilterBarContainer arts={arts}/>
        <div className="art-index-grid">
          {isFiltered ? this.renderFiltered(filter, arts) : this.renderAll(arts)}
        </div>
      </div>
    );
  }
}

export default ArtIndex;