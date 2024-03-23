const itemCheckboxes = document.querySelectorAll('.itemCheckbox');
const total = document.querySelector('#total');
const cancelButton = document.getElementById('cancelButton');

let selectedItems = {};

itemCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateSelection);
});

function updateSelection(event) {
  const itemName = event.target.dataset.name;
  const itemPrice = parseInt(event.target.value);
  
  if (event.target.checked) {
    selectedItems[itemName] = itemPrice;
  } else {
    delete selectedItems[itemName];
  }
  
  updateTotal();
  toggleCancelButton();
}

function updateTotal() {
  let totalPrice = 0;
  for (const itemName in selectedItems) {
    totalPrice += selectedItems[itemName];
  }
  total.textContent = 'Rp ' + totalPrice.toLocaleString();
}

function toggleCancelButton() {
  if (Object.keys(selectedItems).length > 0) {
    cancelButton.style.display = 'block';
  } else {
    cancelButton.style.display = 'none';
  }
}

cancelButton.addEventListener('click', () => {
  itemCheckboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
  selectedItems = {};
  updateTotal();
  toggleCancelButton();
});
