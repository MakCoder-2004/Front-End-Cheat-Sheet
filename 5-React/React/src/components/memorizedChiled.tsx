import {memo} from 'react';

const memorizedChiled = ({ name }: { name: string }) => {
    console.log('👶 MemoizedChild rendered');
    return <div>Child Component: {name}</div>;
}

export default memo(memorizedChiled);