function Click() {
  document.getElementById("bmi-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    height = height / 100;
    let bmi = weight / (height * height);
    document.getElementById("bmi-value").textContent = bmi.toFixed(2);
    let category = '';
    if (bmi < 18.5) {
      category = 'Thiếu cân';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Bình thường';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Thừa cân';
    } else {
      category = 'Béo phì';
    }
    document.getElementById("bmi-category").textContent = `Phân loại: ${category}`;
  });
}
