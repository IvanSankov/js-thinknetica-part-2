import React from "react";

import EmptyBlock from "../helpers/EmptyBlock";

export default function Author(props) {
  const {author} = props;

  if (!author) {
    return <EmptyBlock/>;
  }

  return (
    <div className="row mb-1 ml-1">
      <div className="row">
        <div className="col-sm-4">
          <img src={author.avatar} className="img-fluid" alt={author.name}/>
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-12"><b>Name</b>: {author.name}</div>
            <div className="col-sm-12"><b>Email</b>: {author.email}</div>
            <div className="col-sm-12"><b>Bio</b>: {displayBio(author.bio)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function displayBio(bio) {
  const maxLength = 150;

  if (bio.length < maxLength) {
    return bio;
  }

  return bio.slice(0, maxLength).trim() + '...';
}