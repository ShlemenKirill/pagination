import React from "react";
import { usePagination, DOTS } from "../hooks/usePaginaton";
import "../styles/pagination.css";
import SimpleIcon, { simpleIconTypes } from "../components/SimpleIcon";
import clsx from "clsx";

type Props = {
  onPageChange: (pageNumber: number | string) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
};

const Pagination = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange!?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange![paginationRange!.length - 1];
  return (
    <ul className={"pagination-container"}>
      <li
        className={clsx("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <SimpleIcon svgPath={simpleIconTypes.chevronLeft} />
      </li>
      {paginationRange!.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={clsx("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={clsx("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <SimpleIcon svgPath={simpleIconTypes.chevronRight} />
      </li>
    </ul>
  );
};

export default Pagination;
