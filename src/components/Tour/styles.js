import styled from "styled-components"

export const SingleTour = styled.article`
  background: #fff;
  border-radius: 5px;
  margin: 25px 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition:  all 0.3s linear;

  :hover{
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`
export const Footer = styled.footer`
  padding: 1.5rem 2rem;

  p {
    color: hsl(210, 22%, 49%);
  }
`
export const TourInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h4{
    margin-bottom: 0;
  }
`
export const TourPrice = styled.h4`
  color: hsl(205, 78%, 60%);
  background: hsl(205, 100%, 96%);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
`
export const DeleteButton = styled.button`
  display: block;
  width: 200px;
  margin: 1rem auto 0 auto;
  color: hsl(360, 67%, 44%);
  letter-spacing: 0.1rem;
  background: transparent;
  border: 1px solid hsl(360, 67%, 44%);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`
export const ReadMore = styled.button`
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: hsl(205deg 77% 60%);
    font-size: 1rem;
    cursor: pointer;
    padding-left: 0.25rem;
`