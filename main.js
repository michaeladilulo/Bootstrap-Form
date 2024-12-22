window.addEventListener('scroll', function() {
    const stickySection = document.querySelector('.sticky-section');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > stickySection.offsetTop || scrollPosition == stickySection.offsetTop) {
        stickySection.classList.add('sticky-active');
    } else {
        stickySection.classList.remove('sticky-active');
    }
});

document.querySelectorAll('input[name="entityType"]').forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
        const otherInputContainer = document.getElementById('otherInputContainer');
        if (this.value === "13") {
            otherInputContainer.style.display = 'block';
        } else {
            otherInputContainer.style.display = 'none';
        }
    });
});

document.querySelectorAll('input[name="entityType"]').forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
        const selectedOptionDisplay = document.getElementById('selectedOptionDisplay');
        const selectedOptionText = document.getElementById('selectedOptionText');
        const otherInputContainer = document.getElementById('otherInputContainer');

        selectedOptionDisplay.style.display = 'block';
        selectedOptionText.textContent = this.nextElementSibling.textContent;

        if (this.value === '13') {
            otherInputContainer.style.display = 'block';
        } else {
            otherInputContainer.style.display = 'none';
        }
    });
});

document.querySelectorAll('input[name="operatorType"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        const selectedOptionsDisplay = document.getElementById('selectedOptionDisplayOperator');
        const selectedOptionText = document.getElementById('selectedOptionTextOperator');
        
        const selectedOptions = [];
        
        document.querySelectorAll('input[name="operatorType"]:checked').forEach(function (checkedBox) {
            const label = checkedBox.nextElementSibling.textContent;
            selectedOptions.push(label);
        });

        if (selectedOptions.length > 0) {
            selectedOptionsDisplay.style.display = 'block';
            selectedOptionText.innerHTML = selectedOptions.join('<br>');
        } else {
            selectedOptionsDisplay.style.display = 'none';
        }
    });
});

document.querySelectorAll('input[name="tribal"]').forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
        const selectedOptionDisplay = document.getElementById('selectedOptionDisplayTribal');
        const selectedOptionText = document.getElementById('selectedOptionTextTribal');

        selectedOptionDisplay.style.display = 'block';
        selectedOptionText.textContent = this.nextElementSibling.textContent;

        if (this.value === '13') {
            otherInputContainer.style.display = 'block';
        } else {
            otherInputContainer.style.display = 'none';
        }
    });
});

document.querySelectorAll('input[name="petroleumStored"]').forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
        const selectedOptionDisplay = document.getElementById('selectedOptionDisplayPetroleum');
        const selectedOptionText = document.getElementById('selectedOptionTextPetroleum');
        const otherInputContainer = document.getElementById('otherInputContainerStored');

        selectedOptionDisplay.style.display = 'block';
        selectedOptionText.textContent = this.nextElementSibling.textContent;

        if (this.value === '13') {
            otherInputContainer.style.display = 'block';
        } else {
            otherInputContainer.style.display = 'none';
        }
    });
});

document.querySelectorAll('input[name="siteOperation"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        const selectedOptionsDisplay = document.getElementById('selectedOptionDisplaySiteOperation');
        const selectedOptionText = document.getElementById('selectedOptionTextSiteOperation');
        
        const selectedOptions = [];
        
        document.querySelectorAll('input[name="siteOperation"]:checked').forEach(function (checkedBox) {
            const label = checkedBox.nextElementSibling.textContent;
            selectedOptions.push(label);
        });

        if (selectedOptions.length > 0) {
            selectedOptionsDisplay.style.display = 'block';
            selectedOptionText.innerHTML = selectedOptions.join('<br>');
        } else {
            selectedOptionsDisplay.style.display = 'none';
        }
    });
});

const sectionIds = ["tanks-on-site-section", "insurance-application-section"];

sectionIds.forEach(sectionId => {
    const section = document.getElementById(sectionId);

    section.querySelectorAll('.form-check-input').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const linkedCheckboxId = this.getAttribute('data-link');
            const linkedCheckbox = document.getElementById(linkedCheckboxId);

            if (linkedCheckbox) {
                linkedCheckbox.checked = this.checked;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const astCheckbox = document.getElementById('tanksAst');
    const astSection = document.getElementById('spcc-section-questions');

    function toggleAstSection() {
        const inputs = astSection.querySelectorAll('input');

        if (astCheckbox.checked) {
            inputs.forEach(input => {
                input.disabled = false;
            });
        } else {
            inputs.forEach(input => {
                input.disabled = true;
            });
        }
    }

    astCheckbox.addEventListener('change', toggleAstSection);

    toggleAstSection();
});

function addColumn(event) {
    event.preventDefault();

    const table = document.getElementById("dynamic-table");
    const thead = table.querySelector("thead");

    const thRow = thead.querySelector("tr");
    const newHeader = document.createElement("th");
    newHeader.textContent = `Tank No. ${thRow.children.length}`;
    thRow.appendChild(newHeader);

    const tbodySections = table.querySelectorAll(".tank-section");
    tbodySections.forEach(tbody => {
        const rows = tbody.querySelectorAll("tr");
        rows.forEach(row => {
            const lastCell = row.querySelector("td:last-child");
            if (lastCell) {
                const lastInput = lastCell.querySelector("input");
                const inputType = lastInput ? lastInput.getAttribute("type") : "text";

                const newCell = document.createElement("td");
                if (inputType === "date") {
                    newCell.innerHTML = `<input type="date" class="form-control">`;
                } else if (inputType === "text") {
                    newCell.innerHTML = `<input type="text" class="form-control">`;
                } else {
                    newCell.innerHTML = `<input type="text" class="form-control">`;
                }
                row.appendChild(newCell);
            }
        });
    });

    const tableWrapper = document.querySelector(".table-wrapper");
    tableWrapper.scrollLeft = table.scrollWidth;

    console.log("New column added.");
}















const fileList = document.querySelector(".file-list");
const fileBrowseButton = document.querySelector(".file-browse-button");
const fileBrowseInput = document.querySelector(".file-browse-input");
const fileUploadBox = document.querySelector(".file-upload-box");
const fileCompletedStatus = document.querySelector(".file-completed-status");
let totalFiles = 0;
let completedFiles = 0;
const createFileItemHTML = (file, uniqueIdentifier) => {
    const {name, size} = file;
    const extension = name.split(".").pop();
    const formattedFileSize = size >= 1024 * 1024 ? `${(size / (1024 * 1024)).toFixed(2)} MB` : `${(size / 1024).toFixed(2)} KB`;
    // Generating HTML for file item
    return `<li class="file-item" id="file-item-${uniqueIdentifier}">
                <div class="file-extension">${extension}</div>
                <div class="file-content-wrapper">
                <div class="file-content">
                    <div class="file-details">
                    <h5 class="file-name">${name}</h5>
                    <div class="file-info">
                        <small class="file-size">0 MB / ${formattedFileSize}</small>
                        <small class="file-divider">•</small>
                        <small class="file-status">Uploading...</small>
                    </div>
                    </div>
                    <button class="cancel-button">
                    <i class="bx bx-x"></i>
                    </button>
                </div>
                <div class="file-progress-bar">
                    <div class="file-progress"></div>
                </div>
                </div>
            </li>`;
}
const handleFileUploading = (file, uniqueIdentifier) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append("file", file);
    xhr.upload.addEventListener("progress", (e) => {
        const fileProgress = document.querySelector(`#file-item-${uniqueIdentifier} .file-progress`);
        const fileSize = document.querySelector(`#file-item-${uniqueIdentifier} .file-size`);
        const formattedFileSize = file.size >= 1024 * 1024  ? `${(e.loaded / (1024 * 1024)).toFixed(2)} MB / ${(e.total / (1024 * 1024)).toFixed(2)} MB` : `${(e.loaded / 1024).toFixed(2)} KB / ${(e.total / 1024).toFixed(2)} KB`;
        const progress = Math.round((e.loaded / e.total) * 100);
        fileProgress.style.width = `${progress}%`;
        fileSize.innerText = formattedFileSize;
    });
    xhr.open("POST", "api.php", true);
    xhr.send(formData);
    return xhr;
}
const handleSelectedFiles = ([...files]) => {
    if(files.length === 0) return;
    totalFiles += files.length;
    files.forEach((file, index) => {
        const uniqueIdentifier = Date.now() + index;
        const fileItemHTML = createFileItemHTML(file, uniqueIdentifier);
        fileList.insertAdjacentHTML("afterbegin", fileItemHTML);
        const currentFileItem = document.querySelector(`#file-item-${uniqueIdentifier}`);
        const cancelFileUploadButton = currentFileItem.querySelector(".cancel-button");
        const xhr = handleFileUploading(file, uniqueIdentifier);
        const updateFileStatus = (status, color) => {
            currentFileItem.querySelector(".file-status").innerText = status;
            currentFileItem.querySelector(".file-status").style.color = color;
        }
        xhr.addEventListener("readystatechange", () => {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                completedFiles++;
                cancelFileUploadButton.remove();
                updateFileStatus("Completed", "#00B125");
                fileCompletedStatus.innerText = `${completedFiles} / ${totalFiles} files completed`;
            }
        });
        cancelFileUploadButton.addEventListener("click", () => {
            updateFileStatus("Cancelled", "#E3413F");
            cancelFileUploadButton.remove();
        });
        xhr.addEventListener("error", () => {
            updateFileStatus("Error", "#E3413F");
            alert("An error occurred during the file upload!");
        });
    });
    fileCompletedStatus.innerText = `${completedFiles} / ${totalFiles} files completed`;
}
fileUploadBox.addEventListener("drop", (e) => {
    e.preventDefault();
    handleSelectedFiles(e.dataTransfer.files);
    fileUploadBox.classList.remove("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
});
fileUploadBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    fileUploadBox.classList.add("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Release to upload or";
});
fileUploadBox.addEventListener("dragleave", (e) => {
    e.preventDefault();
    fileUploadBox.classList.remove("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
});
fileBrowseInput.addEventListener("change", (e) => handleSelectedFiles(e.target.files));
fileBrowseButton.addEventListener("click", () => fileBrowseInput.click());


















function toggleMaterialDropdown(event) {
    event.preventDefault();
    const menu = document.getElementById("dropdownMaterialMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function selectMaterialOption(materialOption, event) {
    event.preventDefault();
    const button = document.getElementById("dropdownMaterialButton");
    const removeChoice = document.getElementById("removeMaterialChoice");

    button.innerHTML = materialOption;
    document.getElementById("dropdownMaterialMenu").style.display = "none";

    removeChoice.classList.add("visible");
}

function removeMaterialChoice() {
    const button = document.getElementById("dropdownMaterialButton");
    const removeChoice = document.getElementById("removeMaterialChoice");

    button.innerHTML = "Select Option";
    removeChoice.classList.remove("visible");

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
}



function toggleSubstanceDropdown(event) {
    event.preventDefault();
    const menu = document.getElementById("dropdownSubstanceMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function selectSubstanceOption(substanceOption, event) {
    event.preventDefault();
    const button = document.getElementById("dropdownSubstanceButton");
    const removeChoice = document.getElementById("removeSubstanceChoice");

    button.innerHTML = substanceOption;
    document.getElementById("dropdownSubstanceMenu").style.display = "none";

    removeChoice.classList.add("visible");
}

function removeSubstanceChoice() {
    const button = document.getElementById("dropdownSubstanceButton");
    const removeChoice = document.getElementById("removeSubstanceChoice");

    button.innerHTML = "Select Option";
    removeChoice.classList.remove("visible");

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
}
















function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  function updateSelectedOptions() {
    const selectedOptionsElement = document.getElementById('selectedOptions');
    const checkboxes = document.querySelectorAll('.dropdown input[type="checkbox"]:checked');
    
    selectedOptionsElement.innerHTML = ''; 
    
    checkboxes.forEach(checkbox => {
      const selectedOption = document.createElement('div');
      selectedOption.classList.add('selected-option');
      
      selectedOption.innerHTML = `${checkbox.value} <span class="close-btn" onclick="removeOption('${checkbox.value}')">x</span>`;
      selectedOptionsElement.appendChild(selectedOption);
    });
  }
  
  function removeOption(value) {
    const checkbox = document.querySelector(`.dropdown input[value="${value}"]`);
    if (checkbox) {
      checkbox.checked = false;
    }
    updateSelectedOptions();
  }
  