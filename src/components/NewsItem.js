import React, { Component } from 'react';
// import noimage from './images/noimage'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl } = this.props;
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl ? imageUrl : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAMFBMVEX///+/v7+8vLz5+fn09PTf39/ExMTp6enw8PDW1tbLy8v8/Pzt7e3m5ubHx8e5ubmDtM1TAAACMElEQVR4nO2aW5aDIBBEIyAq6rD/3Y7EFyCgoTGZzKn6VKHvgbYa0McDgiAIgv6wuHiDkgS1ZrdL8iQBq24XCEDwVQQ3vIUvEnTlJV8iYGnjypJiIAABCEAAAhAUI+D1VNpU03+MYJDmBmOKgEAiaHW1XP/5DEH/U61i3WmkWApRCBpr9ZhubwBkZKYoBJ29fh3SAL3SkScoBMoiYE2aYNSxiXrTGIi4mVAIRjsP0l5lwrC6OAGXG8DJuzC3D+ciyQ8avSEkm/O5OQvOFM0Tp/x6Xq7O58Ao6FvEuiDMlkfVaVPedlw6FIRcG7ngJ0VB7NkSysXy1XlsIyEiuVicgPvWUJ/4VnGCyaakjcBt22LqfoLh+aQ1EbZ1Tzp2UJhgLdjbc97pSyAXCxNspWIZBVH5OsQpSyD2M5kZQfkAbLyXwA5oHh3ZgeCQi0UJ3IDCvJkHHbqgEnC1N7Rq5TwR6jAEgSpKJZjubD7XBQIG5EWi7ljktFJfmraX4lfa80UigbmxfhmQ8aiOvFykEfRW4+snv27pohEs180o8MsAXi6SCPqtU8kvpuFTTo0mEWQeubu+WGit/Jqc9SKFIPurg7a7IRD08RAncnKRQED58GJFyyfIHwI3F/MJKENgH/tkE2S/CHNHuy9mExA/v+25mD8GRNEJigkEIABBDkE1tqUl1n3W1/x/AAIQgAAEIAABCEAAAhCAAAQgAEGIQN+v9I8korlfA+UHPwiCIAj6//oFUao3C7J+4/EAAAAASUVORK5CYII='} className="card-img-top" alt="..." style={{ maxWidth: "286px", height: "160px" }} />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: '48px', width: '254px' }}>{(title.length > 42 ? title + '...' : title)}</h5>
                    <p className="card-text" style={{ height: '72px', width: '254px' }}>{(description.length > 79 ? description + '...' : description)}</p>
                    <a href="/" className="btn btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem