import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '~/store/store-config'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
