import React, { Component } from 'react'

export class NewsItems extends Component {
    
    render() {
        let { title, description, ImageUrl,NewsUrl } = this.props;
        return (
            <div className='mx-2'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={ImageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a rel="noreferrer" href={NewsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems