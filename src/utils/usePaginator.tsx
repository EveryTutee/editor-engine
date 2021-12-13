import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export interface ParserData {
  maxBullet: number;
  list: any[];
}

export type Parser = (data: any) => {
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

function parseConfig(config: FetchConfig, pos: number) {
  const { key } = config;
  let queryString = "";
  Object.keys(config.query).forEach((key) => {
    queryString += `${key}=${config.query[key]}&`;
  });
  return `${config.endpoint}?${queryString}${config.key}=${pos}`;
}

export default function usePaginator(
  config: FetchConfig,
  parser: Parser,
  reset?: boolean
) {
  const ismounted = useRef(false);
  const [pos, setPos] = useState(1);
  const [data, setData] = useState<ParserData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();
  useEffect(() => {
    setPos(1);
  }, [reset]);

  useEffect(() => {
    ismounted.current = true;
    return () => {
      ismounted.current = false;
    };
  }, []);

  const makeRequest = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetch(parseConfig(config, pos));
      const json = await data.json();

      setData(parser(json));
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [config, pos, reset, config.endpoint]);

  useEffect(() => {
    if (!config.endpoint || !ismounted.current) return;

    makeRequest();
  }, [config.endpoint, pos, reset]);

  const { maxBullet = 1, list = [] } = useMemo(
    () => data || { maxBullet: 1, list: [] },
    [data]
  );
  function nextPage() {
    setPos((x) => x + 1);
  }
  function prevPage() {
    setPos((x) => x - 1);
  }

  return {
    index: pos,
    list,
    Paginator: ({ renderer }: PaginatorProps) => {
      if (loading) return <p>Loading...</p>;

      return (
        <Fragment>
          <div className={"bulletWrapper"}>
            <button className="prev" disabled={pos <= 1} onClick={prevPage}>
              &lt; prev
            </button>
            <div className="bullet">
              <p>{pos}</p>
              <span>of</span>
              <p>{maxBullet}</p>
            </div>
            <button
              className="next"
              disabled={pos >= maxBullet}
              onClick={nextPage}
            >
              next &gt;
            </button>
          </div>
          {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
          <Fragment>{renderer}</Fragment>
        </Fragment>
      );
    },
  };
}
