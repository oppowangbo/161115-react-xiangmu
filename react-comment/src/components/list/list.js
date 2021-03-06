import React, {Component,PropTypes } from 'react';
import Item from '../item/item'
import './list.css'
export default class List extends  Component {
    render(){
        const {comments, remove} = this.props
        // const comments = this.props.comments

        let display = comments.length === 0 ? 'block':'none'
        return (

            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index)=><Item key={index} comment={comment} remove={remove} index={index}/>)
                    }

                </ul>
            </div>
        )
    }
}

List.propTypes = {
    comments:PropTypes.array.isRequired,
      remove:PropTypes.func.isRequired
}
// export default List