import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
        console.log(this.state.page)
    }

    async componentDidMount() {
        // console.log('dhifdskj')
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eae20ca6f2344abba308bd4c7881a412";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
    }

    handleNext = async () => {
        // if (this.state.page + 1 < Math.ceil(this.state.totalResults / 20)) {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eae20ca6f2344abba308bd4c7881a412&page=${this.state.page + 1}&pages=20`;
        console.log(url)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, page: this.state.page + 1 })
        // document.getElementById("container-fluid").scrollIntoView();
        this.smoothScroll();
        // }
    }

    handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eae20ca6f2344abba308bd4c7881a412&page=${this.state.page - 1}&pages=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, page: this.state.page - 1 })
        // document.getElementById("container-fluid").scrollIntoView();
        this.smoothScroll();
    }

    smoothScroll() {
        document.querySelector('#container-fluid').scrollIntoView({
            behavior: 'smooth'
        });
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <div className="row">
                        <h2 className='text-center'>Aaj ki TAJA KHABAR</h2>
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem key={element.url} title={element.title ? element.title.slice(0, 43) : ''} description={element.description ? element.description.slice(0, 80) : ''} imageUrl={element.urlToImage} />
                            </div>
                            // return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} />
                        })}
                    </div>
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                        <button className="btn btn-dark btn-lg" onClick={this.handleNext}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News