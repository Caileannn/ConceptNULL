import React from "react";
import { ArticleTitle } from "../../../components/Titles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Instagram, Twitter, Facebook } from "../../../components/Icons";

import ProfileImage from "../../../components/profileImage";

export default function Data({article}) {
  return (
    <>
      <div className="article-data-profile">
        <div className="article-data-profile-info">
          <ArticleTitle label={article.autor}/>
          <div>
            <h1 className="article-subtitulo">{article.artistName}</h1>
            <h2 className="article-fecha">{article.dateCreation.split("T",1)}</h2>
          </div>
        </div>
        <div className="article-data-profile-image">
          <ProfileImage url={article.artistImage}/>
          <div className="article-socialMedia">
            <Instagram link={article.artistSocialMedia.instagram} color="#4c863e"/>
            <Twitter link={article.artistSocialMedia.twitter} color="#4c863e"/>
            <Facebook link={article.artistSocialMedia.facebook} color="#4c863e"/>
          </div>
        </div>
      </div>
      <div className="article-data-images">
        <img
          className="article-image"
          src={article.imagesUrls[0]}
          alt={article.images[0].fields.title}
        />
        <img
          className="article-image"
          src={article.imagesUrls[1]}
          alt={article.images[1].fields.title}
        />
      </div>
    </>
  );
}
