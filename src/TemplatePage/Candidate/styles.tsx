import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: auto;
  width: 350px;
  padding: 3rem 0 0 0;
`
export const Title = styled.h2`
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
`
export const Heading = styled.h3`
  margin-bottom: 1rem;
`
export const Form = styled.form`
  box-shadow: 0px 3px 6px var(--borderColor);
  padding: 1rem;
  border-radius: 10px;
`
export const Errors = styled.ul`
  padding: 1rem 1rem 1rem 2rem;
  border-radius: 10px;
  background: var(--backgroundListOptions);
  margin-top: 1rem;
  font-size: 0.75rem;
  li {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`

export const Button = styled.button`
  margin: 1rem auto auto;
  background: var(--blue);
  border-radius: 25px;
  height: 30px;
  padding: 0.5rem;
  font-size: 0.875rem;
  width: 90%;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease 0s;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`
