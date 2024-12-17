import React from 'react';
import Post from '../../../components/Post/Post';

const Feed = () => {
    return (
        <div>
            <div className='flex flex-col gap-2 h-[500px] overflow-scroll'>
                <Post></Post>
            </div>
        </div>
    );
};

export default Feed;