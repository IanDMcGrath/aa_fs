import React from "react";
import FilterButton from "./filter_button";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  handleChangeFilter(filter) {
    if (filter.name === this.props.currentFilter.name) {
      this.props.changeFilter({});
    } else {
      this.props.changeFilter(filter);
    }
  }

  componentDidMount() {
    this.props.fetchTags();
  }

  render () {
    let { tags, currentFilter } = this.props;
    if (!tags) {return null}
    return (
      <div className="filter-bar">
        {Object.values(tags).map((tag, i) => <FilterButton key={`tag-${i}`} tag={tag} handleChangeFilter={this.handleChangeFilter} isActive={Boolean(tag.name === currentFilter.name)}/>)}
      </div>
    )
  }
}

export default FilterBar;