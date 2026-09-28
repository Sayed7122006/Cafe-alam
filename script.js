document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.name.value;
  alert(`✅ تم الحجز يا ${name}!\nهنتواصل معاك قريباً لتأكيد الحجز 😊`);
  this.reset();
});
