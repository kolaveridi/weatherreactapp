import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchweather} from '../actions/index';
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term:''
    };
    this.onInputChange=this.onInputChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);
  }
  onInputChange(event){

     this.setState({
       term:event.target.value
     });
     console.log('term is '+this.state.term);
  }
  onFormSubmit(event){
    event.preventDefault();
    //ftech waetherdata
    this.props.fetchweather(this.state.term);
    this.setState({term:''});
  }
  //4b57ce179f3560a914e8e19f3feaba5b
  render(){
    return(
     <form onSubmit={this.onFormSubmit} className="input-group">
       <input
        placeholder="Get a five day forecast in your city"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <span>
          <button type="submit" className="btn btn-secondary">Submit </button>
       </span>
     </form>

    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchweather},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);
