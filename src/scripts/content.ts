document.querySelectorAll("a[data-email]").forEach((el) => {
  console.log(el);
  const codedEmail = (el as HTMLElement).dataset.email;
  if (!codedEmail) return;
  console.log(codedEmail);
  const email = atob(codedEmail);
  (el as HTMLAnchorElement).href = `mailto:${email}`;
  (el as HTMLAnchorElement).innerText = email;
  delete (el as HTMLElement).dataset.email;
});

document.querySelectorAll("a[data-tel]").forEach((el) => {
  const codedTel = (el as HTMLElement).dataset.tel;
  if (!codedTel) return;
  const tel = atob(codedTel);
  (el as HTMLAnchorElement).href = `tel:${tel.replace(/[^+\d]+/g, "")}`;
  (el as HTMLAnchorElement).innerText = tel;
  delete (el as HTMLElement).dataset.tel;
});
