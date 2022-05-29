import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../provider/context'
import { Container, Content } from './styles'

const Header = () => {
  const { recruiterPage, candidatePage, interviewerPage } = useContext(Context)
  return (
    <Container>
      <Content>
        <Link className={`link ${candidatePage && 'active'}`} to="/Candidato">
          Candidato
        </Link>
        <Link
          className={`link ${interviewerPage && 'active'}`}
          to="/Entrevistador"
        >
          Entrevistador
        </Link>
        <Link className={`link ${recruiterPage && 'active'}`} to="/Recrutador">
          Recrutador
        </Link>
      </Content>
    </Container>
  )
}

export default Header
