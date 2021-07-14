const reqUrl = "https://www.nbrb.by/api/exrates/rates?periodicity=0";
function createDiv(div) {
  return document.createElement(div);
}
const tbody = document.querySelector(".tbody");
const headertime = document.querySelector(".header__span-time");
const date = new Date();
headertime.innerHTML = `${date.getDate()}.${
  date.getMonth() + 1
}.${date.getFullYear()}`;
let courses;
function showcurses(arr) {
  arr.forEach((element) => {
    addTotable(
      element.Cur_Name,
      element.Cur_Abbreviation,
      element.Cur_Scale,
      element.Cur_OfficialRate
    );
  });
}
function getJson() {
  fetch(reqUrl)
    .then((response) => response.json())
    .then(function (response) {
      showcurses(response);
    });
}
function addTotable(name, abr, scale, rate) {
  let tr = createDiv("tr");
  tbody.append(tr);
  let tdName = createDiv("td");
  let span = createDiv("span");
  span.innerHTML = `${name}`;
  tr.append(tdName);
  tdName.append(span);
  let tdAmount = createDiv("td");
  tdAmount.innerHTML = `${scale} ${abr}`;
  tr.append(tdAmount);
  let tdCours = createDiv("td");
  tdCours.innerHTML = `${rate}`;
  tr.append(tdCours);
}
getJson();
