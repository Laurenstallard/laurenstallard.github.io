const resultMapping = {
    "Nominative": {
        "Masculine": {
            "Definite": { "line": "Der/e", "example": "Der braune Hund ist klein." },
            "Indefinite": { "line": "Ein/er", "example": "Ein interessanter Film läuft heute Abend im Kino." },
            "No article": { "line": "-er", "example": "schneller Zug." }
        },
        "Feminine": {
            "Definite": { "line": "Die/e", "example": "Die kleine Katze spielt gern mit ihrem roten Ball." },
            "Indefinite": { "line": "Eine/e", "example": "Meine beste Freundin liest gerne Bücher." },
            "No article": { "line": "-e", "example": "leckere Marmelade" }
        },
        "Neuter": {
            "Definite": { "line": "Das/e", "example": "Das schöne Haus ist teuer." },
            "Indefinite": { "line": "Ein/es", "example": "Ein leckeres Eis ist perfekt für einen heißen Tag." },
            "No article": { "line": "-es", "example": "blaues Hemd." }
        },
        "Plural": {
            "Definite": { "line": "Die/en", "example": "Die teuren Handys haben großen Bildschirmen." },
            "Indefinite": { "line": "N/A but meine", "example": "Deine komischen Haustiere haben Angst vor Gewittern." },
            "No article": { "line": "-e", "example": "Umweltfreundliche Einkaufstaschen." }
        }
    },
    "Accusative": {
        "Masculine": {
            "Definite": { "line": "Den/en", "example": "Wir essen den frischen Salat." },
            "Indefinite": { "line": "Einen/en", "example": "Ich brauche einen neuen Rasenmäher." },
            "No article": { "line": "-en", "example": "fleißigen Schüler." }
        },
        "Feminine": {
            "Definite": { "line": "Die/e", "example": "Ich kaufe die frische grüne Birne." },
            "Indefinite": { "line": "Eine/e", "example": "Er hat eine faszinierende Geschichte erzählt." },
            "No article": { "line": "-e", "example": "neue Theorie." }
        },
        "Neuter": {
            "Definite": { "line": "Das/e", "example": "Das Kaninchen hat das große Schnitzel gegessen." },
            "Indefinite": { "line": "Ein/es", "example": "Sie hat ein interessantes altes Buch gelesen." },
            "No article": { "line": "-es", "example": "schönes Haus." }
        },
        "Plural": {
            "Definite": { "line": "Die/en", "example": "Die Kinder haben die bemalten Ostereier gefunden." },
            "Indefinite": { "line": "N/A but meine", "example": "Er hat seine neuen Ideen präsentiert." },
            "No article": { "line": "-e", "example": "Die Touristen besuchen historische alte Städte." }
        }
    },
    "Dative": {
        "Masculine": {
            "Definite": { "line": "Dem/en", "example": "Ich gebe dem alten Mann ein Buch." },
            "Indefinite": { "line": "Einem/en", "example": "Ich schenke einem netten Nachbarn Blumen." },
            "No article": { "line": "-em", "example": "Möchten Sie die Suppe mit frischem Spargel?" }
        },
        "Feminine": {
            "Definite": { "line": "Der/en", "example": "Sprichst du mit der bekannten Ärztin?" },
            "Indefinite": { "line": "Einer/en", "example": "Ich antworte einer klugen Schülerin." },
            "No article": { "line": "-er", "example": "Wie schmecken die Knödel mit scharfer Soße?" }
        },
        "Neuter": {
            "Definite": { "line": "Dem/en", "example": "Das Kaninchen gehört dem kleinen Kind." },
            "Indefinite": { "line": "Einem/en", "example": "Ich zeige einem braven Hund Tricks." },
            "No article": { "line": "-em", "example": "Ist der Rinderbraten mit deutschem Brot lecker?" }
        },
        "Plural": {
            "Definite": { "line": "Den/en", "example": "Ich erzähle den interessanten Kindern eine Geschichte." },
            "Indefinite": { "line": "N/A but meinen", "example": "Er hat mit seinen Haustieren durch den Wald gelaufen." },
            "No article": { "line": "-en", "example": "Ich kann mit anderen Leuten Deutsch sprechen." }
        }
    },
    "Genitive": {
        "Masculine": {
            "Definite": { "line": "Des/en", "example": "Wegen des dünnen Ozonlochs ist Hautkrebs ein großes Problem in Australien." },
            "Indefinite": { "line": "Eines/en", "example": "Die Familie meines besten Freundes." },
            "No article": { "line": "-en", "example": "lustigen Komiker." }
        },
        "Feminine": {
            "Definite": { "line": "Der/en", "example": "Das ist die Tasche der jungen Frau." },
            "Indefinite": { "line": "Einer/en", "example": "Das ist die Geschichte einer mutigen Heldin." },
            "No article": { "line": "-er", "example": "gefährlicher Seewespe." }
        },
        "Neuter": {
            "Definite": { "line": "Des/en", "example": "Das Futter des gefährlichen Tieres ist warm." },
            "Indefinite": { "line": "Eines/en", "example": "Die Größe eines braunen Meerschweinchen kann variieren." },
            "No article": { "line": "-en", "example": "Faulen Faultier." }
        },
        "Plural": {
            "Definite": { "line": "Der/en", "example": "Die Meinungen der intelligenten Professorinnen sind wichtig." },
            "Indefinite": { "line": "N/A but meiner", "example": "Die Räder meiner teuren Autos sind neu.." },
            "No article": { "line": "-er", "example": "wunderbarer Menschen." }
        }
    }
};

// Add an event listener to handle form submission
document.getElementById("nounForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input values
    const caseValue = document.querySelector('input[name="case"]:checked')?.value;
    const genderValue = document.querySelector('input[name="gender"]:checked')?.value;
    const articleValue = document.querySelector('input[name="article"]:checked')?.value;

    // Validate user input and display results
    if (caseValue && genderValue && articleValue) {
        const result = resultMapping[caseValue]?.[genderValue]?.[articleValue];

        if (result) {
            document.getElementById("resultLine").textContent = result.line;
            document.getElementById("exampleSentence").textContent = result.example;
        } else {
            alert("Result not found for this combination.");
        }
    } else {
        alert("Please answer all the questions.");
    }
});
