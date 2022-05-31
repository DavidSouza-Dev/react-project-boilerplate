import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  padding: 0.8rem;
  box-shadow: 0px 3px 6px var(--borderColor);
  border-radius: 10px;
  min-height: 30vh;

  .job-applications {
    background: var(--backgroundListOptions);
    margin: 0.2rem 0;
    border-radius: 3px;
    padding: 0.5rem;
    font-size: 0.75rem;
    &_name {
      margin-bottom: 0.2rem;
      font-size: 1rem;
    }
    &_email {
      font-size: 1rem;
    }
    &_subtitle {
      font-size: 1rem;
    }
    &_item {
    }
  }
`
export const Heading = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
`
export const Message = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`
