// OUTSOURCE IMPORT
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// LOCAL IMPORT
import { TaskApp } from './pages/TaskApp';
import { Home } from './pages/Home';
import { Header } from './cmps/Header'
class _App extends Component {
    componentDidMount() {
        // SOCKETS
        // socketService.setup();
        // socketService.on('got box status', this.props.setBoxStatus);
        // socketService.on('joined new box', this.props.loadConnectedUsers)
        // socketService.on('box changed', this.props.gotBoxUpdate);
        // socketService.on('chat addMsg', this.props.addMsg);
        // socketService.on('got player update', this.props.updateLocalPlayer);
        // socketService.on('got active boxes', this.props.setActiveBoxes);
    }


    render() {
        return (
            <div className="App">
                <header>
                    <Header />
                </header>
                <main >
                    <Switch>
                        <Route component={TaskApp} path="/task" />
                        <Route component={Home} path="/" />
                    </Switch>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = {

}
export const App = connect(mapStateToProps, mapDispatchToProps)(_App);