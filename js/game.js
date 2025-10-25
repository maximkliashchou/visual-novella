class VisualNovel {
    constructor() {
        this.currentScene = 0;
        this.scenes = [];
        this.init();
    }

    init() {
        this.loadScenes();
        this.setupEventListeners();
        this.showScene(0);
    }

    loadScenes() {
        this.scenes = [
            {
                background: 'images/background1.jpg',
                characters: {
                    left: { image: 'images/character1.png', visible: true },
                    right: { image: '', visible: false }
                },
                name: 'Рассказчик',
                text: 'Это начало вашей истории... Нажмите "Далее" чтобы продолжить.',
                choices: []
            },
            {
                background: 'images/background1.jpg',
                characters: {
                    left: { image: 'images/character1.png', visible: true },
                    right: { image: 'images/character2.png', visible: true }
                },
                name: 'Алиса',
                text: 'Привет! Я Алиса. Рада встрече!',
                choices: [
                    { text: 'Привет, Алиса!', nextScene: 2 },
                    { text: 'Кто ты?', nextScene: 3 }
                ]
            },
            {
                background: 'images/background1.jpg',
                characters: {
                    left: { image: 'images/character1.png', visible: false },
                    right: { image: 'images/character2.png', visible: true }
                },
                name: 'Алиса',
                text: 'Отлично! Давай начнем наше приключение!',
                choices: []
            },
            {
                background: 'images/background1.jpg',
                characters: {
                    left: { image: 'images/character1.png', visible: false },
                    right: { image: 'images/character2.png', visible: true }
                },
                name: 'Алиса',
                text: 'Я новый персонаж в твоей истории. Приятно познакомиться!',
                choices: []
            }
        ];
    }

    setupEventListeners() {
        document.getElementById('next-button').addEventListener('click', () => {
            this.nextScene();
        });
    }

    showScene(sceneIndex) {
        const scene = this.scenes[sceneIndex];
        this.currentScene = sceneIndex;

        // Устанавливаем фон
        document.getElementById('background').src = scene.background;

        // Управляем персонажами
        this.updateCharacter('character-left', scene.characters.left);
        this.updateCharacter('character-right', scene.characters.right);

        // Обновляем текст
        document.getElementById('name-box').textContent = scene.name;
        document.getElementById('text-box').textContent = scene.text;

        // Показываем выборы или кнопку "Далее"
        if (scene.choices && scene.choices.length > 0) {
            this.showChoices(scene.choices);
        } else {
            this.hideChoices();
        }
    }

    updateCharacter(characterId, characterData) {
        const character = document.getElementById(characterId);
        character.src = characterData.image;
        
        if (characterData.visible) {
            character.classList.add('visible');
        } else {
            character.classList.remove('visible');
        }
    }

    showChoices(choices) {
        const choicesContainer = document.getElementById('choices-container');
        const nextButton = document.getElementById('next-button');
        
        nextButton.classList.add('hidden');
        choicesContainer.classList.remove('hidden');
        
        choicesContainer.innerHTML = '';
        
        choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                this.showScene(choice.nextScene);
            });
            choicesContainer.appendChild(button);
        });
    }

    hideChoices() {
        const choicesContainer = document.getElementById('choices-container');
        const nextButton = document.getElementById('next-button');
        
        choicesContainer.classList.add('hidden');
        nextButton.classList.remove('hidden');
    }

    nextScene() {
        if (this.currentScene < this.scenes.length - 1) {
            this.showScene(this.currentScene + 1);
        } else {
            // Конец игры
            document.getElementById('text-box').textContent = 'Конец истории!';
            document.getElementById('next-button').classList.add('hidden');
        }
    }
}

// Запускаем игру когда страница загрузится
document.addEventListener('DOMContentLoaded', () => {
    new VisualNovel();
});