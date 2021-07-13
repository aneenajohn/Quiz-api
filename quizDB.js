const quizDB = [
  {
  // quizzes: [{
  quizName: "English Quiz",
  questions: [
    {
      question:
        'Which of these is a synonym of the word "abash"?',
      points: 5,
      negativePoint: 2,
      options: [
        {
          text: "Disconcert",
          isSelected: false
        },
        {
          text: "Knock",
          isSelected: false
        },
        {
          text: "Soften",
          isSelected: false
        },
        {
          text: "Diminish",
          isSelected: false
        }
      ],
      answer:"Disconcert"
    },
    {
      question:
        'Which of these is a correct meaning of the word "abate"?',
      points: 15,
      negativePoint: 22,
      options: [
        {
          text: "To run away",
          isSelected: false
        },
        {
          text: "To diminish",
          isSelected: false
        },
        {
          text: "To lose",
          isSelected: false
        },
         {
          text: "To mock",
          isSelected: false
        },
      ],
      answer: "To diminish"
    },
    {
      question: 'Which of these is a synonym of the word "abdicate"?',
      points: 5,
      options: [
        {
          text: "Transport",
          isSelected: false
        },
        {
          text: "Recommend",
          isSelected: false
        },
        {
          text: "Relinquish",
          isSelected: false
        },
        {
          text:"Mark",
          isSelected: false
        }
      ],
      answer:"Recommend"
    },
    {
      question: 'Giving the dog a treat is a way to _____ his obedience.',
      points: 5,
      options: [
        {
          text: "Shed",
          isSelected: false
        },
        {
          text: "Abet",
          isSelected: false
        },
        {
          text: "Leave",
          isSelected: false
        },
        {
          text:"Steal",
          isSelected: false
        }
      ],
      answer:"Abet"
    },
    {
      question: 'Admitting your lies dioes not ____ you from the guilt of doing something wrong.',
      points: 5,
      options: [
        {
          text: "Realize",
          isSelected: false
        },
        {
          text: "Acknowledge",
          isSelected: false
        },
        {
          text: "Renegade",
          isSelected: false
        },
        {
          text:"Absolve",
          isSelected: false
        }
      ],
      answer:"Absolve"
    },
  ]
},
{
  quizName:"Spanish Quiz",
  questions:[
    {
      question:
        "What is the correct translation for 'The telephone'?",
      points: 5,
      negativePoint: 2,
      options: [
        {
          text: "el teléfono",
          isSelected: false
        },
        {
          text: "un paraguas",
          isSelected: false
        },
        {
          text:"una bicicleta",
          isSelected: false
        },
        {
          text:"el agua",
          isSelected: false
        }
      ],
      answer:"el teléfono"
    },
    {
      question:
        "How do you say 'Good morning'?",
      points: 5,
      negativePoint: 2,
      options: [
        {
          text: "Buenas noches",
          isSelected: false
        },
        {
          text: "Buenos días",
          isSelected: false
        },
        {
          text:"Buenas tardes",
          isSelected: false
        },
        {
          text:"adios",
          isSelected: false
        }
      ],
      answer:"Buenos días"

    },
    {
      question:
        'What is the correct translation for "credit card"?',
      points: 5,
      negativePoint: 2,
      options: [
        {
          text: "un periódico",
          isSelected: false
        },
        {
          text: "un libro",
          isSelected: false
        },
        {
          text:"una tarjeta de crédito",
          isSelected: false
        },
        {
          text:"un sobre",
          isSelected: false
        }
      ],
      answer:"una tarjeta de crédito"
    },
    {
      question:'What is the correct translation for "right"?',
      points: 5,
      negativePoint: 2,
      options: [
        {
          text: "izquierda",
          isSelected: false
        },
        {
          text: "tres",
          isSelected: false
        },
        {
          text:"derecha",
          isSelected: false
        },
        {
          text:"equivocado",
          isSelected: false
        }
      ],
      answer:"derecha"
    },
    {
      question:'How do you say "water"?',
      points: 5,
      negativePoint: 2,
      options: [
        {
          text: "la leche",
          isSelected: false
        },
        {
          text: "el agua",
          isSelected: false
        },
        {
          text:"un plato",
          isSelected: false
        },
        {
          text:"un tazón",
          isSelected: false
        }
      ],
      answer:"el agua"
    }
  ]
}
]

module.exports = { quizDB }