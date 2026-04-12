const cars = ["Tesla", "BMW", "Audi", "Mercedes", "Lexus"];

function changeBgColor() {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = color;
    document.getElementById('bg-color').textContent = color;
}

function randomCar() {
    const randomIndex = Math.floor(Math.random() * cars.length);
    const randomCar = cars[randomIndex];
    document.getElementById('random-car').textContent = randomCar;

}
