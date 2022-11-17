import { Layout } from 'antd'
import styles from '~/styles/Offline.module.css'

type Props = {
  children: JSX.Element | JSX.Element[] | string
}

const { Content, Sider } = Layout

const TemplateOffline = ({ children }: Props) => {
  return (
    <Layout className={styles.template}>
      <Sider className={styles.sideImage} width={'70%'} />
      <Content className={styles.content}>{children}</Content>
    </Layout>
  )
}

export default TemplateOffline