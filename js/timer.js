const STARTDATE = new Date('2025-07-30T00:00:00');

function updateTimer() {
    const now = new Date();
    const diff = now - STARTDATE;

    // ====== ВЫЧИСЛЯЕМ РАЗНИЦУ ======
    let years = now.getFullYear() - STARTDATE.getFullYear();
    let months = now.getMonth() - STARTDATE.getMonth();
    let days = now.getDate() - STARTDATE.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const secondsInDay = Math.floor(diff / 1000);
    const hours = Math.floor((secondsInDay % 86400) / 3600);
    const minutes = Math.floor((secondsInDay % 3600) / 60);
    const seconds = secondsInDay % 60;

    // ====== ФОРМИРУЕМ МАССИВ ДАННЫХ ======
    const units = [];
    if (years > 0) {
        units.push({ key: 'years', value: years, label: getLabel(years, 'год', 'года', 'лет') });
    }
    if (months > 0) {
        units.push({ key: 'months', value: months, label: getLabel(months, 'месяц', 'месяца', 'месяцев') });
    }
    // Дни, часы, минуты, секунды – всегда
    units.push({ key: 'days', value: days, label: getLabel(days, 'день', 'дня', 'дней') });
    units.push({ key: 'hours', value: hours, label: getLabel(hours, 'час', 'часа', 'часов') });
    units.push({ key: 'minutes', value: minutes, label: getLabel(minutes, 'минута', 'минуты', 'минут') });
    units.push({ key: 'seconds', value: seconds, label: getLabel(seconds, 'секунда', 'секунды', 'секунд') });

    // ====== ОБНОВЛЯЕМ DOM ======
    const numsContainer = document.querySelector('.main__timer-nums');
    const labelsContainer = document.querySelector('.main__timer-labels');

    numsContainer.innerHTML = '';
    labelsContainer.innerHTML = '';

    units.forEach((unit, index) => {
        // Число
        const numSpan = document.createElement('span');
        numSpan.className = 'main__timer-number';
        numSpan.id = unit.key;
        numSpan.textContent = String(unit.value).padStart(2, '0');
        numsContainer.appendChild(numSpan);

        // Добавляем двоеточие после каждого числа, кроме последнего
        if (index < units.length - 1) {
            const separator = document.createTextNode(':');
            numsContainer.appendChild(separator);
        }

        // Подпись
        const labelSpan = document.createElement('span');
        labelSpan.className = 'main__timer-label';
        labelSpan.id = unit.key + '-label';
        labelSpan.textContent = unit.label;
        labelsContainer.appendChild(labelSpan);
    });
}


function getLabel(n, one, two, five) {
    n = Math.abs(n);
    if (n % 10 === 1 && n % 100 !== 11) return one;
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return two;
    return five;
}


updateTimer();
setInterval(updateTimer, 1000);