    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');
    const darkmode = document.querySelector('.darkmode');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = button.textContent;

            if (buttonText === 'C') {
                display.value = '';
            } else if (buttonText === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                display.value += buttonText;
            }
        });
    });

    darkmode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('mode', 'dark');
        } else {
            localStorage.setItem('mode', 'light');
        }
    });

    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
