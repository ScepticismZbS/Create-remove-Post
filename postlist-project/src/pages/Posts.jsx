import React, { useEffect } from 'react'
import { useState, useMemo, } from 'react'
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import '../styles/App.css'
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { getPagesArray, getPagesCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false)


  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
    setIsPostsLoading(false)
  }

  console.log(totalPages)

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }


  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {

      }
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Loader />
        </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
      }

      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;