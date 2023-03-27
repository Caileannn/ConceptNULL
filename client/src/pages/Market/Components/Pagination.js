import React from "react";

export default function Pagination({ items, page, onChange }) {
  var length = items.length;
  var pages = Math.ceil(length / 6);
    const onClickManage = (type) => {
        onChange(type)
    }
  return (
    <div className="market-pagination">
      {page !== 1 && (
        <h4
          className="market-pagination-indicators"
          onClick={() => onClickManage(false)}
        >
          {"< "}Anterior
        </h4>
      )}
      <h4 className="market-pagination-index">{page} de {pages}</h4>
      {page != pages && (
        <h4
          className="market-pagination-indicators"
          onClick={() => onClickManage(true)}
        >
          Siguiente{" >"}
        </h4>
      )}
    </div>
  );
}
