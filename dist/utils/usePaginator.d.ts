/// <reference types="react" />
export interface ParserData {
    maxBullet: number;
    list: any[];
}
export declare type Parser = (data: any) => {
    maxBullet: number;
    list: any[];
};
interface PaginatorProps {
    renderer: JSX.Element;
}
interface FetchConfig {
    key: string;
    endpoint: string;
    query: any;
}
export default function usePaginator(config: FetchConfig, parser: Parser, reset?: boolean): {
    index: number;
    list: any[];
    Paginator: ({ renderer }: PaginatorProps) => JSX.Element;
};
export {};
