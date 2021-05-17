import React from 'react';
import Free from '../Free/Free';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        state: state.list
    }
}




const Main = (props) => {
    return (
        <>
            <div className="container">
                <Route path="/free" render={() => <Free data={props.state.free} />} />
                <Route path="/ufk" render={() => <Free data={props.state.ufk} />}/>
            </div>

        </>
    )
}

const MainContainer = connect(mapStateToProps, null)(Main)

export default MainContainer;