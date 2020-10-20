const text = 
`<p className="mb-4">"A prediction is an educated guess..."</p>, <p className="mb-4">"Heres an example..."</p>`,
const openParagraphTag = <p className=" mb-4">{text}</p>;
const questions = [
   {
      id: "4f9811eade44-c653e41b-c585-4d27-a439",
      text: "What is the difference between an inference and a prediction?",
      email: "michelle@yahoo.com",
      createdAt: 1603203942,
      answers: [
         {
            id: "b37a480c-2de0-435e-8bc2-091760df2885", //this is the question
            text:
               `<p className="mb-4">"A prediction is an educated guess..."</p>, <p className="mb-4">"Heres an example..."</p>`,
            answeredAt: 1603232091,
            userId: "c653e41b-c585-4d27-a439-4f9811eade44",
            userHomeState: String,
         },
         {
            id: String,
            text: "Predictions are guesses about the future based on current evidence. Inferences are conclusions drawn about the current time. Think of a detective. A detective looks at clues and makes an inference about what might have happened at a crime scene. The detective infers what happened at the crime scene, meaning she used clues to guess what already happened.",
            answeredAt: Number,
            userId: String,
            userHomeState: String,
         },
      ],
   },
   {
      id: "faccfe2e0004-5d127345-c95d-42c3-bd84faccfe2e0004",
      text: "how do i math?",
      email: "jay@hotmail.com",
      createdAt: 1603203642,
   },
];
