componentDidMount = () => {
  axios.get(
    "http://localhost:5000/sessions"
  ).then(
    (response) => {
      console.log(response);
    }
  )
}
