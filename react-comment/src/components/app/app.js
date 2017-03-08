import React, {Component} from 'react';
import Add from '../add/add';
import List from '../list/list'
export default class App extends  Component {
    constructor(props){
        super(props)
        this.state = {
            comments : []
        }
    }
    componentDidMount(){
        const comments = [
            {username:'tom',content:'hello'},
            {username:'bom',content:'l love you'}
        ]
        this.setState({comments})
    }
    add = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }
    remove = (index) => {
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({comments})
    }
    render(){
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add add={this.add}/>
                    <List comments={this.state.comments} remove={this.remove}/>

                </div>
            </div>
        )
    }
}

// export default App