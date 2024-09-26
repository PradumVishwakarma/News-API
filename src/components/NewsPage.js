import React, { Component } from 'react';
import NewsItems from './NewsItems';

class NewsPage extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b0de0b157b744a4980c3828042669ee4";
        let data = await fetch(url);
        let passdata = data.json()
        this.setState({ articles: passdata.articles })

    }

    render() {

        return (

            <div className='container '>
                <h2>Heading</h2>
                <div className="row ">
                    {this.state.articles && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItems title={element.title} description={element.description} NewsUrl={element.NewsUrl} ImageUrl={element.ImageUrl} />
                        </div>
                    })}

                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <a href="/" className="card-link">Card link</a>
                            <a href="/" className="card-link">Another link</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <a href="/" className="card-link">Card link</a>
                            <a href="/" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsPage