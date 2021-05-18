import React from 'react';
import Free from '../Free/Free';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {removeTodoAC, removeUfkTodoAC, addStateAC} from '../../data/reducer';
import { withRouter } from 'react-router';
import todoApi from '../../data/dataApi'


const mapStateToProps = state => {
    return {
        state: state.list
    }
}

class Main extends React.Component {
    // constructor(props){
    //     super(props);

    // }

    componentDidMount(){

        if (!this.props.state.free){
            const dataBase = todoApi.getData();
            dataBase.then(data => {
                this.props.addStateAC(data);
            })
        }
        
    }
    
    render(){
        return (
            <>
                <div className="container">
                    <Route exact path="/free" render={() => <Free {...this.props} data={this.props.state.free} />} />
                    <Route exact path="/" render={() => <Free {...this.props} data={this.props.state.free} />} />
                    <Route exact path="/ufk" render={() => <Free {...this.props} data={this.props.state.ufk} />}/>
                </div>
    
            </>
        )
    } 
}


const MainWithRouter = withRouter(Main)
const MainContainer = connect(mapStateToProps, { removeTodoAC, removeUfkTodoAC, addStateAC })(MainWithRouter)

export default MainContainer;