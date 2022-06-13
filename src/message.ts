export const message = (msg: string) => {
  const elem = document.createElement('p');
  elem.innerHTML = msg;
  document.body.append(elem);
};
