import styled from 'styled-components'
export const Container = styled.header`
  background: var(--blue);
  display: flex;
  align-items: center;
`
export const Content = styled.div`
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .link {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    font-weight: bold;
    text-decoration: none;
    line-height: 3;
    margin: 0.3rem 0;
    &:hover,
    &.active {
      filter: brightness(0.9);
      background: var(--onHoverBackground);
    }
  }
`
