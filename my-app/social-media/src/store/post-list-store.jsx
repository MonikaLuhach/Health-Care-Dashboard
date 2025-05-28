import { Children, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ Children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {

  };

  const deletePost = () => {

  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost}}
  >{Children}
  </PostList.Provider>
  );
}

const DEFAULT_POST_LIST = [{
  id: '1',
  title: 'Pretty Vibes',
  body: 'Some clicks from my last outing.',
  reations: 0,
  userId: 'user-1',
  tags: ['Delhi','spring', 'vibes'],
},
{
  id: '2',
  title: 'React',
  body: 'Successfully completed React.',
  reations: 0,
  userId: 'user-2',
  tags: ['React','UI', 'Design'],
}
];

export default PostListProvider;