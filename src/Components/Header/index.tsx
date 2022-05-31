import { Link } from 'react-router-dom'
import { Container, Content } from './styles'

const Header = () => {
  return (
    <Container>
      <Content>
        <Link className="link" to="/Candidato">
          Candidato
        </Link>
        <Link className="link" to="/Entrevistador">
          Entrevistador
        </Link>
        <Link className="link" to="/Recrutador">
          Recrutador
        </Link>
      </Content>
    </Container>
  )
}

export default Header
