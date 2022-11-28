import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center h-[80%] justify-center">
      <Result
        status="404"
        title="404"
        subTitle="对不起，您访问的页面不存在"
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            回到首页
          </Button>
        }
      />
    </div>
  )
}

export default NotFound
