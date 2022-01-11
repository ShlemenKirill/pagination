export declare const DOTS = "...";
declare type Props = {
    totalCount: number;
    pageSize: number;
    siblingCount: number;
    currentPage: number;
};
export declare const usePagination: (props: Props) => (string | number)[] | undefined;
export {};
