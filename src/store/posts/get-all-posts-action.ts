import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { APIRoutePath } from '~/constants/api-routes'
import { axiosInstance } from '~/utilities/axios-config'
import { notificationError } from '~/utilities/notification'
import { PostActions } from './post-reducer'

export const getAllPostsAction = createAsyncThunk('post/getAll', async (user_id: string, { dispatch }) => {
  dispatch(PostActions.setIsPending(true))

  const url = APIRoutePath.post.getAll.replace(':user_id', user_id)

  axiosInstance
    .get(url)
    .then(async (result: AxiosResponse) => {
      dispatch(PostActions.setAll(result.data))
    })
    .catch(error => {
      console.error('getAllPostsAction', error.message)
      notificationError('Erro', error.message, 'top')
    })
    .finally(() => {
      dispatch(PostActions.setIsPending(false))
    })
})
