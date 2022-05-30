import "./post.scss";
import { Link } from "react-router-dom";
import React from "react";
class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")",
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title">News</h4>
      </header>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    );
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">{new Date(this.props.createdAt).toDateString()}</p>

        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>
        <Link to={`/post/${this.props._id}`} className="link">
          <Button />
        </Link>
      </div>
    );
  }
}

export default function Post({ post }) {
  const PF = "https://shailesh-blog-app.herokuapp.com/images/";
  return (
    <article className="card">
      <CardHeader image={PF + post.photo} />
      <CardBody
        title={post.title}
        text={post.desc}
        createdAt={post.createdAt}
        _id={post._id}
      />
    </article>
  );
}
