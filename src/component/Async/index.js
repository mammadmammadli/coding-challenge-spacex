const Async = ({ state, render, renderError = null, renderLoading = null }) => {
  const { loading, error, data } = state;

  if (error) {
    if (renderError) {
      return renderError();
    }

    return (
      <p className="underline underline-offset-1 text-pink-500">
        Error occured
      </p>
    );
  }

  if (loading) {
    if (renderLoading) {
      renderLoading();
    }

    return <div>Loading...</div>;
  }

  if (data) {
    return render(data);
  }

  return null;
};

export default Async;
