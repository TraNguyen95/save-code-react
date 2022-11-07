import { Suspense, useCallback, useMemo, useState } from 'react';

import { FallbackType } from './Page.interface';
import { PageContext } from './PageContext';

export const PageProvider = ({ children }: any) => {
    const [fallback, setFallback] = useState<FallbackType>(null);

    const updateFallback = useCallback((fallback: FallbackType) => {
        setFallback(() => fallback);
    }, []);

    const renderChildren = useMemo(() => {
        return children;
    }, [children]);

    return (
        <PageContext.Provider value={{ updateFallback }}>
            <Suspense fallback={fallback}>{renderChildren}</Suspense>
        </PageContext.Provider>
    );
};
