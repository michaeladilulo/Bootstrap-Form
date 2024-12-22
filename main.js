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

// Table Row Tanks
function addColumn(event) {
    event.preventDefault(); // Prevent default form action

    // Get the table element and tbody
    const table = document.getElementById("dynamic-table");
    const tbody = table.querySelector("tbody");

    // Add a new column to each row
    const rows = tbody.querySelectorAll("tr");
    rows.forEach(row => {
      const newCell = row.insertCell(-1);
      newCell.innerHTML = `<input type="text" class="form-control">`;  // Add a new input field
    });

    // Add a new header for the new column
    const th = table.querySelector("thead tr");
    const newHeader = document.createElement("th");
    newHeader.textContent = `Tank No. ${th.children.length}`;
    th.appendChild(newHeader);

    // Scroll to the newly created column (last column)
    const tableWrapper = document.querySelector(".table-wrapper");
    const lastColumnIndex = th.children.length - 1; // Last column index
    const lastColumn = table.querySelectorAll("th")[lastColumnIndex];
    const columnPosition = lastColumn.offsetLeft;

    // Scroll the table wrapper to show the new column
    tableWrapper.scrollLeft = columnPosition;

    console.log("New column added.");
  }










// Image Uploader

const fileList = document.querySelector(".file-list");
const fileBrowseButton = document.querySelector(".file-browse-button");
const fileBrowseInput = document.querySelector(".file-browse-input");
const fileUploadBox = document.querySelector(".file-upload-box");
const fileCompletedStatus = document.querySelector(".file-completed-status");
let totalFiles = 0;
let completedFiles = 0;
// Function to create HTML for each file item
const createFileItemHTML = (file, uniqueIdentifier) => {
    // Extracting file name, size, and extension
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
// Function to handle file uploading
const handleFileUploading = (file, uniqueIdentifier) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append("file", file);
    // Adding progress event listener to the ajax request
    xhr.upload.addEventListener("progress", (e) => {
        // Updating progress bar and file size element
        const fileProgress = document.querySelector(`#file-item-${uniqueIdentifier} .file-progress`);
        const fileSize = document.querySelector(`#file-item-${uniqueIdentifier} .file-size`);
        // Formatting the uploading or total file size into KB or MB accordingly
        const formattedFileSize = file.size >= 1024 * 1024  ? `${(e.loaded / (1024 * 1024)).toFixed(2)} MB / ${(e.total / (1024 * 1024)).toFixed(2)} MB` : `${(e.loaded / 1024).toFixed(2)} KB / ${(e.total / 1024).toFixed(2)} KB`;
        const progress = Math.round((e.loaded / e.total) * 100);
        fileProgress.style.width = `${progress}%`;
        fileSize.innerText = formattedFileSize;
    });
    // Opening connection to the server API endpoint "api.php" and sending the form data
    xhr.open("POST", "api.php", true);
    xhr.send(formData);
    return xhr;
}
// Function to handle selected files
const handleSelectedFiles = ([...files]) => {
    if(files.length === 0) return; // Check if no files are selected
    totalFiles += files.length;
    files.forEach((file, index) => {
        const uniqueIdentifier = Date.now() + index;
        const fileItemHTML = createFileItemHTML(file, uniqueIdentifier);
        // Inserting each file item into file list
        fileList.insertAdjacentHTML("afterbegin", fileItemHTML);
        const currentFileItem = document.querySelector(`#file-item-${uniqueIdentifier}`);
        const cancelFileUploadButton = currentFileItem.querySelector(".cancel-button");
        const xhr = handleFileUploading(file, uniqueIdentifier);
        // Update file status text and change color of it 
        const updateFileStatus = (status, color) => {
            currentFileItem.querySelector(".file-status").innerText = status;
            currentFileItem.querySelector(".file-status").style.color = color;
        }
        xhr.addEventListener("readystatechange", () => {
            // Handling completion of file upload
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                completedFiles++;
                cancelFileUploadButton.remove();
                updateFileStatus("Completed", "#00B125");
                fileCompletedStatus.innerText = `${completedFiles} / ${totalFiles} files completed`;
            }
        });
        // Handling cancellation of file upload
        cancelFileUploadButton.addEventListener("click", () => {
            xhr.abort(); // Cancel file upload
            updateFileStatus("Cancelled", "#E3413F");
            cancelFileUploadButton.remove();
        });
        // Show Alert if there is any error occured during file uploading
        xhr.addEventListener("error", () => {
            updateFileStatus("Error", "#E3413F");
            alert("An error occurred during the file upload!");
        });
    });
    fileCompletedStatus.innerText = `${completedFiles} / ${totalFiles} files completed`;
}
// Function to handle file drop event
fileUploadBox.addEventListener("drop", (e) => {
    e.preventDefault();
    handleSelectedFiles(e.dataTransfer.files);
    fileUploadBox.classList.remove("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
});
// Function to handle file dragover event
fileUploadBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    fileUploadBox.classList.add("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Release to upload or";
});
// Function to handle file dragleave event
fileUploadBox.addEventListener("dragleave", (e) => {
    e.preventDefault();
    fileUploadBox.classList.remove("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
});
fileBrowseInput.addEventListener("change", (e) => handleSelectedFiles(e.target.files));
fileBrowseButton.addEventListener("click", () => fileBrowseInput.click());