// Данные для карточек
const cardData = {
    1: {
        title: "Число 1 - Начало",
        description: "Число 1 символизирует начало, лидерство и новые старты. Это число первопроходцев и новаторов.",
        image: "linear-gradient(45deg, #ff6b6b, #ffa726)"
    },
    2: {
        title: "Число 2 - Гармония",
        description: "Число 2 представляет баланс, партнерство и дипломатию. Это число мира и сотрудничества.",
        image: "linear-gradient(45deg, #42a5f5, #7e57c2)"
    },
    3: {
        title: "Число 3 - Творчество",
        description: "Число 3 символизирует творчество, самовыражение и оптимизм. Это число художников и мечтателей.",
        image: "linear-gradient(45deg, #66bb6a, #26c6da)"
    },
    4: {
        title: "Число 4 - Стабильность",
        description: "Число 4 представляет стабильность, порядок и надежность. Это число строителей и организаторов.",
        image: "linear-gradient(45deg, #8d6e63, #78909c)"
    },
    5: {
        title: "Число 5 - Свобода",
        description: "Число 5 символизирует свободу, приключения и перемены. Это число путешественников и исследователей.",
        image: "linear-gradient(45deg, #ab47bc, #ec407a)"
    },
    6: {
        title: "Число 6 - Забота",
        description: "Число 6 представляет заботу, семью и ответственность. Это число воспитателей и защитников.",
        image: "linear-gradient(45deg, #26a69a, #9ccc65)"
    },
    7: {
        title: "Число 7 - Мудрость",
        description: "Число 7 символизирует мудрость, знание и духовность. Это число философов и ученых.",
        image: "linear-gradient(45deg, #5c6bc0, #42a5f5)"
    },
    8: {
        title: "Число 8 - Изобилие",
        description: "Число 8 представляет изобилие, успех и власть. Это число бизнесменов и лидеров.",
        image: "linear-gradient(45deg, #ffa726, #f57c00)"
    },
    9: {
        title: "Число 9 - Завершение",
        description: "Число 9 символизирует завершение, гуманизм и служение. Это число филантропов и учителей.",
        image: "linear-gradient(45deg, #ef5350, #ab47bc)"
    }
};

let selectedNumber = null;

// Функция для переключения экранов
function showScreen(screenNumber) {
    // Скрываем все экраны
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показываем выбранный экран
    document.getElementById(`screen${screenNumber}`).classList.add('active');
}

// Функция для выбора числа
function selectNumber(number) {
    selectedNumber = number;
    showCard(number);
    showScreen(4);
}

// Функция для отображения карточки
function showCard(number) {
    const card = document.getElementById('card');
    const data = cardData[number];
    
    card.innerHTML = `
        <div class="card-image" style="background: ${data.image}"></div>
        <h2>${data.title}</h2>
        <p>${data.description}</p>
    `;
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Убедимся, что первый экран активен
    showScreen(1);
});