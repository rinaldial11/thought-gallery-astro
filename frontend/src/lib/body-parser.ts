export const bodyParser = (body: string) => {
  return (
    new DOMParser().parseFromString(body, "text/html").body.textContent || ""
  );
};
