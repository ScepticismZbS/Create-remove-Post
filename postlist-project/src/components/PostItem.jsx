import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate, useLocation, useParams} from 'react-router-dom'

const PostItem = (props) => {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  // Кнопка "Открыть" должна открывать пост, Доделать!

  // function openPost() {
  //   navigate('./posts/${props.post.id}')
  // }

  // Разобраться с useHistory



  console.log(navigate)
    return (
        <div className='post'>
        <div className='post__content'>
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className='post__btns'>
          {/* <MyButton onClick={() => {openPost}}>
            Открыть
          </MyButton> */}
          <MyButton onClick={() => props.remove(props.post)}>
            Удалить
          </MyButton>
        </div>
      </div>
    )
}

export default PostItem