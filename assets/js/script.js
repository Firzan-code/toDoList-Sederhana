const addTask = document.getElementById("addTask");
const inputUser = document.getElementById("inputTask");
const containerOL = document.getElementById("tainerOl");
const liCont = document.createElement("input");

const removeTask = document.getElementById("removeTask");

addTask.addEventListener("click", function () {
  let inputValue = inputUser.value.trim(); // trim untuk menghapus spasi
  const tainerOl = document.getElementById("tainerOl");
  if (inputValue.length === 0) {
    alert("input tidak boleh kosong");
    return;
  }

  let permision = confirm(
    "Apakah anda ingin menambah catatan ini ke list tugas anda?"
  );

  if (permision) {
    const liCont = document.createElement("input");
    liCont.setAttribute("type", "checkbox");
    const labelCheck = document.createElement("label");
    const checkboxId = "check-" + Date.now();
    liCont.setAttribute("id", checkboxId);
    labelCheck.setAttribute("for", checkboxId);
    labelCheck.textContent = inputUser.value;
    tainerOl.appendChild(liCont);
    containerOL.appendChild(labelCheck);
    const garisBaru = document.createElement("br");
    containerOL.appendChild(garisBaru);
  }
  inputUser.value = "";
});

removeTask.addEventListener("click", function () {
  const seleksiCheckbox = document.querySelectorAll("input[type='checkbox']");

  seleksiCheckbox.forEach((checkbox) => {
    if (checkbox.checked) {
      const label = checkbox.nextElementSibling; // ambil label setelah checkbox
      checkbox.remove(); // hapus checkbox
      if (label && label.tagName.toLowerCase() === "label") {
        label.remove(); // hapus label kalau ada dan benar elemennya
      }
    }
  });
});
