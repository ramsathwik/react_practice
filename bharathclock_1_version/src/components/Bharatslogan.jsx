export const Slogan = () => {
  return (
    <p className="lead">
      This is the clock that shows time in Bharat at all times
    </p>
  );
};
export const CurrentTime = () => {
  const time = new Date();
  return (
    <p className="lead">
      This is the current time:{time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
};
