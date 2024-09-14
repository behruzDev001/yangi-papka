
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000);
};

document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const darkModeStyles = document.createElement('style');
darkModeStyles.innerHTML = `
    body.dark-mode {
        background-color: #333;
        color: #f5f5f5;
    }
    button {
        background-color: #007bff;
    }
    button:hover {
        background-color: #0056b3;
    }
`;
document.head.appendChild(darkModeStyles);
