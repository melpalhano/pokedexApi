import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
  background: -webkit-linear-gradient(100deg, #f1f1f1 50%, #000000 50%);
  background: -o-linear-gradient(100deg, #f1f1f1 50%, #000000 50%);
  background: -moz-linear-gradient(100deg, #f1f1f1 50%, #000000 50%);

  .content {
    display: flex;
    margin: 0 auto;
    max-width: 1440px;
    flex-direction: row;
    height: calc(100vh - 110px);
    color: ${({ theme }) => theme.colors.black};
  }
  
  @media (max-width: 900px) {
    overflow: hidden;
    background: -webkit-linear-gradient(100deg, #000000 50%, #000000 50%);
    background: -o-linear-gradient(100deg, #000000 50%, #000000 50%);
    background: -moz-linear-gradient(100deg, #000000 50%, #000000 50%);

  }

  @media (max-width: 902px) {
    .content {
      width: 100%;
      height: 100%;
      align-items: center;
      flex-direction: column-reverse;
    }
  }
`;

export const InfomationContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0rem 2rem 7.5rem;
  justify-content: space-around;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-family: 'Roboto';
    color: #FFF;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Roboto';
    color: #FFF;

  }

  a {
    font-size: 1.2rem;
    margin-top: 2rem;
    font-weight: 500;
    font-family: 'Roboto';
    display: inline-block;
    border-radius: 1.25rem;
    padding: 0.5rem 2rem;
    background-color: #FF1616
  }


  @media (max-width: 400px) {
    h1 {
      font-size: 1.5rem;
      margin-bottom: 1.2rem;
    }
  
    p {
      font-size: 0.8rem;
      line-height: 15px;
  
    }
  
    a {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 10rem

     
    }




  }

  @media (max-width: 902px) {
    width: 100%;

    a {
      margin-bottom: 20rem

     
    }
  }
`;
