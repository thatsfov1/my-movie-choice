import { useState } from 'react';

const usePageScroll = () => {
    const [page, setPage] = useState<number>(1);

    const onPageChange = (value: number) => {
        setPage(value);
        window.scroll(0, 0);
    };

    return { page, onPageChange, setPage };
};

export default usePageScroll;