const Details = ({ match }: any) => {
  return <h1>Hello {match?.params.id}</h1>;
};

export default Details;
