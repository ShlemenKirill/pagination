/// <reference types="react" />
import "../styles/pagination.css";
declare type Props = {
    onPageChange: (pageNumber: number | string) => void;
    totalCount: number;
    siblingCount: number;
    currentPage: number;
    pageSize: number;
};
declare const Pagination: (props: Props) => JSX.Element | null;
export default Pagination;
