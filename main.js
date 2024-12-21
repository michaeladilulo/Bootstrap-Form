console.log('hello world')

window.addEventListener('scroll', function() {
    const stickySection = document.querySelector('.sticky-section');
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    console.log('offset top', stickySection.offsetTop);
    
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

// Petroleum Stored For

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