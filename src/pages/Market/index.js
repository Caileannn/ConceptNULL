import React from "react";
import "./style.css";
import Container from "../../components/container";
import { BigTitle } from "../../components/Titles";
import SearchBar from "../../components/searchBar";
import Artists from "./Components/Artists";
import { getItems, getItemsFilters } from "../../api/Items";
import { useEffect, useState } from "react";
import Pagination from "./Components/Pagination";
import MarketItems from "./Components/MarketItems";
export default function Index() {
  const [items, setItems] = React.useState([]);
  const [activeArtist, setActiveArtist] = React.useState(null);
  const [filters, setFilters] = React.useState({
    "fields.collectionName[match]": "",
    "fields.idArtist.sys.id[match]": "",
    "fields.title[match]": "",
  });
  const [page, setPage] = React.useState(1);
  const [itemsVariable, setItemsVariable] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getItems();
      setItems(result);
      setItemsVariable(result.slice(0, 6));
    };
    fetchData();
  }, []);

  const handleSearch = async (search) => {
    var filterAux = {  ...filters,"fields.title[match]": search };
    const result = await getItemsFilters(filterAux);
    setItems(result);
    setFilters(filterAux);
    setPage(1);
    if(result.length != 0){
      setItemsVariable(result.slice(0, 6));
    } else {
      setItemsVariable(null);
    }
  };
  const handleSearchArtists = async (collection, id) => {
    var filterAux = {
      ...filters,
      "fields.collectionName[match]": collection,
      "fields.idArtist.sys.id[match]": id,
    };
    const result = await getItemsFilters(filterAux);
    setItems(result);
    setFilters(filterAux);
    setActiveArtist({ id: id, collection: collection });
    setPage(1);
    if(result.length !== 0){
      setItemsVariable(result.slice(0, 6));
    } else {
      setItemsVariable(null);
    }
  };
  const resetFilters = async () => {
    var filterAux = {
      "fields.collectionName[match]": "",
      "fields.idArtist.sys.id[match]": "",
      "fields.title[match]":filters["fields.title[match]"],
    };
    const result = await getItemsFilters(filterAux);
    setItems(result);
    setFilters(filterAux);
    setActiveArtist(null);
    setPage(1);
    if(result.length !== 0){
      setItemsVariable(result.slice(0, 6));
    } else {
      setItemsVariable(null);
    }
  };

  const onChangePage = async (type) => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
        if(type){
            setPage(page + 1);
            let a = page-1+1
            setItemsVariable(items.slice(a*6, (page+1) * 6));
        } else {
            setPage(page - 1);
            let a = page-1-1
            setItemsVariable(items.slice(a*6, (page-1) * 6));
        }
  };
  return (
    <Container className="market-cont">
      <div className="market-filters">
        <BigTitle label="Marketplace" className="market-title" />
        <SearchBar
          containerClass="market-searchBar"
          setRealValue={handleSearch}
        />
        <h1 className="market-subtitle">artists</h1>
        <Artists onClick={handleSearchArtists} active={activeArtist} />
        {activeArtist != null && (
          <h5 onClick={() => resetFilters()} style={{ cursor: "pointer" }}>
            reset filters
          </h5>
        )}
        <Pagination items={items} onChange={onChangePage} page={page}/>
      </div>
      <div className="separador"></div>
      <MarketItems items={items} itemsVariable={itemsVariable}/>
    </Container>
  );
}
