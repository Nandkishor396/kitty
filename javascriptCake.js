const people = [
    { name: "Alice", birthday: "2000-07-01" },
    { name: "Bob", birthday: "1999-12-15" },
    { name: "Charlie", birthday: "2001-03-20" },
    { name: "Diana", birthday: "2000-07-07" } // Change to today's date to test
  ];
  
  // Sort and show birthday list
  const sorted = people.sort((a, b) => {
    return new Date(a.birthday).getTime() - new Date(b.birthday).getTime();
  });
  
  document.getElementById("birthday-list").innerHTML = "<h3>🎂 Birthdays (sorted):</h3><ul>" +
    sorted.map(p => `<li>${p.name} - ${p.birthday}</li>`).join('') +
    "</ul>";
  
  // Get today's birthday celebrants
  const today = new Date().toISOString().slice(5, 10);
  const birthdayToday = people.find(p => p.birthday.slice(5) === today);
  
  if (birthdayToday) {
    document.getElementById("cake-container").style.display = "block";
    document.getElementById("celebrant-name").textContent = `Happy Birthday, ${birthdayToday.name}! 🎈`;
  }
  
  // Blow candles
  function blowCandles() {
    const flames = document.querySelectorAll(".flame");
    flames.forEach(f => f.style.display = "none");
    document.getElementById("status").textContent = "Candles blown out! 🕯️🕯️🕯️";
  }
  
  // Cut cake
  function cutCake() {
    const status = document.getElementById("status");
    status.textContent = "Cutting cake";
    let dots = 0;
    const interval = setInterval(() => {
      dots++;
      status.textContent += ".";
      if (dots >= 3) {
        clearInterval(interval);
        status.textContent = "Cake is cut! 🍰 Everyone gets a slice!";
      }
    }, 500);
  }
  