import React from 'react'
import { ArticleTitle } from "../../../components/Titles";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
const Bold = ({ children }) => <span className="bold">{children}</span>;

const Text = ({ children }) => <p className="align-center">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="article-content-paragraph">{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1 >{children}</h1>,
  },
};

export default function Content({ article }) {
    return (
      <>
        <ArticleTitle className="article-content-title" label={article.title}/>
        <p className="article-content-paragraph">
          {documentToReactComponents(article.content,options)}
        </p>
      </>
    )
}
