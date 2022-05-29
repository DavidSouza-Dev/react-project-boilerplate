import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  padding: 0.8rem;
  box-shadow: 0px 3px 6px var(--borderColor);
  border-radius: 10px;
  .job-item {
    background: #f4f3f6;
    margin: 0.2rem 0;
    border-radius: 3px;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    &--title {
      margin-bottom: 0.2rem;
    }
    &--status {
      font-size: 0.75rem;
    }
  }
`
