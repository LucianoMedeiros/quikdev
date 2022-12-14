import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { APIRoutePath } from '~/constants/api-routes'
import { axiosInstance } from '~/utilities/axios-config'
import { notificationError } from '~/utilities/notification'
import { PostActions } from './post-reducer'

export const getPostAction = createAsyncThunk('post/getPost', async (post_id: string, { dispatch }) => {
  dispatch(PostActions.setIsPending(true))

  const url = APIRoutePath.post.get.replace(':id', post_id)

  await axiosInstance
    .get(url)
    .then(async (result: AxiosResponse) => {
      dispatch(PostActions.setCurrent(result.data))
    })
    .catch(error => {
      console.error('getPostAction', error)
      notificationError('Erro', error.message, 'top')
    })
    .finally(() => {
      dispatch(PostActions.setIsPending(false))
    })
})
