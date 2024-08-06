const listenToAccordions = () => {
    let accordions = document.querySelectorAll('.faq-card');
    accordions.forEach(accordion => {
        let question = accordion.querySelector('.faq-card__question');
        let answer = accordion.querySelector('.faq-card__answer');
        let button = question.querySelector('.faq-card__question__content__icon-container__icon');
        button.addEventListener('click', (event) => {
            toggleAcordion(answer, question, button);
        });
    });
    const toggleAcordion = (answer, question, button) => {
        let answers = document.querySelectorAll('.faq-card__answer');
        answers.forEach(answerElement => {
            if (answerElement != answer) {
                answerElement.classList.remove('opened');
                answerElement.previousElementSibling.classList.remove('answered');
            }
            document.querySelectorAll('.faq-card__question__content__icon-container__icon').forEach(button => {
                button.src = '../src/images/plus.png';
            });
        });
        answer.classList.toggle('opened');
        question.classList.toggle('answered')
        answer.classList.contains('opened') ? button.src = 'src/images/minus.png' : button.src = 'src/images/plus.png';
    }
}
const listenToThemeToggle = () => {
    let themeToggle = document.getElementById('themeToggleButton');
    let main = document.querySelector('main');
    themeToggle.addEventListener('click', () => {
        if (main.classList.contains('dark-theme')) {
            main.classList.remove('dark-theme');
            sessionStorage.removeItem('darkTheme');
        }
        else {
            main.classList.add('dark-theme');
            sessionStorage.setItem('darkTheme', true);
        }

    });
}
const listenToRegisterAlert = () => {
    let registerAlertContainer = document.getElementById('registerAlertContainer');
    let registerAlert = document.querySelector('.register-alert');
    let registerAlertBtn = registerAlert.querySelector('.register-alert__content__form__submit__input');

    let alertButtons = document.getElementsByName('alertButton');
    alertButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            registerAlertContainer.classList.remove('hidden');
            document.querySelector('html').classList.add('no-scroll');
            sessionStorage.setItem('registerAlertOpen', true);
        });
    });
    registerAlertContainer.addEventListener('click', (event) => {
        registerAlertContainer.classList.add('hidden');
        sessionStorage.removeItem('registerAlertOpen');
        document.querySelector('html').classList.remove('no-scroll');
    });
    registerAlert.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    registerAlertBtn.addEventListener('click', (event) => {
        registerAlertContainer.classList.add('hidden');
        sessionStorage.removeItem('registerAlertOpen');
        document.querySelector('html').classList.remove('no-scroll');
    })
    
}
const listenToWindowReload = () => {
    window.addEventListener('load', (event) => {
        let darkThemeOn = sessionStorage.getItem('darkTheme') ?? false;
        let registerAlertOpen = sessionStorage.getItem('registerAlertOpen') ?? false;
        if (darkThemeOn) {
            document.querySelector('main').classList.add('dark-theme');
        }
        if (registerAlertOpen) {
            document.getElementById('registerAlertContainer').classList.remove('hidden');
            document.querySelector('html').classList.add('no-scroll');
        }
    });
}
listenToWindowReload();
listenToThemeToggle();
listenToRegisterAlert();
listenToAccordions();