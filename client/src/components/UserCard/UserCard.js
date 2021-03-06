import React, { Component } from "react";
import { Card, Image, Grid } from 'semantic-ui-react';
import {Link} from "react-router-dom";

export default class UserCard extends React.Component {
  
  render(props) {

    const imageStyle = {
      backgroundImage: "url("+this.props.postImage+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "240px"
    }

    const wrapStyle = {
      backgroundColor: "black",
      display: "block",
      width: "100%",
      position: "relative",
      height: "0",
      padding: "56.25% 0 0 0",
      overflow: "hidden"
    }

    const imgStyle = {
      position: "absolute",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
      left: "0",
      right: "0",
      top: "0",
      bottom: "0",
      margin: "auto"
    }

    return(
      <Card fluid>
        <Card.Content>
          <Image floated="left" size="mini" src={this.props.userAvatar} circular />
          <Card.Header>{this.props.name}</Card.Header>

          {/* When ready, this should link to {`/user/${this.props.author._id}`} */}
          <Card.Meta as={Link} to={`/user`}>{this.props.author}</Card.Meta>
        </Card.Content>
        {/* <div style={ wrapStyle }>
          <img style={imgStyle} src={this.props.postImage} />
        </div> */}

        <div style={ imageStyle }></div>
        {/* <Image src={props.userImage} /> */}
        <Card.Content>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
      </Card>
    )
  };
}

