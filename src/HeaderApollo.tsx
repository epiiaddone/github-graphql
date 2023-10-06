
import { useQuery } from '@apollo/client';

import { GET_VIEWER_QUERY_APOLLO } from './api/getViewerApollo';

export function HeaderApollo() {
    const { loading: isLoading, data } = useQuery(GET_VIEWER_QUERY_APOLLO);

    if (isLoading || data === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <header className="flex flex-col items-center text-
        slate-50 bg-slate-300 h-40 p-5">
            <img
                src={data.viewer.avatarUrl}
                alt="Viewer"
                className="rounded-full w-16 h-16"
            />
            <div>{data.viewer.name}</div>
            <h1 className="text-xl font-bold">GitHub Search</
            h1>
        </header>
    );
}

