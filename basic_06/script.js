let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num--;
}
while (num >44);

for (let index = num; index < 51; index++) {
    console.log('Переменная = ',  index);    
}

for (let index = num; index < 58; index++) {
    if (index == 52) { // пропуск итерации
        break;
    }
    console.log('Переменная равна ',  index);    
}

for (let index = num; index < 58; index++) {
    if (index == 52) {
        continue;
    }
    console.log('Переменная будет равна ',  index);    
}
