const TIME_ZONE = "Africa/Lagos";

const clockElement = document.getElementById("clock");
const dateElement = document.getElementById("date");
const statusElement = document.getElementById("sync-status");
const progressElement = document.getElementById("second-progress");

// 5 × 7 dot-matrix font
const DIGITS = {
  "0": ["01110","10001","10011","10101","11001","10001","01110"],
  "1": ["00100","01100","00100","00100","00100","00100","01110"],
  "2": ["01110","10001","00001","00010","00100","01000","11111"],
  "3": ["11110","00001","00001","01110","00001","00001","11110"],
  "4": ["00010","00110","01010","10010","11111","00010","00010"],
  "5": ["11111","10000","10000","11110","00001","00001","11110"],
  "6": ["01110","10000","10000","11110","10001","10001","01110"],
  "7": ["11111","00001","00010","00100","01000","01000","01000"],
  "8": ["01110","10001","10001","01110","10001","10001","01110"],
  "9": ["01110","10001","10001","01111","00001","00001","01110"]
};

function getNigeriaTime() {
  return new Date(
    new Date().toLocaleString("en-US", {
      timeZone: TIME_ZONE
    })
  );
}

function createDigit(character) {
  const pattern = DIGITS[character];

  if (!pattern) {
    return document.createElement("span");
  }

  const digit = document.createElement("span");
  digit.className = "digit";

  pattern.forEach(row => {
    const rowElement = document.createElement("span");
    rowElement.className = "dot-row";

    [...row].forEach(value => {
      const dot = document.createElement("span");
      dot.className = value === "1" ? "dot active" : "dot";
      rowElement.appendChild(dot);
    });

    digit.appendChild(rowElement);
  });

  return digit;
}

function createClockDisplay(timeString) {
  const fragment = document.createDocumentFragment();

  [...timeString].forEach(character => {
    if (character === ":") {
      const separator = document.createElement("span");
      separator.className = "colon";
      separator.textContent = ":";
      fragment.appendChild(separator);
    } else {
      fragment.appendChild(createDigit(character));
    }
  });

  clockElement.replaceChildren(fragment);
}

function updateClock() {
  const now = new Date();

  const timeString = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }).format(now);

  const dateString = new Intl.DateTimeFormat("en-NG", {
    timeZone: TIME_ZONE,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now);

  createClockDisplay(timeString);

  if (dateElement) {
    dateElement.textContent = dateString;
  }

  if (statusElement) {
    statusElement.textContent = "LIVE · NIGERIA TIME";
  }

  if (progressElement) {
    const milliseconds = now.getMilliseconds();
    progressElement.style.width =
      `${(milliseconds / 1000) * 100}%`;
  }

  const delay = 1000 - now.getMilliseconds();
  setTimeout(updateClock, delay);
}

updateClock();
        
