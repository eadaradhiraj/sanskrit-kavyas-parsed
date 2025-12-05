// Dictionary-style data embedded directly in JS
const shloka = 
[
  {
    "id": "1",
    "type": "budhbhushan",
    "parsings": [
      {
        "type": "line",
        "words": [
          {
            "parsed": "देव-दानव-कृत-स्तुति-भागम्",
            "meaning": "the object of praise of the Gods and Demons (men),",
            "text": "देवदानवकृतस्तुतिभागं",
            "samasa_vigraha": "देवैः दानवैः च कृता या स्तुतिः तस्याः भागम्"
          },
          {
            "parsed": "हेलया",
            "meaning": "easily",
            "text": "हेलया"
          },
          {
            "parsed": "विजित-दर्पित-नागम्",
            "meaning": "who has conquered the intoxicated elephants",
            "text": "विजितदर्पितनागम्",
            "samasa_vigraha": "विजिताः दर्पिताः नागाः येन तम्"
          }
        ]
      },
      {
        "type": "line",
        "words": [
          {
            "parsed": "भक्त-विघ्न-हनने",
            "meaning": "in destroying the obstacles of the devotees",
            "text": "भक्तविघ्नहनने",
            "samasa_vigraha": "भक्तानां विघ्नानां हनने"
          },
          {
            "parsed": "धृत-यत्नम्",
            "meaning": "who is diligent (intent upon),",
            "text": "धृतयत्नं",
            "samasa_vigraha": "धृतः यत्नः येन तम्"
          },
          {
            "parsed": "तम्",
            "meaning": "to him",
            "text": "तं"
          },
          {
            "parsed": "नमामि",
            "meaning": "I salute",
            "text": "नमामि"
          },
          {
            "parsed": "भव-बालक-रत्नम्",
            "meaning": "the jewel-like son of Shiva",
            "text": "भवबालकरत्नम्",
            "samasa_vigraha": "भवस्य बालक-रूपि रत्नम्"
          }
        ]
      }
    ]
  },
  {
    "id": "2",
    "type": "budhbhushan",
    "parsings": [
      {
        "type": "line",
        "words": [
          {
            "parsed": "शशाङ्क-मौलिम्",
            "meaning": "the one having the moon on the forehead (crest),",
            "text": "शशाङ्कमौलिं",
            "samasa_vigraha": "शशाङ्कः मौलौ यस्य तम्"
          },
          {
            "parsed": "भसितेन",
            "meaning": "due to the ashes",
            "text": "भसितेन"
          },
          {
            "parsed": "भासुरम्",
            "meaning": "radiant / shining,",
            "text": "भासुरं"
          },
          {
            "parsed": "पञ्च-आननम्",
            "meaning": "the five-headed one,",
            "text": "पञ्चाननं",
            "samasa_vigraha": "पञ्च आननानि यस्य तम्"
          },
          {
            "parsed": "शैल-सुता-अधिनाथम्",
            "meaning": "the husband of the daughter of the Himalaya (Parvati),",
            "text": "शैलसुताधिनाथम्",
            "samasa_vigraha": "शैलस्य सुतायाः अधिनाथम्"
          }
        ]
      },
      {
        "type": "line",
        "words": [
          {
            "parsed": "त्रि-अक्षम्",
            "meaning": "the three-eyed one,",
            "text": "त्र्यक्षं",
            "samasa_vigraha": "त्रीणि अक्षीणि यस्य तम्"
          },
          {
            "parsed": "गिरीशम्",
            "meaning": "the Lord of Mountains (Shiva),",
            "text": "गिरीशं",
            "samasa_vigraha": "गिरीणाम् ईशम्"
          },
          {
            "parsed": "दश-बाहु-मण्डितम्",
            "meaning": "adorned with ten arms,",
            "text": "दशबाहुमण्डितं",
            "samasa_vigraha": "दशभिः बाहुभिः मण्डितम्"
          },
          {
            "parsed": "कुबेर-मित्रम्",
            "meaning": "the friend of Kubera,",
            "text": "कुबेरमित्रं",
            "samasa_vigraha": "कुबेरस्य मित्रम्"
          },
          {
            "parsed": "सततम्",
            "meaning": "always / constantly",
            "text": "सततं"
          },
          {
            "parsed": "नमामि",
            "meaning": "I salute / pray",
            "text": "नमामि"
          }
        ]
      }
    ]
  }
]

function createShlokaElement(sh) {
  const container = document.createElement("div");
  container.className = "shloka";

  // Clickable shloka text (acts as toggle)
  const text = document.createElement("div");
  text.className = "text";
  const mainText = getMainText(sh).replace("\n", "<br>");
  text.innerHTML = mainText;
  container.appendChild(text);

  // Parsing (phrases) container, initially hidden
  const phrasesDiv = document.createElement("div");
  phrasesDiv.className = "phrases hidden";

  // Outer list: one item per Sanskrit word
  const outerList = document.createElement("ul");
  outerList.style.marginLeft = "1.2rem";

  sh.parsings.forEach(parsing => {
    parsing.words.forEach(w => {
      const wordItem = document.createElement("li");
      wordItem.className = "phrase";

      // Top-level: Sanskrit text
      const sk = document.createElement("span");
      sk.className = "sanskrit";
      sk.textContent = w.text;
      wordItem.appendChild(sk);

      // Inner list for parsed / vigraha / meaning
      const innerList = document.createElement("ul");
      innerList.style.marginLeft = "1.2rem";

      // Parsed (only if different)
      if (w.parsed && w.parsed !== w.text) {
        const parsedLi = document.createElement("li");
        parsedLi.className = "parsed";
        parsedLi.textContent = w.parsed;
        innerList.appendChild(parsedLi);
      }

      // Samāsa-vigraha (if present)
      if (w.samasa_vigraha) {
        const samasaLi = document.createElement("li");
        samasaLi.className = "samasa";
        samasaLi.textContent = w.samasa_vigraha;
        innerList.appendChild(samasaLi);
      }

      // Meaning (always)
      const meaningLi = document.createElement("li");
      meaningLi.className = "meaning";
      meaningLi.textContent = w.meaning;
      innerList.appendChild(meaningLi);

      wordItem.appendChild(innerList);
      outerList.appendChild(wordItem);
    });
  });

  phrasesDiv.appendChild(outerList);
  container.appendChild(phrasesDiv);

  // Toggle show/hide on shloka click
  text.addEventListener("click", () => {
    phrasesDiv.classList.toggle("hidden");
  });

  return container;
}

// When DOM is ready, render ALL shlokas
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  shloka.forEach(sh => {
    app.appendChild(createShlokaElement(sh));
  });
});

function getMainText(sh) {
  const line1 = sh.parsings[0].words.map(w => w.text).join(" ") + "।";
  const line2 = sh.parsings[1].words.map(w => w.text).join(" ") + "।।" + sh.id + "।।";
  return line1 + "\n" + line2;
}
