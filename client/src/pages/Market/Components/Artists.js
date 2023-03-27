import React from "react";
import "react-simple-tree-menu/dist/main.css";
import TreeMenu, {
  defaultChildren,
  ItemComponent,
} from "react-simple-tree-menu";
import Artist from "./Artist";
import ArtistNode from "./ArtistNode";
import { useEffect, useState } from "react";
import { getArtists } from "../../../api/Artists";
export default function Artists({onClick,active}) {
  const [artists, setArtists] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await getArtists();
      console.log(result);
      setArtists(result);
    };
    fetchData();
  }, []);

  return (
    <TreeMenu data={artists&&artists} activeKey={"first-level-node-2"}>
      {({ search, items, resetOpenNodes }) => (
          <div className="market-artists">
            {items.map((props, index) =>
              props.level === 0 ? (
                <Artist {...props} first={index === 0} />
              ) : (
                <ArtistNode {...props} onClick={onClick} active={active}/>
              )
            )}
          </div>
      )}
    </TreeMenu>
  );
}
/*
const treeData = {
  "first-level-node-1": {
    // key
    label: "Pablo Neruda",
    index: 0, // decide the rendering order on the same level
    nodes: {
      "second-level-node-1": {
        label: "Collection 1",
        index: 0,
      },
      "second-level-node-2": {
        label: "Poemas",
        index: 0,
      },
    },
  },
};
*/