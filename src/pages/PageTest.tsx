import { Button, Table } from 'antd';
import { withErrorBoundary } from 'react-error-boundary';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { useGlobal } from '../hooks/useGlobal';
import { convertParamsToObject } from '../until/urlObject';

import ErrorComponent from '@/components/commons/ErrorComponent';
import { getData } from '@/services/products.service';

import './style.css';

interface IData {
    title: number;
}

const PageTest = (props: any) => {
    const objValue = {
        title: 'title',
        num: 1,
    };
    const globalState = useGlobal();

    const thamso = 15;
    const { data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(
        `tra`,
        ({ pageParam, queryKey }) => getData({ pageParam, queryKey, thamso }),
        {
            getNextPageParam: (lastPage) => lastPage.pagination._page + 1,
            retry: false,
        },
    );

    const handleClick = () => {
        console.log(data?.pages);
        fetchNextPage();
    };

    return (
        <>
            <div className="list">{data?.pages.map((page) => page.data.map((i: IData) => <div>{i.title}</div>))}</div>
            <div>{isFetchingNextPage ? 'Loading...' : ''}</div>
            <Button onClick={handleClick} type="primary">
                Button
            </Button>
            <ChildComponent obj={objValue} />
        </>
    );
};

interface IProps {
    obj: {
        title: string;
        num: number;
    };
}

const ChildComponent = (props: IProps) => {
    // console.log(props);
    return <> Child component </>;
};

export default withErrorBoundary(PageTest, {
    FallbackComponent: ErrorComponent,
});
// export default PageTest;
