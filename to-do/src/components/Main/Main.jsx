import React from 'react';
import Free from '../Free/Free';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {removeTodoAC} from '../../data/reducer';
import { withRouter } from 'react-router';


const mapStateToProps = state => {
    return {
        state: state.list
    }
}

const Main = (props) => {
    
    return (
        <>
            <div className="container">
                <Route exact path="/free" render={() => <Free {...props} data={props.state.free} />} />
                <Route exact path="/" render={() => <Free {...props} data={props.state.free} />} />
                <Route exact path="/ufk" render={() => <Free {...props} data={props.state.ufk} />}/>
            </div>

        </>
    )
}


const MainWithRouter = withRouter(Main)
const MainContainer = connect(mapStateToProps, { removeTodoAC })(MainWithRouter)

export default MainContainer;