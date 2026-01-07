const list = document.getElementById("accomplishmentList");
const STORAGE_KEY = "riyaan_accomplishments";
const ADMIN_PASSWORD = "riyaan_only";

function loadAchievements() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  list.innerHTML = "";
  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function addAchievement() {
  const pass = document.getElementById("adminPass").value;
  const text = document.getElementById("achievementText").value;

  if (pass !== ADMIN_PASSWORD || text.trim() === "") return;

  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  data.push(text);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  document.getElementById("achievementText").value = "";
  loadAchievements();
}

loadAchievements();
