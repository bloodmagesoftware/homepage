function isAnchor(el: Element): el is HTMLAnchorElement {
  return el.tagName === "A";
}

document.querySelectorAll("a[data-email]").forEach((el) => {
  if (!isAnchor(el)) return;
  const codedEmail = el.dataset.email;
  if (!codedEmail) return;
  const email = atob(codedEmail);
  el.href = `mailto:${email}`;
  if (el.innerText === codedEmail) {
    el.innerText = email;
  }
  delete el.dataset.email;
});

document.querySelectorAll("a[data-tel]").forEach((el) => {
  if (!isAnchor(el)) return;
  const codedTel = el.dataset.tel;
  if (!codedTel) return;
  const tel = atob(codedTel);
  el.href = `tel:${tel.replace(/[^+\d]+/g, "")}`;
  if (el.innerText === codedTel) {
    el.innerText = tel;
  }
  delete el.dataset.tel;
});
